import type { Ticket, TicketStatus } from "../types";

const TicketsStatistics = ({
  tickets,
  getTicketsByStatus,
}: {
  tickets: Ticket[];
  getTicketsByStatus: (status: TicketStatus) => Ticket[];
}) => {
  return (
    <ul
      aria-labelledby="Ticket statistics"
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-3"
    >
      <li className="text-dark">Total Tickets ({tickets.length})</li>
      <li className="text-dark">
        Open Tickets ({getTicketsByStatus("open").length})
      </li>
      <li className="text-dark">
        In progress Tickets ({getTicketsByStatus("in_progress").length})
      </li>
      <li className="text-dark">
        Closed Tickets ({getTicketsByStatus("closed").length})
      </li>
    </ul>
  );
};

export default TicketsStatistics;
