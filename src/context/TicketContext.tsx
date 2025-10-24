import { createContext, useEffect, useState, type ReactNode } from "react";
import type { Ticket } from "../types";
import { useNavigate } from "@tanstack/react-router";
import toast from "react-hot-toast";

type TicketContextTypes = {
  tickets: Ticket[];
  createTicket: (input: Omit<Ticket, "dateCreated" | "id">) => void;
  deleteTicket: (ticketId: string) => void;
  updateTicket: (ticketId: string, updatedData: Partial<Ticket>) => void;
  getTicket: (ticketId: string) => Ticket | undefined;
};

const TicketContext = createContext<TicketContextTypes | undefined>({
  tickets: [],
  createTicket: () => {},
  deleteTicket: () => {},
  updateTicket: () => {},
  getTicket: () => undefined,
});

const TicketProvider = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate();

  const storage =
    (JSON.parse(localStorage.getItem("tickets")!) as Ticket[]) ?? [];
  console.log(storage);
  const [tickets, setTickets] = useState<Ticket[]>(storage);

  useEffect(() => {
    localStorage.setItem("tickets", JSON.stringify(tickets));
  }, [tickets]);

  const createTicket = (input: Omit<Ticket, "dateCreated" | "id">) => {
    setTickets((prev) => [
      ...prev,
      {
        ...input,
        dateCreated: new Date().toLocaleString(),
        id: crypto.randomUUID(),
      },
    ]);
    toast.success("Ticket created successfully.");
    navigate({ to: "/tickets" });
  };

  const deleteTicket = (ticketId: string) => {
    setTickets((prev) => prev.filter((t) => t.id !== ticketId));
    toast.success("Ticket deleted successfully");
  };

  const updateTicket = (ticketId: string, updatedData: Partial<Ticket>) => {
    setTickets((prev) =>
      prev.map((t) => (t.id === ticketId ? { ...t, ...updatedData } : t))
    );
    toast.success("Ticket updated successfully");
    navigate({ to: "/tickets" });
  };

  const getTicket = (ticketId: string): Ticket | undefined => {
    return tickets.find((ticket) => ticket.id === ticketId);
  };

  const contextValues = {
    tickets,
    createTicket,
    deleteTicket,
    updateTicket,
    getTicket,
  };
  return (
    <TicketContext.Provider value={contextValues}>
      {children}
    </TicketContext.Provider>
  );
};

export default TicketProvider;
export { TicketContext };
