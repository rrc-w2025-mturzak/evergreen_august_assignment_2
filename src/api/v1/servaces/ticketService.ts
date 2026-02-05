export interface Ticket {
    id: number;
    title: string;
    description: string;
    createdAt: string;
    priority: string;
    status: string;
    daysOld?: number;
}

 export const tickets: Ticket[] = [
    { 
        id: 1,
        title: "Update footer copyright year",
        description: "Footer still shows 2024",
        createdAt: "2025-01-12T10:00:00.000Z",
        priority: "low",
        status: "open",
        daysOld: 3

    },
    { 
        id: 2,
        title: "Profile picture upload slow",
        description: "Upload takes 30+ seconds",
        createdAt: "2025-01-13T10:00:00.000Z",
        priority: "medium",
        status: "open",
        daysOld: 2
    },    
    { 
        id: 3,
        title: "Dashboard loading slowly",
        description: "Dashboard takes 10+ seconds to load",
        createdAt: "2025-01-09T10:00:00.000Z",
        priority: "medium",
        status: "open",
        daysOld: 6
    },    
    { 
        id: 4,
        title: "Password reset email delayed",
        description: "Reset emails taking over 30 minutes",
        createdAt: "2025-01-10T10:00:00.000Z",
        priority: "high",
        status: "open",
        daysOld: 5
    },    
    { 
        id: 5,
        title: "Export to PDF not working",
        description: "PDF export fails silently",
        createdAt: "2025-01-06T10:00:00.000Z",
        priority: "high",
        status: "open",
        daysOld: 9
    },    
    { 
        id: 6,
        title: "Login page not loading",
        description: "Users report blank screen on login",
        createdAt: "2025-01-09T10:00:00.000Z",
        priority: "critical",
        status: "open",
        daysOld: 6
    },    
    { 
        id: 7,
        title: "Dark mode toggle broken",
        description: "Dark mode doesn't persist after refresh",
        createdAt: "2025-01-05T10:00:00.000Z",
        priority: "medium",
        status: "resolved",
        daysOld: 10
    },
];

export const getAllTickets = () => {
  const nodaysold = tickets.map(({ daysOld, ...rest }) => rest);

  return {
    count: nodaysold.length,
    data: nodaysold
  };
};

export const getOneTicket = (id: number) => {
  const ticket = tickets.find(t => t.id === id);
  if (!ticket) return null;

  const { daysOld, ...rest } = ticket;
  return rest;
};

export const createNewTicket = (id: number, 
    title: string, 
    description: string, 
    createdAt: string, 
    priority: string, 
    status: string): string => {
  return `Created a new Ticket:
  Id: ${id}
  Title: ${title}
  Description: ${description}
  Created: ${createdAt}
  Priority: ${priority}
  Status: ${status}`;
};

export const updateTicketById = (id: number, 
    title: string, 
    description: string, 
    createdAt: string, 
    priority: string, 
    status: string): string => {
  return `Updated Ticket:
  Id: ${id}
  Title: ${title}
  Description: ${description}
  Created: ${createdAt}
  Priority: ${priority}
  Status: ${status}`;
};

export const deleteTicket = (id: number): string => {
    return `Deleted Ticket: ${id}`;
};
