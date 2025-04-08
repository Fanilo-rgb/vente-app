import React from 'react'

const Board = ({children}) => {
  return (
    <div className="absolute left-20 right-0 top-0 h-full">
      {children}
    </div>
  )
}
export default Board
