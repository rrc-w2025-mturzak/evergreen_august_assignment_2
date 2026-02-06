
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
    status: string;
}
export const getAllTickets = (): {} => {
    return {count: tickets.length, tickets: tickets};
};

export const getOneTicket = (id: number): Ticket | undefined => {
    let result = tickets.find(x => x.id == id)
    return result;
};

export const createNewTicket = (newTicket: Ticket): Ticket => {
    tickets.push(newTicket)
    return newTicket
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

