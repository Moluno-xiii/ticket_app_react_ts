import type { Ticket } from "../types";

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

export default TicketDisplay;
