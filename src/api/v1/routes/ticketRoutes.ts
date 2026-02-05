import express, { Router } from "express";

const ticketRouter: Router = express.Router();

ticketRouter.get("/health");
ticketRouter.get("/tickets");
ticketRouter.get("/tickets/:id");
ticketRouter.get("/tickets/:id/urgency");
ticketRouter.post("/tickets");
ticketRouter.put("/tickets/:id");
ticketRouter.delete("/tickets/:id");

export default ticketRouter;