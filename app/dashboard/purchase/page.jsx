
import React from 'react'
import Content from "@/components/Content";
import {Plus, Trash2} from "lucide-react";
import TicketComponent from "@/components/TicketComponent";

const getDistributors = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/distributors", {
      cache: "no-store"
    });

    if (!res.ok) {
      throw new Error("Failed to fetch distributors.");
    }

    return res.json();
  } catch (e) {
    console.error("Error loading distributors", e);
  }
}

const Sales = async () => {
  const { distributors } = await getDistributors();

  const distList = distributors.slice(0, 5).map((distributor) => {
    return (
      <li
        key={distributor._id}
        className="h-8 px-5 cursor-pointer flex items-center hover:bg-primary/20 rounded-md transition-all">
        <span className="flex-1 align-middle">{distributor.name}</span>
        <span className="text-center rounded-sm">{distributor.number_card}</span>
      </li>
    )
  });

  return (
    <Content title={"Purchase"}>
      <div className=" px-20 flex gap-5">
        <div className="relative flex flex-col gap-5 min-w-2xl">

          <div className="flex flex-col gap-5">
            <div className="relative flex bg-black/10 rounded-3xl p-2 gap-2">
              <input
                className="text-base flex-1 pl-3 p-2 bg-white rounded-2xl"
                type="text"
                placeholder="Distributeur"
              />

              <div className="absolute top-full left-2 h-fit right-2 bg-white rounded-2xl shadow-2xl z-50">
                <ul className="flex flex-col gap-1 py-2">
                  {distList}
                </ul>
              </div>

            </div>
            <div className="flex items-center gap-2 w-full ">
              <div className="flex flex-1 p-2 rounded-3xl bg-black/10 transition-all">
                <div className="flex items-center gap-2 flex-1 transition-all">
                  <input
                    className="text-base flex-1 pl-3 p-2 bg-white rounded-2xl"
                    type="text"
                    placeholder="Nom du produit"
                  />

                  <input
                    className=" bg-white text-base h-10 w-15 pl-2 tracking-widest text-center rounded-2xl"
                    type="number"
                    placeholder="0"
                  />
                </div>
              </div>
              <button className="btn">
                <Plus size={20}/>
              </button>
            </div>
          </div>

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
          <button className="btn fixed bottom-10 left-30 ">
            Payement
          </button>
        </div>
        <div className="bg-black/10 p-5 rounded-3xl overflow-auto min-w-sm">
          <TicketComponent/>
        </div>
      </div>
    </Content>
  )
}
export default Sales
