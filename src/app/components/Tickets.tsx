import React, { useState } from "react";

type Ticket = {
  title: string;
  description: string;
  status: string;
};

type Props = {
  initialTickets: Ticket[];
};

const TicketList = ({ initialTickets }: Props) => {
  const [tickets, setTickets] = useState<Ticket[]>(initialTickets);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // Set default status to "open"
  const defaultStatus = "open";

  const handleTicketSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Create new ticket with default status
    const newTicket: Ticket = { title, description, status: defaultStatus };
    setTickets([...tickets, newTicket]);
    setTitle("");
    setDescription("");
  };

  return (
    <div>
      <form onSubmit={handleTicketSubmit}>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          required
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          required
        />
        <button type="submit">Create Ticket</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {tickets.map((ticket, index) => (
            <tr key={index}>
              <td>{ticket.title}</td>
              <td>{ticket.description}</td>
              <td>{ticket.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TicketList;
