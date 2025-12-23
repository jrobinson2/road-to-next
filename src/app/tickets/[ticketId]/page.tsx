import { initialTickets } from '@/data';

type TicketPageProps = {
  params: {
    ticketId: string;
  };
};

type Ticket = {
  id: string;
  title: string;
  content: string;
  status: 'DONE' | 'OPEN' | 'IN_PROGRESS';
};

const TicketPage = async ({ params }: TicketPageProps) => {
  const { ticketId } = await params;

  const ticket = initialTickets.find((ticket) => ticket.id === ticketId);

  if (!ticket) {
    return <h1>Ticket not found</h1>;
  }

  return (
    <div>
      <h2 className="text-lg">{ticket.title}</h2>
      <p className="text-base">{ticket.content}</p>
      <p className="text-base">Status: {ticket.status}</p>
    </div>
  );
};

export default TicketPage;
