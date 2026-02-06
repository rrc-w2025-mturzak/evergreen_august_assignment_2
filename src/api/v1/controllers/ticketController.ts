import { Request, Response, NextFunction } from "express";
import { HTTP_STATUS } from "../../../constants/httpConstants";
import * as ticketService from "../servaces/ticketService";
import { getAllTickets, getOneTicket, Ticket, calculateUrgency, tickets} from "../servaces/ticketService";

export const healthData = (req: Request, res: Response) => {
    res.status(HTTP_STATUS.OK).json({
        status: HTTP_STATUS.OK,
        uptime: process.uptime(),
        timestamp: new Date().toISOString(),
        version: "1.0.0"
    });
};

export const getAllTicket = (req: Request, res: Response) => {
    let result = getAllTickets();
    res.status(HTTP_STATUS.OK).json({ message: "Tickets retrieved", ...result });
};

export const getTicketById = (req: Request, res: Response) => {
    let id = Number(req.params.id)

    if (Number.isNaN(id)) {
      res.status(HTTP_STATUS.BAD_REQUEST).json({message: `Invalid ticket ID: ${req.params.id}`});
    }

    let result = getOneTicket(id)

    if (result === undefined) {
      res.status(HTTP_STATUS.NOT_FOUND).json({message: `Ticket with ID ${id} not found`});
    }
    
    res.status(HTTP_STATUS.OK).json(result);
};

export const createTicket = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const newTicket = req.body;

        if (!req.body.id) {
            res.status(HTTP_STATUS.BAD_REQUEST).json({
                message: "Missing required field: title",
            });
        } else if (!req.body.description) {
            res.status(HTTP_STATUS.BAD_REQUEST).json({
                message: "Missing required field: description",
            });
        }
        
        const updatedItem: Ticket = await ticketService.createNewTicket(newTicket);

        res.status(HTTP_STATUS.OK).json({
            message: "Item updated successfully",
            data: updatedItem,
        });
    } catch (error: unknown) {
        next(error);
    }
};

export const createItem = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        if (!req.body.title) {
            res.status(HTTP_STATUS.BAD_REQUEST).json({
                message: "Missing required field: title",
            });
        } else if (!req.body.description) {
            res.status(HTTP_STATUS.BAD_REQUEST).json({
                message: "Missing required field: description",
            });
        } else {
            const { id, title, description, priority, status } = req.body;

            const newItem: Ticket = await ticketService.createNewTicket({ id, title, description, priority, status })
            res.status(HTTP_STATUS.CREATED).json({
                message: "Item created successfully",
                data: newItem,
            });
        }
    } catch (error: unknown) {
        next(error);
    }
};

export const ticketUrgencyById = (req: Request, res: Response): void => {
    const id = Number(req.params.id);

    if (isNaN(id)) {
        res.status(HTTP_STATUS.BAD_REQUEST).json({
            message: `Invalid event ID: ${req.params.id}`
        });
    } else {
        const ticket = tickets.find(e => e.id === id);

        if (!ticket) {
            res.status(HTTP_STATUS.NOT_FOUND).json({
                message: `Event with ID ${id} not found`
            });
        } else {
            const result = calculateUrgency(ticket);
            res.status(HTTP_STATUS.OK).json({ message: "Ticket urgency calculated", data: result });
        }
    }
};

export const updateTicket = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {

        if (!req.body.id) {
            res.status(HTTP_STATUS.BAD_REQUEST).json({
                message: "Missing required field: title",
            });
        } else if (!req.body.description) {
            res.status(HTTP_STATUS.BAD_REQUEST).json({
                message: "Missing required field: description",
            });
        }
        
        const { id } = req.params;

        const { description } = req.body;

        const updatedItem: Ticket = await ticketService.updateTicketById(id, { id: Number(id), description });

        res.status(HTTP_STATUS.OK).json({
            message: "Item updated successfully",
            data: updatedItem,
        });
    } catch (error: unknown) {
        next(error);
    }
};

export const deleteTicketById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const id: string = req.params.id;

        await ticketService.deleteTicket(id);
        res.status(HTTP_STATUS.OK).json({
            message: "Item deleted successfully",
        });
    } catch (error: unknown) {
        next(error);
    }
};


