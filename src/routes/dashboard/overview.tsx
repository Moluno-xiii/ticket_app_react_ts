import { createFileRoute, Link } from "@tanstack/react-router";
import useTicket from "../../hooks/useTicket";
import useSetPageName from "../../hooks/useSetPageName";
import type { Ticket } from "../../types";
import { useState } from "react";

export const Route = createFileRoute("/dashboard/overview")({
  component: RouteComponent,
});

type TicketStatus = "in_progress" | "open" | "closed" | "all";

function RouteComponent() {
  useSetPageName("Ticketier | Dashboard (Overview)");
  const { tickets } = useTicket();
  const [currentFilter, setCurrentFilter] = useState<TicketStatus>("all");

  const getTicketsByStatus = (status: TicketStatus): Ticket[] => {
    if (status === "all") return tickets;
    return tickets.filter((ticket) => ticket.status === status);
  };

  const filteredTickets = getTicketsByStatus(currentFilter);

  return (
    <div className="flex flex-col gap-y-5 h-full w-full">
      <header className="flex flex-row justify-between items-center">
        <h2 className="text-xl md:text-2xl font-grotesk text-primary">
          Overview
        </h2>
        <Link
          className="px-4 max-sm:text-sm py-2 bg-primary text-white w-fit rounded-md font-grotesk hover:bg-primary/80 transition-all duration-300"
          to="/tickets"
        >
          Tickets management
        </Link>
      </header>
      <section
        aria-labelledby="tickets display section"
        className="flex-1 h-full"
      >
        {tickets.length > 0 ? (
          <section
            aria-labelledby="ticket details section"
            className="flex flex-col gap-y-4 md:gap-y-6"
          >
            <TicketsStatistics
              tickets={tickets}
              getTicketsByStatus={getTicketsByStatus}
            />
            <div className="flex flex-row justify-end gap-x-4 items-center">
              <p>Filter by : </p>
              <select
                name="ticket_filter"
                className=" focus:outline-dark border-none capitalize bg-primary/70 px-4 py-2 rounded-lg"
                value={currentFilter}
                onChange={(e) =>
                  setCurrentFilter(e.target.value as TicketStatus)
                }
              >
                <option value="all">all</option>
                <option value="open">open</option>
                <option value="in_progress">in progress</option>
                <option value="closed">closed</option>
              </select>
            </div>
            {filteredTickets.length > 0 ? (
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                {filteredTickets.map((ticket) => (
                  <TicketDisplay ticket={ticket} key={ticket.id} />
                ))}
              </ul>
            ) : (
              <p className=" text-center text-xl md:text-2xl font-macondo">
                No {currentFilter} tickets yet.
              </p>
            )}
          </section>
        ) : (
          <EmptyState />
        )}
      </section>
    </div>
  );
}

const EmptyState = () => {
  return (
    <div className="flex flex-col gap-y-2 items-center justify-center flex-1 h-full">
      <p className="text-xl md:text-3xl text-white">No Tickets Yet</p>
      <Link
        className="px-4 py-2 bg-primary text-white w-fit rounded-md font-grotesk hover:bg-primary/80 transition-all duration-300"
        to="/tickets/new"
      >
        Create new ticket
      </Link>
    </div>
  );
};

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

const TicketDisplay = ({ ticket }: { ticket: Ticket }) => {
  return (
    <li
      key={ticket.id}
      className="drop-shadow-md p-2 flex flex-col font-poppins bg-cream rounded-md "
    >
      <header className="flex flex-row justify-between items-center">
        <p className="text-xl md:text-2xl text-dark font-grotesk">
          {ticket.name.length > 30
            ? ticket.name.slice(0, 30) + "..."
            : ticket.name}
        </p>
        <span
          className={`${
            ticket.status === "in_progress"
              ? "border-amber-400 text-amber-400"
              : ticket.status === "open"
              ? "border-green-400 text-green-400"
              : "border-gray-400 text-gray-400"
          } border rounded-md px-4 py-1 cursor-pointer hover:scale-x-110 transition-all duration-200 hover:scale-y-110`}
        >
          {ticket.status}
        </span>
      </header>
      <div className="flex flex-1 flex-col gap-y-2">
        {ticket.description ? (
          <p className="flex-1">
            {ticket.description.length > 60
              ? ticket.description.slice(0, 60) + "..."
              : ticket.description}
          </p>
        ) : (
          <p className="text-gray-400 italic">No description</p>
        )}
        <p>Date Created : {ticket.dateCreated}</p>
      </div>
    </li>
  );
};
