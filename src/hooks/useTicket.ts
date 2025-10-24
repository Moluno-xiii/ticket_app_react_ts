import { useContext } from "react";
import { TicketContext } from "../context/TicketContext";

const useTicket = () => {
  const ticketContext = useContext(TicketContext);
  if (!ticketContext)
    throw new Error("ticketContext wasn't used outside of its scope");
  return ticketContext;
};

export default useTicket;
