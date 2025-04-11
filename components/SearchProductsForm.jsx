"use client"
import { useState } from 'react'
import { Plus } from "lucide-react";
import { useData } from "@/context/DataProvider";

const SearchProductsForm = ({ products }) => {
  const { data, setData } = useData();

  const [showList, setShowList] = useState(false);
  const [prodName, setProdName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [prodPrice, setProdPrice] = useState(0);

  const prodList = products.filter((product) => {
    const name = product.name.toLocaleLowerCase();
    const search = prodName.toLocaleLowerCase();
    return name.includes(search);
  })
    .slice(0, 5)
    .map(product => {
      const handleClick = () => {
        setProdName(product.name);
        setProdPrice(product.price);
      };
      return (
        <li
          key={product._id}
          onClick={handleClick}
          className="h-8 px-5 cursor-pointer flex items-center hover:bg-primary/20 rounded-md transition-all">
          <span className="flex-1">{product.name}</span>
          <span>{product.price}</span>
        </li>
      );
    });

  const handleChange = (e) => {
    setProdName(e.target.value);
    setShowList(true);
  };

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value > 0) {
      setQuantity(value);
    } else {
      setQuantity("");
    }
  };

  const handleSubmit = () => {
    if (!prodName || !prodPrice || !quantity) return;

    setData(prev => ({
      ...prev,
      products: [
        ...prev.products,
        {
          name: prodName,
          price: prodPrice,
          quantity: quantity,
        }
      ]
    }));

    setProdName("");
    setQuantity(1);
    setProdPrice(0);
  };

  return (
    <div className="flex items-center gap-2 w-full">
      <div className="relative flex flex-1 p-2 rounded-3xl bg-black/10 transition-all">
        <div className="flex items-center gap-2 flex-1 transition-all">
          <input
            onChange={handleChange}
            value={prodName}
            onBlur={() => setTimeout(() => setShowList(false), 200)}
            className="text-base flex-1 pl-3 p-2 bg-white rounded-2xl"
            type="text"
            placeholder="Nom du produit"
          />

          {showList && (
            <div className="absolute top-full left-2 right-2 bg-white rounded-2xl shadow-2xl z-50">
              <ul className="flex flex-col gap-1 py-2">
                {prodList}
              </ul>
            </div>
          )}

          <input
            className="bg-white text-base h-10 w-15 pl-2 tracking-widest text-center rounded-2xl"
            type="number"
            placeholder="1"
            value={quantity}
            onChange={handleQuantityChange}
            min={1}
          />
        </div>
      </div>
      <button
        onClick={handleSubmit}
        className="btn">
        <Plus size={20} />
      </button>
    </div>
  );
};

export default SearchProductsForm;
