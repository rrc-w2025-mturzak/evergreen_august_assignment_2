import { Ticket, calculateUrgency } from "src/api/v1/servaces/ticketService";

describe("calculateUrgency", () => {
    it("it should return Moderate", () => {
        // Arrange
        const ticket: Ticket = {
            id: 1,
            title: "Test #1",
            description: "Low urgency",
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

describe("calculateUrgency", () => {
    it("it should return Moderate", () => {
        // Arrange
        const ticket: Ticket = {
            id: 2,
            title: "Test #2",
            description: "Moderate urgency",
            createdAt: "2025-01-13T10:00:00.000Z",
            priority: "medium",
            status: "open"
        }
        // Act
        const result = calculateUrgency(ticket);

        // Assert
        expect(result).not.toBeNull();
        expect(result?.ticketAge).toBe(2);
        expect(result?.urgencyScore).toBe(30);
        expect(result?.urgencyLevel).toBe("Moderate. Schedual for attention.");
    });
});

describe("calculateUrgency", () => {
    it("it should return High Urgency.", () => {
        // Arrange
        const ticket: Ticket = {
            id: 4,
            title: "test #3",
            description: "High urgency",
            createdAt: "2025-01-10T10:00:00.000Z",
            priority: "high",
            status: "open"
        }
        // Act
        const result = calculateUrgency(ticket);

        // Assert
        expect(result).not.toBeNull();
        expect(result?.ticketAge).toBe(5);
        expect(result?.urgencyScore).toBe(55);
        expect(result?.urgencyLevel).toBe("High Urgency. Prioritize resolution.");
    });
});

describe("calculateUrgency", () => {
    it("it should return Critical Urgency.", () => {
        // Arrange
        const ticket: Ticket = {
            id: 7,
            title: "test #4",
            description: "Critical urgency",
            createdAt: "2025-01-09T10:00:00.000Z",
            priority: "critical",
            status: "open"
        }
        // Act
        const result = calculateUrgency(ticket);

        // Assert
        expect(result).not.toBeNull();
        expect(result?.ticketAge).toBe(6);
        expect(result?.urgencyScore).toBe(80);
        expect(result?.urgencyLevel).toBe("Critical. Immediate attention required.");
    });
});