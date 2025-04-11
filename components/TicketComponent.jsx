"use client"
import React, { useRef } from "react";
import { QRCodeSVG } from "qrcode.react";

const TicketComponent = ({ ticketData }) => {
  const dollarValue = 3600;
  const { _id, name, number_card, items, createdAt } = ticketData;
  const componentRef = useRef();

  const totalAriary = items.reduce(
    (sum, item) => sum + item.price * dollarValue * item.quantity,
    0
  );

  const totalDollar = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="flex flex-col items-center">
      <div
        ref={componentRef}
        className="bg-white text-gray-800 p-6 w-[350px] rounded-xl shadow-md flex flex-col gap-4"
      >

        <div className="w-full">
          <h1 className="text-5xl text-gradient">MAGLIFE</h1>
        </div>

        <div className="text-xs ">
          <p>
            {new Date(createdAt).toLocaleString("fr-FR", {
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
              hour: "2-digit",
              minute: "2-digit",
              second: "2-digit",
            })}
          </p>
          <p>Shop Ambodimita</p>
        </div>

        <hr style={{ borderTop: "1px dashed #cbd5e1" }} />

        <div className="text-sm font-semibold text-center">
          <h4>{name}</h4>
          <h4 className="tracking-widest font-bold text-base mt-1">
            ID : {number_card}
          </h4>
        </div>

        <hr />

        <ul className="flex flex-col gap-2 text-sm">
          {items.map((item) => {
            const ariary = item.price * dollarValue;
            return (
              <li key={item._id}>
                <p className="font-medium">{item.name}</p>
                <div className="flex justify-between text-xs pl-3">
                  <span>
                    {ariary.toLocaleString("fr-MG")} x {item.quantity}
                  </span>
                  <span>
                    {(ariary * item.quantity).toLocaleString("fr-MG", {
                      maximumFractionDigits: 0,
                    })}{" "}
                    Ar
                  </span>
                </div>
              </li>
            );
          })}
        </ul>

        <hr style={{ borderTop: "1px dashed #cbd5e1" }} />

        <div className="text-sm flex font-medium">
          <span className="w-full text-right">Total : {totalAriary.toLocaleString("fr-MG")} Ar</span>
        </div>

        <div className="text-sm flex font-medium">
          <span>BV : {totalDollar.toFixed(2)} $</span>
        </div>

        <p
          className="text-green-700 text-center text-xs mt-2 italic"
        >
          Payé et livré
        </p>

        <div className="flex justify-center">
          <QRCodeSVG
            value={`http://localhost:3000/dashboard/tickets/${_id}`}
            size={150}
            level="L"
          />
        </div>
      </div>
    </div>
  );
};

export default TicketComponent;
