
jest.mock("../src/api/v1/controllers/ticketController", () => ({
  healthData: jest.fn((req, res) => res.sendStatus(200)),
  getAllTicket: jest.fn((req, res) => res.sendStatus(200)),
  getTicketById: jest.fn((req, res) => res.sendStatus(200)),
  ticketUrgencyById: jest.fn((req, res) => res.sendStatus(200)),
  createTicket: jest.fn((req, res) => res.sendStatus(200)),
  updateTicket: jest.fn((req, res) => res.sendStatus(200)),
  deleteTicketById: jest.fn((req, res) => res.sendStatus(200)),
}));

import request from "supertest";
import express from "express";
import routes from "../src/api/v1/routes/ticketRoutes";
import * as controller from "../src/api/v1/controllers/ticketController";

const app = express();
app.use(express.json());
app.use("/api/v1", routes);

describe("ticketRoute", () => {
	afterEach(() => {
		jest.clearAllMocks();
	});

    	describe("GET /api/v1/health", () => {
		it("should call healthData controller", async () => {
			await request(app).get("/api/v1/health");
			expect(controller.healthData).toHaveBeenCalled();
		});
	})

	describe("GET /api/v1/tickets", () => {
		it("should call getAllTicket controller", async () => {
			await request(app).get("/api/v1/tickets");
			expect(controller.getAllTicket).toHaveBeenCalled();
		});
	});

	describe("GET /api/v1/tickets/:id", () => {
		it("should call getticketById controller", async () => {
			await request(app).get("/api/v1/tickets/:id");
			expect(controller.getTicketById).toHaveBeenCalled();
		});
	});

	describe("GET /api/v1/tickets/1/urgency", () => {
		it("should call ticketUrgencyById controller", async () => {
			await request(app).get("/api/v1/tickets/1/urgency");
			expect(controller.ticketUrgencyById).toHaveBeenCalled();
		});
	});

	describe("POST /api/v1/tickets", () => {
		it("should call createTickets controller", async () => {
			await request(app).post("/api/v1/tickets").send({
			});
			expect(controller.createTicket).toHaveBeenCalled();
		});
	});

	describe("PUT /api/v1/tickets/:id", () => {
		it("should call updateTicket controller", async () => {
			await request(app).put("/api/v1/tickets/1").send({
			});
			expect(controller.updateTicket).toHaveBeenCalled();
		});
	});

	describe("DELETE /api/v1/tickets/:id", () => {
		it("should call deleteTicketByID controller", async () => {
			await request(app).delete("/api/v1/tickets/1");
			expect(controller.deleteTicketById).toHaveBeenCalled();
		});
	});
});