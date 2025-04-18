import React from 'react'
import AddProductForm from "@/components/AddProductForm";
import {SquarePen, Trash2} from "lucide-react";
import {getProducts} from "@/libs/api";
import Link from "next/link";
import RemoveProductBtn from "@/components/RemoveProductBtn";

const Produit = async () => {
  const { products } = await getProducts();

  const items = products.map((product) => {
    return (
      <li key={product._id} className={"flex gap-5 items-center bg-white rounded-2xl p-2 min-w-lg shadow hover:shadow-lg transition-all"}>
        <span className={"flex items-center gap-10"}>
          <h4 className={"w-96"}>{product.name}</h4>
          <h4 className={"w-14"}>{product.price} $</h4>
          <p className={" flex items-center justify-center shadow-sm shadow-primary rounded-full w-14"}>
            {product.quantity > 0 ? (product.quantity) : ("-")}
          </p>
        </span>
        <span className={"flex gap-2 items-center"}>
          <RemoveProductBtn id={product._id}/>
          <Link href={`http://localhost:3000/dashboard/edit/${product._id}`}>
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
      <div>
        <AddProductForm/>
      </div>
      <div className={"overflow-auto"}>
        <ul className={"flex flex-col bg-black/10 rounded-3xl p-2 gap-2 min-w-xl"}>
          {items}
        </ul>
      </div>
    </div>
  )
}
export default Produit
