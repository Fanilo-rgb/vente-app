import React from 'react'
import {Plus} from "lucide-react";

const SearchProductsForm = () => {
  return (
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
  )
}
export default SearchProductsForm
