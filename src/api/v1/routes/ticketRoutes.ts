import express, { Router } from "express";
import { healthData } from "../controllers/ticketController";
import { getAllTicket } from "../controllers/ticketController";

const ticketRouter: Router = express.Router();

ticketRouter.get("/health", healthData);
ticketRouter.get("/tickets", getAllTicket);
// ticketRouter.get("/tickets/:id");
// ticketRouter.get("/tickets/:id/urgency");
// ticketRouter.post("/tickets");
// ticketRouter.put("/tickets/:id");
// ticketRouter.delete("/tickets/:id");

export default ticketRouter;