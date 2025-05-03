"use client"
import { useState, useRef } from 'react'
import { Plus } from "lucide-react";
import { useData } from "@/context/DataProvider";
import InputSearchResults from "@/components/InputSearchResults";

const SearchProductsForm = ({ products }) => {
  const { setData } = useData();

  const [showList, setShowList] = useState(false);
  const [prodName, setProdName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [prodPrice, setProdPrice] = useState(0);
  const [prodBv, setProdBv] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const inputRef = useRef(null);

  const filteredProducts = products.filter((product) => {
    const name = product.name.toLocaleLowerCase();
    const search = prodName.toLocaleLowerCase();
    return name.includes(search);
  }).slice(0, 9);

  const handleSelectProduct = (product) => {
    setProdName(product.name);
    setProdPrice(product.price);
    setProdBv(product.bv);
    setShowList(false);
    setSelectedIndex(-1);
  };

  const prodList = filteredProducts.map((product, i) => (
    <li
      key={product._id}
      onClick={() => handleSelectProduct(product)}
      className={`
        h-8 p-5 cursor-pointer flex items-center transition-all
        ${selectedIndex === i ? "bg-primary/40 text-black" : "hover:bg-primary/20"}
      `}
    >
      <span className="flex-1">{product.name}</span>
      <span>{product.price}</span>
      <span className="w-20 flex items-center justify-center">{product.quantity}</span>
    </li>
  ));

  const handleChange = (e) => {
    setProdName(e.target.value);
    setShowList(true);
    setSelectedIndex(-1);
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) =>
        prev < filteredProducts.length - 1 ? prev + 1 : 0
      );
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) =>
        prev > 0 ? prev - 1 : filteredProducts.length - 1
      );
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (filteredProducts.length === 1) {
        handleSelectProduct(filteredProducts[0]);
      } else if (selectedIndex >= 0 && filteredProducts[selectedIndex]) {
        handleSelectProduct(filteredProducts[selectedIndex]);
      }
      inputRef.current.blur();
    }
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
          bv: prodBv,
          quantity: quantity,
        }
      ]
    }));

    setProdName("");
    setQuantity(1);
    setProdPrice(0);
    setProdBv(0);
  };

  return (
    <div className="flex items-center gap-2 w-full">
      <div className="relative flex flex-1 p-2 rounded-3xl bg-black/10 transition-all">
        <div className="flex items-center gap-2 flex-1 transition-all">
          <input
            ref={inputRef}
            onChange={handleChange}
            onClick={() => setShowList(true)}
            value={prodName}
            onKeyDown={handleKeyDown}
            onBlur={() => setTimeout(() => {
              setShowList(false);
              setSelectedIndex(-1);
            }, 200)}
            className="text-base flex-1 pl-3 p-2 bg-white rounded-2xl"
            type="text"
            placeholder="Nom du produit"
          />

          <InputSearchResults show={showList} items={prodList} />

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
        className="btn"
      >
        <Plus size={20} />
      </button>
    </div>
  );
};

export default SearchProductsForm;
