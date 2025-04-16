"use client"
import {QRCodeSVG} from "qrcode.react";
import RemoveBtn from "@/components/RemoveBtn";
import Link from "next/link";
import {useState} from "react";

const TicketItem = ({ id, name, date }) => {
  const [isHover, setIsHover] = useState(false)

  return (
    <div className="relative group w-full sm:w-5/12 md:w-56">
      <div
        onMouseEnter={()=>setIsHover(true)}
        onMouseLeave={()=>setIsHover(false)}
        className="w-full h-fit p-5 bg-white rounded-md shadow-sm flex flex-col justify-center items-center gap-5 hover:shadow-lg hover:scale-105 transition-all"
      >
        <div className="w-full flex items-center justify-between">
          <Link href={`/dashboard/tickets/${id}`}>
            <div>
              <h4 className="font-bold">{name}</h4>
              <p className="mt-1 text-xs text-gray-600">
                {new Date(date).toLocaleString("fr-FR", {
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                  hour: "2-digit",
                  minute: "2-digit"
                })}
              </p>
            </div>
          </Link>
          <RemoveBtn id={id}/>
        </div>
      </div>
      <div
        className={` 
          absolute w-fit p-5 bg-white rounded-md shadow-sm flex flex-col justify-center top-0 
          transition-all duration-300 
          ${isHover ? "opacity-100 left-48 sm:left-60 z-50" : "left-48 opacity-0"}
        `}>
        <QRCodeSVG
          value={`http://localhost:3000/dashboard/tickets/${id}`}
          size={160}
          level="L"
        />
      </div>
    </div>
  )
}
export default TicketItem
