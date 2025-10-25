import { createFileRoute } from "@tanstack/react-router";
import Button from "../../components/UI/Button";
import type { FormEvent } from "react";
import useTicket from "../../hooks/useTicket";
import type { Ticket } from "../../types";
import GoBack from "../../components/UI/GoBack";
import useSetPageName from "../../hooks/useSetPageName";

export const Route = createFileRoute("/tickets/new")({
  component: RouteComponent,
});

function RouteComponent() {
  const { createTicket } = useTicket();
  useSetPageName("Create new Ticket");

  const submitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData) as Omit<
      Ticket,
      "dateCreated" | "id"
    >;
    createTicket(data);
  };

  return (
    <div className="flex flex-col font-grotesk gap-y-4 md:gap-y-6 justify-center items-center w-full ">
      <h2 className="text-xl md:text-2xl font-grotesk">Create new ticket</h2>
      <form onSubmit={submitForm} className="flex flex-col gap-y-4 md:gap-y-6">
        <GoBack color="orange" additionalStyles=" " />
        <div className="flex flex-col gap-y-2">
          <label htmlFor="name">Name</label>
          <input
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
            className=" focus:outline-dark border-none bg-cream px-4 py-2 rounded-lg"
          >
            {["open", "in_progress", "closed"].map((ticket) => (
              <option value={ticket} key={ticket} id="ticket">
                {ticket}
              </option>
            ))}
          </select>
        </div>
        <Button title="Submit" type="submit" />
      </form>
    </div>
  );
}
