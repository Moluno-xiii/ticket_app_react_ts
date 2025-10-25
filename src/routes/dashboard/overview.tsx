import { createFileRoute, Link } from "@tanstack/react-router";
import useTicket from "../../hooks/useTicket";
import useSetPageName from "../../hooks/useSetPageName";
import type { Ticket, TicketStatus } from "../../types";
import { useState } from "react";
import TicketDisplay from "../../components/TicketDisplay";
import TicketsStatistics from "../../components/TicketStatistics";

export const Route = createFileRoute("/dashboard/overview")({
  component: RouteComponent,
});

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
