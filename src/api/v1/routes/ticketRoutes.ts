import express, { Router } from "express";
import { healthData, getTicketById, createTicket, updateTicket, deleteTicketById } from "../controllers/ticketController";
import { getAllTicket } from "../controllers/ticketController";

const ticketRouter: Router = express.Router();

ticketRouter.get("/health", healthData);
ticketRouter.get("/tickets", getAllTicket);
ticketRouter.get("/tickets/:id", getTicketById);
// ticketRouter.get("/tickets/:id/urgency");
ticketRouter.post("/tickets", createTicket);
ticketRouter.put("/tickets/:id", updateTicket);
ticketRouter.delete("/tickets/:id", deleteTicketById);

export default ticketRouter;