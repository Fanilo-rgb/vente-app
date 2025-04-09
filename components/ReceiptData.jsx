"use client"
import React from 'react'
import {useData} from "@/context/DataProvider";

const ReceiptData = () => {
  const { data } = useData();

  return (
    <div className="w-full h-fit p-5 bg-white rounded-md shadow-sm flex flex-col justify-center items-center gap-5">
      <div className="w-full">
        <h3>{data.holder.name}</h3>
        <h4>{data.holder.number_card}</h4>
        <hr className="my-4 border-gray-300"/>
        <ul className="flex flex-col gap-2">
          <li>
            <p className="mb-2">Kuding</p>
            <p className="text-sm flex justify-between pl-5">
            <span>
              50000 x 2
            </span>
              <span> 100 000 Ar</span>
            </p>
          </li>
          <li>
            <p className="mb-2">Kuding</p>
            <p className="text-sm flex justify-between pl-5">
            <span>
              50000 x 2
            </span>
              <span> 100 000 Ar</span>
            </p>
          </li>
        </ul>
        <hr className="my-4 border-gray-300"/>
        <div className="relative">
          <div className="flex justify-between">
            <span>Total : </span>
            <span className="font-medium">100 000 Ar</span>
          </div>
          <div className="flex justify-between">
            <span>BV : </span>
            <span className="font-semibold">24$</span>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ReceiptData
