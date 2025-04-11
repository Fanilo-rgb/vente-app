"use client"
import React from 'react'
import { Trash2 } from "lucide-react";
import { useData } from "@/context/DataProvider";

const PurchaseList = () => {
  const { data, setData } = useData();

  const handleDelete = (nameToDelete) => {
    setData(prev => ({
      ...prev,
      products: prev.products.filter(p => p.name !== nameToDelete)
    }));
  };

  const prodList = data?.products.map((product, index) => {
    return (
      <li key={index} className="flex gap-2 items-center transition-all">
        <span className="flex w-full p-2 gap-2 rounded-3xl bg-black/10">
          <span className="bg-white rounded-2xl h-10 flex-1 pl-2.5 flex items-center">
            {product.name}
          </span>
          <span className="bg-white rounded-2xl h-10 w-12 text-center tracking-widest flex items-center justify-center">
            {product.quantity}
          </span>
        </span>
        <button
          onClick={() => handleDelete(product.name)}
          className="flex items-center justify-center rounded-full bg-red-200 transition-all text-red-600 min-w-12 h-12"
        >
          <Trash2 size={20} />
        </button>
      </li>
    );
  });

  return (
    <ul className="flex flex-col gap-2">
      {prodList}
    </ul>
  );
}

export default PurchaseList;
