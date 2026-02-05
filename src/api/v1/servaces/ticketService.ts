export interface Ticket {
    id: number;
    title: string;
    description: string;
    creeatedAt: string;
    priority: string;
    status: string;
}

 export const tickets: Ticket[] = [
    { 
        id: 1,
        title: "Update footer copyright year",
        description: "Footer still shows 2024",
        creeatedAt: "2025-01-12T10:00:00.000Z",
        priority: "low",
        status: "open"

    },
    { 
        id: 2,
        title: "Profile picture upload slow",
        description: "Upload takes 30+ seconds",
        creeatedAt: "2025-01-13T10:00:00.000Z",
        priority: "medium",
        status: "open"
    },    
    { 
        id: 3,
        title: "Dashboard loading slowly",
        description: "Dashboard takes 10+ seconds to load",
        creeatedAt: "2025-01-09T10:00:00.000Z",
        priority: "medium",
        status: "open"
    },    
    { 
        id: 4,
        title: "Password reset email delayed",
        description: "Reset emails taking over 30 minutes",
        creeatedAt: "2025-01-10T10:00:00.000Z",
        priority: "high",
        status: "open"
    },    
    { 
        id: 5,
        title: "Export to PDF not working",
        description: "PDF export fails silently",
        creeatedAt: "2025-01-06T10:00:00.000Z",
        priority: "high",
        status: "open"
    },    
    { 
        id: 6,
        title: "Login page not loading",
        description: "Users report blank screen on login",
        creeatedAt: "2025-01-09T10:00:00.000Z",
        priority: "critical",
        status: "open"
    },    
    { 
        id: 7,
        title: "Dark mode toggle broken",
        description: "Dark mode doesn't persist after refresh",
        creeatedAt: "2025-01-05T10:00:00.000Z",
        priority: "medium",
        status: "resolved"
    },
];

export const getAllTickets = () => {
    return {
        count: tickets.length,
        data: tickets
    }
};