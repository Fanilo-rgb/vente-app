"use client"
import React, {useState} from 'react'
import { useRouter } from 'next/navigation'

const EditProductForm = ({ id, name, price, quantity }) => {
  const router = useRouter()

  const [newName, setNewName] = useState(name)
  const [newPrice, setNewPrice] = useState(price)
  const [newQuantity, setNewQuantity] = useState(quantity)

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const res = await fetch(`http://localhost:3000/api/products/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({newName, newPrice, newQuantity})
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
          onChange={e => setNewPrice(e.target.value)}
          value={newPrice}
          className={"text-base flex-1 pl-3 p-2 bg-white rounded-2xl"}
          type={"number"}
          placeholder={"Prix"}
        />
        <input
          onChange={e => setNewQuantity(e.target.value)}
          value={newQuantity}
          className={"text-base flex-1 pl-3 p-2 bg-white rounded-2xl"}
          type={"number"}
          placeholder={"Quantité"}
        />
      </div>
      <button type={"submit"} className="btn btn-primary">
        Ajouter
      </button>
    </form>
  )
}
export default EditProductForm
