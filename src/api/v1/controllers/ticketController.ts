import { Request, Response } from "express";
import { HTTP_STATUS } from "../../../constants/httpConstants";
import { getAllTickets, getOneTicket } from "../servaces/ticketService";

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

export const getTicketById = (req: Request, res: Response): void => {
    try {
        const id = Number(req.params.id);

        if (isNaN(id)) {
            res.status(HTTP_STATUS.BAD_REQUEST).json({
                message: `Invalid ticket ID: ${req.params.id}`
            });
        } 
        else {
            const item = getOneTicket(id);

            if (!item) {
                res.status(HTTP_STATUS.NOT_FOUND).json({
                    message: `Ticket with ID ${id} not found`
                });
            } else {
                res.status(HTTP_STATUS.OK).json({
                    message: "Ticket retrieved successfully",
                    data: item,
                });
            }
        }

    } catch (error: unknown) {
        res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({
            message: "Failed to retrieve ticket",
        });
    }
};