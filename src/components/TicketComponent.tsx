import { Link } from "@tanstack/react-router";
import type { Ticket } from "../types";
import Button from "./UI/Button";

const TicketComponent = ({
  ticket,
  handleModal,
  deleteTicket,
  isOpen,
}: {
  ticket: Ticket;
  handleModal: (state: string) => void;
  deleteTicket: (ticketId: string) => void;
  isOpen: string;
}) => {
  return (
    <>
      {isOpen !== ticket.id ? (
        <li
          key={ticket.id}
          className="drop-shadow-md p-2 font-poppins bg-cream rounded-md "
        >
          <header className="flex flex-row justify-between items-center">
            <p className="text-lg md:text-2xl text-dark font-grotesk">
              {ticket.name.length > 60
                ? ticket.name.slice(0, 60) + "..."
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
          <div className="flex flex-col gap-y-2">
            {ticket.description ? (
              <p>
                {ticket.description.length > 60
                  ? ticket.description.slice(0, 60) + "..."
                  : ticket.description}
              </p>
            ) : (
              <p className="text-gray-400 italic">No description</p>
            )}
            <p>Date Created : {ticket.dateCreated}</p>
            <div className="flex flex-row justify-between items-center">
              <Button
                title="Delete"
                variant="error"
                onClick={() => handleModal(ticket.id)}
              />
              <Link
                className="px-4 py-2 hover:bg-cream hover:border-primary border border-primary text-white  hover:text-primary self-end rounded-md font-grotesk bg-primary transition-all duration-300"
                to="/tickets/edit/$ticketid"
                params={{ ticketid: ticket.id }}
              >
                Edit
              </Link>
            </div>
          </div>
        </li>
      ) : (
        <DeleteTicketModal
          deleteTicket={deleteTicket}
          handleModal={handleModal}
          ticket={ticket}
        />
      )}
    </>
  );
};

export default TicketComponent;

const DeleteTicketModal = ({
  deleteTicket,
  handleModal,
  ticket,
}: {
  deleteTicket: (id: string) => void;
  handleModal: (state: string) => void;
  ticket: Ticket;
}) => {
  return (
    <div className="bg-cream text-white rounded-md shadow-xl p-3">
      <p className="text-lg font-semibold mb-4 text-center text-black">
        Are you sure you want to Delete the ticket: <br /> ({ticket.name})?
      </p>
      <div className="flex flex-row gap-x-4 justify-center items-center">
        <Button
          title="Yes"
          variant="error"
          onClick={() => deleteTicket(ticket.id)}
        />
        <Button title="No" onClick={() => handleModal("")} />
      </div>
    </div>
  );
};
