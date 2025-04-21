"use client"
import { useData } from "@/context/DataProvider";

const ReceiptData = () => {
  const { data } = useData();

  const totalAriary = data?.products.reduce((acc, product) => {
    return acc + (product.price * product.quantity);
  }, 0);

  const totalDollar = data?.products.reduce((acc, product) => {
    return acc + (product.bv * product.quantity);
  }, 0);

  const prodList = data?.products.map((product, index) => {
    return (
      <li key={index}>
        <p className="mb-2">{product.name}</p>
        <p className="text-sm flex justify-between pl-5">
          <span>
            {product.price.toLocaleString("fr-MG")} x {product.quantity}
          </span>
          <span>
            {(product.price * product.quantity).toLocaleString("fr-MG", {
              maximumFractionDigits: 0,
            })}{" "}
            Ar
          </span>
        </p>
      </li>
    );
  });

  return (
    <div className="w-full h-fit p-5 bg-white rounded-md shadow-sm flex flex-col justify-center items-center gap-5">
      <div className="w-full">
        <h3>{data.holder.name}</h3>
        <h4>{data.holder.number_card}</h4>
        <hr className="my-4 border-gray-300" />
        <ul className="flex flex-col gap-2">
          {prodList}
        </ul>
        <hr className="my-4 border-gray-300" />
        <div className="relative">
          <div className="flex justify-between">
            <span>Total :</span>
            <span className="font-medium">
              {totalAriary.toLocaleString("fr-MG", {
                maximumFractionDigits: 0,
              })} Ar
            </span>
          </div>
          <div className="flex justify-between">
            <span>BV :</span>
            <span className="font-semibold">
              {totalDollar.toFixed(2)}$
            </span>
          </div>
          <hr className="my-4 border-gray-300" />
          <div className="flex justify-between">
            <span>Prix client :</span>
            <span className="font-medium">
              {(totalAriary * 1.2).toLocaleString("fr-MG", {
                maximumFractionDigits: 0,
              })} Ar
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReceiptData;
