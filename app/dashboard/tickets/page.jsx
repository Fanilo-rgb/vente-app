import React from 'react'
import Content from "@/components/Content";
import {QRCodeSVG} from "qrcode.react";
import Link from "next/link";
import {getTickets} from "@/libs/api";

const Tickets = async () => {
  const { tickets } = await getTickets();

  return (
    <Content title={"Tickets"}>
      <div className="h-full flex justify-center items-center flex-wrap gap-5 p-8">
        {tickets.map(ticket => {
          const surname = ticket.name.split(" ") ;
          return (
            <Link key={ticket._id} href={`/dashboard/tickets/${ticket._id}`}>
              <div className="w-52 h-fit p-5 bg-white rounded-md shadow-sm flex flex-col justify-center items-center gap-5">
                <QRCodeSVG value={`http://localhost:3000/dashboard/tickets/${ticket._id}`} size={160} level="L"/>
                <div className="w-full">
                  <h4>{surname[1]}</h4>
                  <p className="mt-1 text-xs text-gray-600">
                    {new Date(ticket.createdAt).toLocaleString("fr-FR", {
                      day: "2-digit",
                      month: "long",
                      year: "numeric",
                      hour: "2-digit",
                      minute: "2-digit"
                    })}
                  </p>
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
