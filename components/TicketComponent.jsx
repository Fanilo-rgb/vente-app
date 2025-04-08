import React from 'react'
import {QRCodeSVG} from "qrcode.react";

const TicketComponent = () => {
  return (
    <div className="mx-auto flex flex-col gap-4 bg-white p-5 min-w-52 max-w-96 min-h-fit">
      <div className="flex w-full items-center justify-center">
        <QRCodeSVG value="text bonjour" size={210} level="L" />
      </div>
      <div className="text-xs">
        <p>07/04/2025</p>
        <p>Shop Ambodimita</p>
      </div>
      <hr className="border-dashed border-1" />
      <div className="text-xs font-medium">
        <h4>ANDRIAMBOLOLONA Faniloniaina Princy</h4>
        <h4 className="tracking-widest">10363889</h4>
      </div>
      <hr className="border-1" />
      <ul className="flex flex-col gap-2">
        <li>
          <p className="text-sm mb-2">Kuding</p>
          <p className="text-xs flex justify-between pl-5">
            <span>
              50000 x 2
            </span>
            <span> 100 000Ar</span>
          </p>
        </li>
      </ul>
      <div className="relative">
        <hr className="absolute w-1/3 right-0 border-dashed" />
        <div className="mt-2 text-sm flex justify-between">
          <span>Total : </span>
          <span className="font-medium">100 000 Ar</span>
        </div>
        <div className="text-sm flex justify-between">
          <span>BV : </span>
          <span className="font-semibold">24$</span>
        </div>
      </div>
      <p className="text-xs">Payé et livré</p>
    </div>
  )
}
export default TicketComponent
