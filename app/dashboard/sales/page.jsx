import React from 'react'
import {Download, Send} from "lucide-react";
import Tools, {ToolItem} from "@/components/Tools";
import {getProducts} from "@/libs/api";

const Sales = async () => {
  const { products } = await getProducts();
  const dollarValue = 3600;

  let total = 0;

  const items = products.map((product, index) => {
    const prixTotal = (product.price * dollarValue) * product.quantity;
    total += prixTotal;

    return (
      <tr key={product._id} className="h-10 odd:bg-white/90 even:bg-primary/10">
        <td className="text-center">{index + 1}</td>
        <td className="w-1/2">{product.name}</td>
        <td className="text-center">{product.quantity}</td>
        <td className="text-center">
          {prixTotal.toLocaleString("fr-MG", {
            maximumFractionDigits: 0,
          })}
        </td>
      </tr>
    );
  });

  return (
    <>
      <div className="mx-5 flex-1 flex gap-5 overflow-auto">
        <div className="flex-1">
          <div className="h-full min-w-2xl rounded-xl overflow-auto border-2 border-gray-400">
            <table className="w-full">
              <thead>
              <tr className="bg-primary h-10 uppercase">
                <th className="font-semibold">N°</th>
                <th className="font-semibold text-left">Produits</th>
                <th className="font-semibold">QT</th>
                <th className="font-semibold">Prix</th>
              </tr>
              </thead>
              <tbody className="h-fit">
              {items}
              </tbody>
            </table>
          </div>
        </div>
        <Tools>
          <ToolItem icon={<Send size={20}/>} text="Envoyer" />
          <ToolItem icon={<Download size={20}/>} text="Télécharger" />
        </Tools>
      </div>
      <div className="bg-white mx-5 px-32 py-2 text-right text-2xl">
        Total : {total.toLocaleString("fr-MG", { maximumFractionDigits: 0 })} ar
      </div>
    </>
  );
}

export default Sales
