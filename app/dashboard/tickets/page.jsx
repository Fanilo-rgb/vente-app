import React from 'react';
import Content from "@/components/Content";
import { getTickets } from "@/libs/api";
import TicketItem from "@/components/TicketItem";

const isSameDay = (date1, date2) => {
  return date1.toDateString() === date2.toDateString();
};

const isYesterday = (date) => {
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  return isSameDay(date, yesterday);
};

const isLast7Days = (date) => {
  const now = new Date();
  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(now.getDate() - 7);
  return date > sevenDaysAgo && !isSameDay(date, now) && !isYesterday(date);
};

const Tickets = async () => {
  const { tickets } = await getTickets();

  const today = [];
  const yesterday = [];
  const last7days = [];
  const older = [];

  tickets.forEach(ticket => {
    const date = new Date(ticket.createdAt);
    if (isSameDay(date, new Date())) {
      today.push(ticket);
    } else if (isYesterday(date)) {
      yesterday.push(ticket);
    } else if (isLast7Days(date)) {
      last7days.push(ticket);
    } else {
      older.push(ticket);
    }
  });

  const renderGroup = (title, list) => {
    if (list.length === 0) return null;

    list.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    return (
      <div className="mb-10 w-full">
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
  };

  return (
    <Content title="Tickets">
      <div className="h-full w-full p-8">
        {renderGroup("Aujourd’hui", today)}
        {renderGroup("Hier", yesterday)}
        {renderGroup("7 derniers jours", last7days)}
        {renderGroup("Autres", older)}
      </div>
    </Content>
  );
};

export default Tickets;
