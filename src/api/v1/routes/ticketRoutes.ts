import express, { Router } from "express";

const eventRouter: Router = express.Router();

eventRouter.get("/health");
eventRouter.get("/tickets");
eventRouter.get("/tickets/:id");
eventRouter.get("/tickets/:id/urgency");
eventRouter.post("/tickets");
eventRouter.put("/tickets/:id");
eventRouter.delete("/tickets/:id");

export default eventRouter;