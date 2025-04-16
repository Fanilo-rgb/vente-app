import React from 'react'
import {Download, Send} from "lucide-react";
import Tools, {ToolItem} from "@/components/Tools";
import { getTodaySales} from "@/libs/api";
import Table from "@/components/Table";

const Sales = async () => {
  const todaySales = await getTodaySales();

  return (
    <>
      <div className="mx-5 flex-1 flex gap-5 overflow-auto">
        <Table data={todaySales} />
        <Tools>
          <ToolItem icon={<Send size={20}/>} text="Envoyer" />
          <ToolItem icon={<Download size={20}/>} text="Télécharger" />
        </Tools>
      </div>
    </>
  );
}

export default Sales
