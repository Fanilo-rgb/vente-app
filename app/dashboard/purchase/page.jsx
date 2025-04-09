import Content from "@/components/Content";
import {getDistributors} from "@/libs/api";
import PurchaseComponent from "@/components/PurchaseComponent";


const Sales = async () => {
  const { distributors } = await getDistributors();

  return (
    <Content title={"Purchase"}>
      <PurchaseComponent distributors={distributors} />
    </Content>
  )
}
export default Sales
