"use client"
import React, {useState} from 'react'
import { useRouter } from 'next/navigation'

const AddProductForm = () => {
  const router = useRouter()

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [bv, setBv] = useState("");
  const [order, setOrder] = useState("");
  const [barCode, setBarCode] = useState("-");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !bv || !price || !order || !barCode) {
      alert("Please fill all fields");
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, bv, price, quantity, barCode, order }),
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

  const handleBv = (e) => {
    const newBv = e.target.value;
    setBv(newBv);
    setPrice(newBv * 3600)
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
          onChange={handleBv}
          value={bv}
          className={"text-base flex-1 pl-3 p-2 bg-white rounded-2xl"}
          type={"number"}
          placeholder={"Bv"}
        />
        <input
          onChange={e => setPrice(e.target.value)}
          value={price}
          className={"text-base flex-1 pl-3 p-2 bg-white rounded-2xl"}
          type={"number"}
          placeholder={"Prix"}
        />
      </div>
      <div className={"flex gap-2"}>
        <input
          onChange={e => setOrder(e.target.value)}
          value={order}
          className={"text-base w-20 pl-3 p-2 bg-white rounded-2xl"}
          type={"number"}
          placeholder={"Ordre"}
        />
        <input
          onChange={e => setBarCode(e.target.value)}
          value={barCode}
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
export default AddProductForm
