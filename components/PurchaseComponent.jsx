import SearchDistForm from "@/components/SearchDistForm";
import SearchProductsForm from "@/components/SearchProductsForm";
import PurchaseList from "@/components/PurchaseList";
import {DataProvider} from "@/context/DataProvider";
import ReceiptData from "@/components/ReceiptData";

const PurchaseComponent = ({ distributors }) => {
  return (
    <DataProvider>
      <div className=" px-20 flex gap-5">
        <div className="relative flex flex-col gap-5 min-w-2xl">

          <div className="flex flex-col gap-5">
            <SearchDistForm distributors={distributors} />
            <SearchProductsForm/>
          </div>
          <PurchaseList/>

          <button className="btn fixed bottom-10 left-30 ">
            Payement
          </button>
        </div>
        <div className="bg-black/10 p-5 rounded-3xl overflow-auto min-w-sm">
          <ReceiptData/>
        </div>
      </div>
    </DataProvider>
  )
}
export default PurchaseComponent
