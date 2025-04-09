import React from 'react'
import {Trash2} from "lucide-react";

const PurchaseList = () => {
  return (
    <ul className="flex flex-col gap-2">
      <li className={`flex gap-2 items-center transition-all`}>
              <span className="flex w-full p-2 gap-2 rounded-3xl bg-black/10">
                <span className="bg-white rounded-2xl h-10 flex-1 pl-2.5 flex items-center">
                  Kuding
                </span>
                <span className="bg-white rounded-2xl h-10 w-12 text-center tracking-widest flex items-center justify-center">
                  1
                </span>
              </span>
        <button className={`flex items-center justify-center rounded-full bg-red-200 transition-all text-red-600 min-w-12 h-12`}>
          <Trash2 size={20} />
        </button>
      </li>
    </ul>
  )
}
export default PurchaseList
