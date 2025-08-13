export interface Ticket {
  id: number;
  title: string;
  status: "Open" | "In Progress" | "Closed";
  priority: "Low" | "Medium" | "High";
  requester: string;
  createdAt: string;
}

const statuses = ["Open", "In Progress", "Closed"] as const;
const priorities = ["Low", "Medium", "High"] as const;

export function generateMockTickets(count = 500): Ticket[] {
  const tickets: Ticket[] = [];
  for (let i = 1; i <= count; i++) {
    tickets.push({
      id: i,
      title: `Sample issue #${i}`,
      status: statuses[Math.floor(Math.random() * statuses.length)],
      priority: priorities[Math.floor(Math.random() * priorities.length)],
      requester: `user${Math.floor(Math.random() * 100)}@example.com`,
      createdAt: new Date(Date.now() - Math.random() * 1e10).toISOString(),
    });
  }
  return tickets;
}
