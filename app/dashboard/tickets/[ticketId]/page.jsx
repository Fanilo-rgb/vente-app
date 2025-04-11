import React from 'react'
import Content from "@/components/Content";
import TicketComponent from "@/components/TicketComponent";

const getTicketById = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/tickets/${id}`, {
      cache: "no-store"
    })
    if (!res.ok) {
      throw new Error("Failed to fetch topic");
    }

    return res.json();
  } catch (e) {
    console.error(e);
  }
}

const Ticket = async ({ params }) => {
  const ticketId = (await params).ticketId;
  const { ticket } = await getTicketById(ticketId);
  const { name } = ticket;

  return (
    <Content title={`Ticket/${name}`}>
      <TicketComponent ticketData={ticket}/>
    </Content>
  )
}
export default Ticket
