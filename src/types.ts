type Ticket = {
  dateCreated: string;
  status: "open" | "in_progress" | "closed";
  name: string;
  description?: string;
  id: string;
};

export type { Ticket };
