import { Ticket, calculateUrgency } from "src/api/v1/servaces/ticketService";

describe("calculateUrgency", () => {
    it("it should return Moderate", () => {
        // Arrange
        const ticket: Ticket = {
            id: 1,
            title: "Update footer copyright year",
            description: "Footer still shows 2024",
            createdAt: "2025-01-12T10:00:00.000Z",
            priority: "low",
            status: "open"
        }
        // Act
        const result = calculateUrgency(ticket);

        // Assert
        expect(result).not.toBeNull();
        expect(result?.ticketAge).toBe(3);
        expect(result?.urgencyScore).toBe(25);
        expect(result?.urgencyLevel).toBe("Low Urgency. Address when capacity allows.");
    });
});