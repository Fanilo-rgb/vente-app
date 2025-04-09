"use client"

import React, {createContext, useContext, useState} from 'react'

const ReceiptContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState({
    holder: {
      name: "",
      number_card: "",
    },
    products: [],
  });

  return (
    <ReceiptContext.Provider value={{ data, setData }}>
      {children}
    </ReceiptContext.Provider>
  )
}

export const useData = () => useContext(ReceiptContext);
