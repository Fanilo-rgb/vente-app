import React from 'react';
import Content from "@/components/Content";
import {getSortTickets} from "@/libs/api";
import TicketItem from "@/components/TicketItem";

const Tickets = async () => {
  const sortTickets = await getSortTickets();

  const lists = sortTickets.map((category, index) => {
    if (category) {
      const title = category.title;
      const list = category.list;

      list.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

      return (
        <div key={index} className="mb-10 w-full">
          <h2 className="text-xl font-semibold mb-4">{title}</h2>
          <div className="flex flex-wrap gap-5 justify-center md:justify-start">
            {list.map(ticket => {
              const surname = ticket.name.split(" ");
              return (
                <TicketItem key={ticket._id} id={ticket._id} name={surname[1]} date={ticket.createdAt} />
              );
            })}
          </div>
        </div>
      );
    }
  })

  return (
    <Content title="Tickets">
      <div className="h-full w-full p-8">
        {lists}
      </div>
    </Content>
  );
};

export default Tickets;
