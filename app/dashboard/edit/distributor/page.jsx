import RemoveProductBtn from "@/components/RemoveProductBtn";
import Link from "next/link";
import {SquarePen} from "lucide-react";
import React from "react";
import AddPersonForm from "@/components/AddPersonForm";
import {getDistributors} from "@/libs/api";

const Distributor = async () => {

  const { distributors } = await getDistributors();

  const list = distributors.map((distributor, index) => {
    return(
      <li key={distributor._id} className={"flex justify-between items-center bg-white rounded-2xl p-2 w-full shadow hover:shadow-lg transition-all"}>
        <span className={"flex items-center gap-10"}>
          <div className={"flex gap-2"}>
            <p className={"rounded-lg w-8 flex items-center justify-center"}>{index + 1}</p>
            <div className={"w-xl flex flex-col gap-2"}>
              <h4>{distributor.name} {distributor.surname}</h4>
              <p className={"text-sm text-gray-600"}>{distributor.number_card}</p>
            </div>
          </div>
        </span>
        <span className={"flex gap-2 items-center"}>
          <RemoveProductBtn/>
          <Link href={`http://localhost:3000/dashboard/edit/distributor/${distributor._id}`}>
            <button className={"p-2 rounded-full hover:bg-black/10 transition-all"}>
              <SquarePen size={18}/>
            </button>
          </Link>
        </span>
      </li>
    )
  })

  return (
    <div className={"absolute top-0 bottom-0 overflow-hidden flex gap-5"}>
      <div className={"overflow-auto"}>
        <ul className={"flex flex-col bg-black/10 rounded-3xl p-2 gap-2 min-w-xl"}>
          {list}
        </ul>
      </div>
      <AddPersonForm />
    </div>
  )
}
export default Distributor
