import { createFileRoute, Link } from "@tanstack/react-router";
import useTicket from "../../../hooks/useTicket";
import type { FormEvent } from "react";
import type { Ticket } from "../../../types";
import Button from "../../../components/UI/Button";

export const Route = createFileRoute("/tickets/edit/$ticketid")({
  component: RouteComponent,
});

function RouteComponent() {
  const { ticketid } = Route.useParams();
  const { getTicket, updateTicket } = useTicket();

  const ticket = getTicket(ticketid);

  const submitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData) as Omit<
      Ticket,
      "dateCreated" | "id"
    >;
    updateTicket(ticketid, data);
  };

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
          Go back to tickets
        </Link>
      </div>
    );

  return (
    <div className="flex flex-col font-grotesk gap-y-4 md:gap-y-6 justify-center items-center w-full ">
      <h2 className="text-xl md:text-2xl font-grotesk">Edit your new ticket</h2>
      <form onSubmit={submitForm} className="flex flex-col gap-y-4 md:gap-y-6">
        <div className="flex flex-col gap-y-2">
          <label htmlFor="name">Name</label>
          <input
            defaultValue={ticket.name}
            type="text"
            className="border border-white bg-white text-black rounded-md px-3 py-2 min-w-2xs md:min-w-md focus:border-dark focus:outline-none"
            name="name"
            required
          />
        </div>

        <div className="flex flex-col gap-y-2">
          <label htmlFor="description">
            Description{" "}
            <span className="text-lighter text-xs italic">(optional)</span>
          </label>
          <input
            defaultValue={ticket.description}
            type="text"
            className="border border-white bg-white text-black rounded-md px-3 py-2 min-w-2xs md:min-w-md focus:border-dark focus:outline-none"
            name="description"
          />
        </div>
        <div className="flex flex-col gap-y-2">
          <label htmlFor="status">Ticket status </label>
          <select
            name="status"
            id="in_progress"
            required
            defaultValue={ticket.status}
            className=" focus:outline-dark border-none bg-cream px-4 py-2 rounded-lg"
          >
            {["open", "in_progress", "closed"].map((ticket) => (
              <option value={ticket} key={ticket} id="ticket">
                {ticket}
              </option>
            ))}
          </select>
        </div>
        <Button title="Update" type="submit" />
      </form>
    </div>
  );
}
