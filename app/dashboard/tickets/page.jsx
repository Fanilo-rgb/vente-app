import React from 'react'
import Content from "@/components/Content";
import {QRCodeSVG} from "qrcode.react";
import Link from "next/link";

const tickets = [
  {id: "1", holder: "ANDRIAMBOLOLONA Faniloniaina Princy", date: "08/04/2025"},
  {id: "2", holder: "ANDRIAMBOLOLONA Noroanja Sarah", date: "08/04/2025"},
]

const Tickets = () => {
  return (
    <Content title={"Tickets"}>
      <div className="h-full flex justify-center items-center flex-wrap gap-5 p-8">
        {tickets.map(ticket => {
          const surname = ticket.holder.split(" ") ;
          return (
            <Link key={ticket.id} href={`/dashboard/tickets/${ticket.id}`}>
              <div className="w-52 h-fit p-5 bg-white rounded-md shadow-sm flex flex-col justify-center items-center gap-5">
                <QRCodeSVG value={`http://localhost:3000/dashboard/tickets/${ticket.id}`} size={160} level="L"/>
                <div className="w-full">
                  <h4>{surname[1]}</h4>
                  <p className="mt-1 text-xs text-gray-600">{ticket.date}</p>
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </Content>
  )
}
export default Tickets
