import React from 'react'
import Content from "@/components/Content";
import TicketComponent from "@/components/TicketComponent";

const Ticket = async ({ params }) => {
  const ticketId = (await params).ticketId;

  return (
    <Content title={`Ticket/${ticketId}`}>
      <TicketComponent/>
    </Content>
  )
}
export default Ticket
