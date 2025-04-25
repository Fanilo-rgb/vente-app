"use client"
import {useRouter} from "next/navigation";
import {Trash2} from "lucide-react";

const RemoveDistributorBtn = ({id}) => {
  const router = useRouter();

  const removePerson = async () => {
    const confirmed = confirm("Are you sure you want to remove This distributor?");

    if (confirmed) {
      const res = await fetch(`http://localhost:3000/api/distributors?id=${id}`, {
        method: "DELETE",
      })

      if (res.ok) {
        router.refresh();
      }
    }
  }

  return (
    <button onClick={removePerson} className="bg-transparent hover:bg-red-200 text-red-600 w-8 h-8 grid place-items-center rounded-full transition-all">
      <Trash2 size={18}/>
    </button>
  )
}
export default RemoveDistributorBtn
