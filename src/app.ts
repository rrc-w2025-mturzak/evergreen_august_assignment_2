import express, {Express} from "express";
import ticketRouter from "./api/v1/routes/ticketRoutes";

const app: Express = express();

app.use(express.json());

app.use("/api/v1/", ticketRouter);

export default app;
