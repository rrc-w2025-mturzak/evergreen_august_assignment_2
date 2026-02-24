
 export const tickets: Ticket[] = [
    { 
        id: 1,
        title: "Update footer copyright year",
        description: "Footer still shows 2024",
        createdAt: "2025-01-12T10:00:00.000Z",
        priority: "low",
        status: "open"

    },
    { 
        id: 2,
        title: "Profile picture upload slow",
        description: "Upload takes 30+ seconds",
        createdAt: "2025-01-13T10:00:00.000Z",
        priority: "medium",
        status: "open"
    },    
    { 
        id: 3,
        title: "Dashboard loading slowly",
        description: "Dashboard takes 10+ seconds to load",
        createdAt: "2025-01-09T10:00:00.000Z",
        priority: "medium",
        status: "open"
    },    
    { 
        id: 4,
        title: "Password reset email delayed",
        description: "Reset emails taking over 30 minutes",
        createdAt: "2025-01-10T10:00:00.000Z",
        priority: "high",
        status: "open"
    },    
    { 
        id: 5,
        title: "Export to PDF not working",
        description: "PDF export fails silently",
        createdAt: "2025-01-06T10:00:00.000Z",
        priority: "high",
        status: "open"
    },    
    { 
        id: 6,
        title: "Login page not loading",
        description: "Users report blank screen on login",
        createdAt: "2025-01-09T10:00:00.000Z",
        priority: "critical",
        status: "open"
    },    
    { 
        id: 7,
        title: "Dark mode toggle broken",
        description: "Dark mode doesn't persist after refresh",
        createdAt: "2025-01-05T10:00:00.000Z",
        priority: "medium",
        status: "resolved"
    },
];

export interface Ticket {
    id: number;
    title: string;
    description: string;
    createdAt: string;
    priority: string;
    status: string
}
export const getAllTickets = (): {} => {
    return {count: tickets.length, tickets: tickets};
};

export const getOneTicket = (id: number): Ticket | undefined => {
    let result = tickets.find(x => x.id == id)
    return result;
};

export const createNewTicket = async (ticketData: {
    id: number;
    title: string;
    description: string;
    priority: string;
    status: string;
}): Promise<Ticket> => {
    const newTicket: Ticket = {
        id: ticketData.id,
        title: ticketData.title,
        description: ticketData.description,
        createdAt: Date.now().toString(),
        priority: ticketData.priority,
        status: ticketData.status
    };

    tickets.push(newTicket);

    return structuredClone(newTicket);
};

export const updateTicketById = async (
  id: string,
  ticketData: Pick<Ticket, "id" | "description" >
): Promise<Ticket> => {

  const index = tickets.findIndex(item => item.id === Number(id));

  if (index === -1) {
    throw new Error(`Ticket with ID ${id} not found`);
  }

  tickets[index] = {
    ...tickets[index],
    ...ticketData,
  };

  return structuredClone(tickets[index]);
};

export const deleteTicket = async (id: string): Promise<void> => {
    const index = tickets.findIndex(ticket => ticket.id === Number(id));

    if (index === -1) {
        throw new Error(`Item with ID ${id} not found`);
    }

    tickets.splice(index, 1);
};

export function calculateUrgency(ticket: Ticket): any {
    let id = ticket.id;
    let title = ticket.title;
    let description = ticket.description;
    let createdAt = ticket.createdAt;
    let priority = ticket.priority;
    let status = ticket.status;
    let urgencyScore;
    let urgencyLevel;

    const PRIORITY_BASE = {
        low: 10,
        medium: 20,
        high: 30,
        critical: 50
    } as const;

    const baseScore = PRIORITY_BASE[priority as keyof typeof PRIORITY_BASE];

    const referenceDate = new Date("2025-01-15T00:00:00.000Z");
    const created = new Date(createdAt);
    const diffMs = referenceDate.getTime() - created.getTime();
    const ticketAge = Math.ceil(diffMs / (1000 * 60 * 60 * 24));

    urgencyScore = baseScore + ticketAge * 5;

    if (status === "resolved") {
        urgencyScore = 0;
    }

    switch (true) {
        case urgencyScore === 0:
            urgencyLevel = "Minimal. Ticket resolved.";
            break;

        case urgencyScore >= 80:
            urgencyLevel = "Critical. Immediate attention required.";
            break;

        case urgencyScore >= 55:
            urgencyLevel = "High Urgency. Prioritize resolution.";
            break;

        case urgencyScore >= 30:
            urgencyLevel = "Moderate. Schedual for attention.";
            break;

        case urgencyScore > 0:
            urgencyLevel = "Low Urgency. Address when capacity allows.";
            break;
    }

    return {
        id,
        title,
        description,
        createdAt,
        priority,
        status,
        ticketAge,
        urgencyScore,
        urgencyLevel
    };
}
