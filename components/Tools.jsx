import React from 'react'

const Tools = ({children}) => {
  return (
    <div className="bg-white h-fit min-w-28 flex flex-col gap-2 p-3 rounded-3xl">
      <h4 className="text-sm text-gray-500">Tools</h4>
      {children}
    </div>
  )
}
export default Tools

export const ToolItem = ({ icon, text }) => {
  return (
    <div className="rounded-2xl bg-black/10 flex flex-col gap-2 items-center justify-center py-2 text-sm">
      {icon}
      {text}
    </div>
  )
}
