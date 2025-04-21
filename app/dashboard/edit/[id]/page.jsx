import React from 'react'
import EditProductForm from "@/components/EditProductForm";

const getProductById = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/products/${id}`, {
      cache: "no-store"
    })
    if (!res.ok) {
      throw new Error("Failed to fetch the product")
    }
    return res.json()
  } catch (e) {
    console.error(e)
  }
}

const Product = async({params}) => {
  const id = (await params).id
  const { product } = await getProductById(id)
  const { _id, name, price, bv, order, barCode } = product
  return (
    <div className={"flex justify-center"}>
      <EditProductForm id={_id} name={name} price={price} bv={bv} order={order} barCode={barCode} />
    </div>
  )
}
export default Product
