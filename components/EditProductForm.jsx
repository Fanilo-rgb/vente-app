"use client"
import React, {useState} from 'react'
import { useRouter } from 'next/navigation'

const EditProductForm = ({ id, name, price, bv, order, barCode }) => {
  const router = useRouter()

  const [newName, setNewName] = useState(name)
  const [newPrice, setNewPrice] = useState(price)
  const [newQuantity, setNewQuantity] = useState(0)
  const [newOrder, setNewOrder] = useState(order || "")
  const [newBarCode, setNewBarCode] = useState(barCode || "-")
  const [newBv, setNewBv] = useState(bv || "")

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const res = await fetch(`http://localhost:3000/api/products/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({newName, newBv, newPrice, newQuantity, newOrder, newBarCode})
      })

      if (!res.ok) {
        throw new Error("Failed to update product")
      }

      router.push("/dashboard/edit")

    } catch (e) {
      console.error(e)
    }
  }

  return (
    <form onSubmit={handleSubmit} className={"flex flex-col bg-black/10 rounded-3xl p-2 gap-2 max-w-lg"}>
      <input
        onChange={e => setNewName(e.target.value)}
        value={newName}
        className={"text-base flex-1 pl-3 p-2 bg-white rounded-2xl"}
        type={"text"}
        placeholder={"Nom produit"}
      />
      <div className={"flex gap-2"}>
        <input
          onChange={e => setNewBv(e.target.value)}
          value={newBv}
          className={"text-base flex-1 pl-3 p-2 bg-white rounded-2xl"}
          type={"number"}
          placeholder={"Bv"}
        />
        <input
          onChange={e => setNewPrice(e.target.value)}
          value={newPrice}
          className={"text-base flex-1 pl-3 p-2 bg-white rounded-2xl"}
          type={"number"}
          placeholder={"Prix"}
        />
      </div>
      <div className={"flex gap-2"}>
        <input
          onChange={e => setNewOrder(e.target.value)}
          value={newOrder}
          className={"text-base w-20 pl-3 p-2 bg-white rounded-2xl"}
          type={"number"}
          placeholder={"Ordre"}
        />
        <input
          onChange={e => setNewBarCode(e.target.value)}
          value={newBarCode}
          className={"text-base flex-1 pl-3 p-2 bg-white rounded-2xl"}
          type={"text"}
          placeholder={"Code barre"}
        />
      </div>
      <button type={"submit"} className="btn btn-primary">
        Ajouter
      </button>
    </form>
  )
}
export default EditProductForm
