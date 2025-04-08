import React from 'react'
import Content from "@/components/Content";
import Nav, {NavItem} from "@/components/Nav";
import {Download, Send} from "lucide-react";
import Tools, {ToolItem} from "@/components/Tools";

const Sales = () => {
  return (
    <Content title={"Sales"}>
      <div className="relative h-full w-full flex flex-col gap-5">
        <Nav>
          <NavItem text={"Today"} />
        </Nav>
        <div className="mx-5 flex-1 flex gap-5 overflow-auto">
          <div className="flex-1">
            <div className="h-full min-w-2xl rounded-xl overflow-auto border-2 border-gray-400">
              <table className="w-full">
                <thead>
                  <tr className="bg-primary h-10 uppercase">
                    <th className="font-semibold">N°</th>
                    <th className="font-semibold text-left">Product</th>
                    <th className="font-semibold">QT</th>
                    <th className="font-semibold">Price</th>
                  </tr>
                </thead>
                <tbody className="h-fit">
                  <tr className="odd:bg-white/90 even:bg-emerald-100">
                    <td className="text-center">1</td>
                    <td className="">Kuding</td>
                    <td className="text-center">1</td>
                    <td className="text-center">42 000</td>
                  </tr>
                  <tr className="odd:bg-white/90 even:bg-emerald-100">
                    <td className="text-center">1</td>
                    <td className="">Kuding</td>
                    <td className="text-center">1</td>
                    <td className="text-center">42 000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <Tools>
            <ToolItem icon={<Send/>} text="Send" />
            <ToolItem icon={<Download/>} text="Download" />
          </Tools>
        </div>
        <div className="bg-white mx-5 px-32 py-2 text-right text-2xl">
          Total : 500 000 ar
        </div>
      </div>
    </Content>
  )
}
export default Sales
