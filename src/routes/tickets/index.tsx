import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import withAuth from "../../components/others/withAuth";
import TicketComponent from "../../components/TicketComponent";
import useTicket from "../../hooks/useTicket";
import useSetPageName from "../../hooks/useSetPageName";

export const Route = createFileRoute("/tickets/")({
  component: withAuth(RouteComponent),
});

function RouteComponent() {
  const [currentlyActiveTicketw, setCurrentlyActiveTicket] = useState("");
  const { tickets, deleteTicket } = useTicket();
  useSetPageName("Ticketier | Your Tickets");
  return (
    <div className="flex flex-col gap-y-5 h-full w-full">
      <header className="flex flex-row justify-between items-center">
        <h2 className="text-lg md:text-2xl font-grotesk text-primary">
          Your Tickets ({tickets.length})
        </h2>
        <Link
          className="px-4 py-2  bg-primary text-white self-end rounded-md max-sm:text-sm font-grotesk hover:bg-primary/80 transition-all duration-300"
          to="/tickets/new"
        >
          Create new ticket
        </Link>
      </header>
      {tickets.length > 0 ? (
        <section
          aria-labelledby="tickets display section"
          className="flex-1 h-full w-full"
        >
          <ul className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
            {tickets.map((ticket) => (
              <TicketComponent
                handleModal={setCurrentlyActiveTicket}
                key={ticket.id}
                ticket={ticket}
                isOpen={currentlyActiveTicketw}
                deleteTicket={deleteTicket}
              />
            ))}
          </ul>
        </section>
      ) : (
        <EmptyState />
      )}
    </div>
  );
}

const EmptyState = () => {
  return (
    <div className="flex flex-col gap-y-2 items-center w-full justify-center flex-1 h-full">
      <p className="text-xl md:text-3xl text-white">No Tickets Yet</p>
      <Link
        className="px-4 py-2 max-sm:text-sm bg-primary text-white w-fit rounded-md font-grotesk hover:bg-primary/80 transition-all duration-300"
        to="/tickets/new"
      >
        Create new ticket
      </Link>
    </div>
  );
};
