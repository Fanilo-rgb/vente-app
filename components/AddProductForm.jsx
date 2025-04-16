"use client"
import React, {useState} from 'react'
import { useRouter } from 'next/navigation'

const AddProductForm = () => {
  const router = useRouter()

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !price || !quantity) {
      alert("Please fill all fields");
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, price, quantity }),
      })

      if (res.ok) {
        router.refresh();
        setName("")
        setPrice("")
        setQuantity("")
      } else {
        throw new Error("Error creating product");
      }

    } catch (e) {
      console.error(e);
    }
  }

  return (
    <form onSubmit={handleSubmit} className={"flex flex-col bg-black/10 rounded-3xl p-2 gap-2 max-w-lg"}>
      <input
        onChange={e => setName(e.target.value)}
        value={name}
        className={"text-base flex-1 pl-3 p-2 bg-white rounded-2xl"}
        type={"text"}
        placeholder={"Nom produit"}
      />
      <div className={"flex gap-2"}>
        <input
          onChange={e => setPrice(e.target.value)}
          value={price}
          className={"text-base flex-1 pl-3 p-2 bg-white rounded-2xl"}
          type={"number"}
          placeholder={"Prix"}
        />
        <input
          onChange={e => setQuantity(e.target.value)}
          value={quantity}
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
export default AddProductForm
