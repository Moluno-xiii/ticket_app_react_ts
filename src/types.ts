type Ticket = {
  dateCreated: string;
  status: "open" | "in_progress" | "closed";
  name: string;
  description?: string;
  id: string;
};

type LinkType = {
  name: string;
  route: string;
};

export type { Ticket, LinkType };
