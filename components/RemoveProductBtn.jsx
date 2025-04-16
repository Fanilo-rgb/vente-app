"use client"
import React from 'react'
import {Trash2} from "lucide-react";
import { useRouter } from "next/navigation";

const RemoveProductBtn = ({ id }) => {
  const router = useRouter();

  const removeTicket = async () => {
    const confirmed = confirm("Are you sure you want to remove Product?");

    if (confirmed) {
      const res = await fetch(`http://localhost:3000/api/products?id=${id}`, {
        method: "DELETE",
      })

      if (res.ok) {
        router.refresh();
      }
    }
  }

  return (
    <button onClick={removeTicket} className="bg-transparent hover:bg-red-200 text-red-600 w-8 h-8 grid place-items-center rounded-full transition-all">
      <Trash2 size={18}/>
    </button>
  )
}
export default RemoveProductBtn
