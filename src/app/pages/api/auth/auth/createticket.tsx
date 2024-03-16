import TicketList from "@/app/components/Tickets";

type Ticket = {
  title: string;
  description: string;
  status: string;
};


const CreateTicketPage = () => {
  const initialTickets: Ticket[] = [];
  return (
    <div>
      <TicketList initialTickets={initialTickets} />
    </div>
  );
};

export default CreateTicketPage;
