"use client";
import TicketTable from "@/components/tables/TicketTable";
import { generateMockTickets } from "@/utils/mockTickets";

export default function TicketsPage() {
  const data = generateMockTickets(500);
  return (
    <>
      <h1 className="text-2xl font-semibold mb-4">Tickets</h1>
      <div style={{ height: "70vh" }}>
        <TicketTable data={data} />
      </div>
    </>
  );
}
