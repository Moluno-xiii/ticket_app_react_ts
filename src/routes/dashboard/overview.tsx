import { createFileRoute, Link } from "@tanstack/react-router";
import useTicket from "../../hooks/useTicket";

export const Route = createFileRoute("/dashboard/overview")({
  component: RouteComponent,
});

function RouteComponent() {
  const { tickets } = useTicket();
  return (
    <div className="flex flex-col gap-y-5 h-full">
      <header className="flex flex-row justify-between items-center">
        <h2 className="text-xl md:text-2xl font-grotesk text-dark">Overview</h2>
        <p className="text-primary">Total Tickets ({tickets.length})</p>
      </header>
      <section
        aria-labelledby="tickets display section"
        className="flex-1 h-full"
      >
        {tickets.length > 0 ? <div>tickets</div> : <EmptyState />}
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
