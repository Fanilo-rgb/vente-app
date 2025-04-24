"use client"

const Table = ({ data }) => {

  const products = data.map((product, index) => {
    const prixTotal = product.price * product.quantity;
    return (
      <tr key={product._id} className="h-10 odd:bg-white/90 even:bg-primary/10">
        <td className="text-center">{index + 1}</td>
        <td className="w-1/2">{product.name}</td>
        <td className="text-center">{product.quantity}</td>
        <td className="text-center">
          {prixTotal.toLocaleString("fr-MG", { maximumFractionDigits: 0 })}
        </td>
      </tr>
    );
  });

  const total = data.reduce((acc, product) => {
    return acc + (product.price * product.quantity);
  }, 0);

  return (
    <>
      <div className="flex-1 mb-20">
        <div className="h-full min-w-2xl rounded-xl overflow-auto border-2 border-gray-400">
          <table className="w-full">
            <thead>
            <tr className="bg-primary h-10 uppercase">
              <th className="font-semibold">N°</th>
              <th className="font-semibold text-left">Produits</th>
              <th className="font-semibold">QT</th>
              <th className="font-semibold">Prix</th>
            </tr>
            </thead>
            <tbody className="h-fit">
            {products}
            </tbody>
          </table>
        </div>
      </div>
      <div className="absolute left-0 right-0 bg-white mx-5 px-32 py-2 text-right text-2xl bottom-5">
        Total : {total.toLocaleString("fr-MG", { maximumFractionDigits: 0 })} ar
      </div>
    </>
  );
}

export default Table;
