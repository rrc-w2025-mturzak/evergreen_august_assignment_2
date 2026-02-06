import express, { Router } from "express";
import { healthData, createTicket, getTicketById, updateTicket, deleteTicketById, ticketUrgencyById } from "../controllers/ticketController";
import { getAllTicket } from "../controllers/ticketController";

const ticketRouter: Router = express.Router();

ticketRouter.get("/health", healthData);
ticketRouter.get("/tickets", getAllTicket);
ticketRouter.get("/tickets/:id", getTicketById);
ticketRouter.get("/tickets/:id/urgency", ticketUrgencyById);
ticketRouter.post("/tickets", createTicket);
ticketRouter.put("/tickets/:id", updateTicket);
ticketRouter.delete("/tickets/:id", deleteTicketById);

export default ticketRouter;