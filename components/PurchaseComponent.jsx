"use client"
import SearchDistForm from "@/components/SearchDistForm";
import SearchProductsForm from "@/components/SearchProductsForm";
import PurchaseList from "@/components/PurchaseList";
import {DataProvider, useData} from "@/context/DataProvider";
import ReceiptData from "@/components/ReceiptData";
import { useRouter } from "next/navigation";

const PurchaseInner = ({ distributors, products }) => {
  const { data } = useData();
  const router = useRouter();

  const handlePayment = async () => {
    const { holder, products: items } = data;

    if (!holder.name || !holder.number_card) {
      alert("Veuillez sélectionner un distributeur.");
      return;
    }

    if (!items.length) {
      alert("Veuillez ajouter au moins un produit.");
      return;
    }

    const name = holder.name;
    const number_card = holder.number_card;

    try {
      const res = await fetch("http://localhost:3000/api/tickets", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({name, number_card, items}),
      });

      if (res.ok) {
        router.push("/dashboard/tickets");
      } else {
        throw new Error("Failed to create ticket");
      }
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="px-20 flex gap-5">
      <div className="relative flex flex-col gap-5 min-w-2xl">

        <div className="flex flex-col gap-5">
          <SearchDistForm distributors={distributors} />
          <SearchProductsForm products={products} />
        </div>

        <PurchaseList />

        <button
          onClick={handlePayment}
          className="btn fixed bottom-10 left-30"
        >
          Payement
        </button>
      </div>

      <div className="bg-black/10 p-5 rounded-3xl overflow-auto min-w-sm">
        <ReceiptData />
      </div>
    </div>
  );
};

const PurchaseComponent = ({ distributors, products }) => {
  return (
    <DataProvider>
      <PurchaseInner distributors={distributors} products={products} />
    </DataProvider>
  );
};

export default PurchaseComponent;
