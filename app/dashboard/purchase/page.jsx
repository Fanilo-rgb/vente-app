import Content from "@/components/Content";
import {getDistributors, getProducts} from "@/libs/api";
import PurchaseComponent from "@/components/PurchaseComponent";


const Sales = async () => {
  const { distributors } = await getDistributors();
  const { products } = await getProducts();

  return (
    <Content title={"Purchase"}>
      <PurchaseComponent distributors={distributors} products={products} />
    </Content>
  )
}
export default Sales
