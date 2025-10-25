import { createFileRoute, Link } from "@tanstack/react-router";
import useSetPageName from "../../hooks/useSetPageName";
import useTicket from "../../hooks/useTicket";
import GoBack from "../../components/UI/GoBack";

export const Route = createFileRoute("/tickets/$ticketId")({
  component: RouteComponent,
});

function RouteComponent() {
  const { ticketId } = Route.useParams();
  const { getTicket } = useTicket();
  const ticket = getTicket(ticketId);
  const pageName = ticket?.name
    ? `View Ticket | ${ticket.name}`
    : "Ticket not found";
  useSetPageName(pageName);

  if (!ticket)
    return (
      <div className="flex font-grotesk w-full flex-col gap-y-3 justify-center items-center">
        <p className="text-xl md:text-2xl text-white">
          Invalid ticket id, try again
        </p>
        <Link
          className="px-4 py-2 bg-primary text-white w-fit rounded-md font-grotesk hover:bg-primary/80 transition-all duration-300"
          to="/tickets"
        >
          Go back to tickets page
        </Link>
      </div>
    );

  return (
    <div
      aria-labelledby="Ticket details page"
      className="flex flex-col gap-y-3 md:gap-y-6"
    >
      <header className="flex flex-col gap-y-2 md:gap-y-4">
        <GoBack />
        <h2 className="text-xl md:text-2xl">{ticket.name}</h2>
      </header>

      <section
        aria-labelledby="Ticket details"
        className="flex flex-col gap-y-2"
      >
        <p>Date created : {ticket.dateCreated}</p>
        <p>Description : {ticket.description}</p>
        <p>Status : {ticket.status}</p>
      </section>
    </div>
  );
}
