"use client"
import React, {useState} from 'react'
import {useData} from "@/context/DataProvider";

const SearchDistForm = ({ distributors }) => {
  const { setData } = useData();

  const [distName, setDistName] = useState("")
  const [showList , setShowList ] = useState(false)

  const distList = distributors.filter((distributor) => {
    const name = distributor.name.toLocaleLowerCase();
    const card = distributor.number_card;
    const search = distName.toLocaleLowerCase();

    if (name.includes(search) || card.startsWith(search)) {
      return distributor;
    }
  })
    .slice(0, 5)
    .map((distributor) => {
      const handleClick = (e) => {
        setDistName(distributor.name);
        setData(prev => ({
          ...prev,
          holder: {
            ...prev.holder,
            name: distributor.name,
            number_card: distributor.number_card,
          }
        }))
      }
      return (
        <li
          onClick={handleClick}
          key={distributor._id}
          className="h-8 px-5 cursor-pointer flex items-center hover:bg-primary/20 rounded-md transition-all">
          <span className="flex-1 align-middle">{distributor.name}</span>
          <span className="text-center rounded-sm">{distributor.number_card}</span>
        </li>
      )
  });

  const handleSearch = (e) => {
    setDistName(e.target.value);
    setShowList(true)
  }

  return (
    <div className="relative flex bg-black/10 rounded-3xl p-2 gap-2">
      <input
        onBlur={() => {
          setTimeout(() => {
            setShowList(false)
          }, 200)
        }}
        onChange={handleSearch}
        value={distName}
        className="text-base flex-1 pl-3 p-2 bg-white rounded-2xl"
        type="text"
        placeholder="Distributeur"
      />

      {showList && (
        <div className="absolute top-full left-2 h-fit right-2 bg-white rounded-2xl shadow-2xl z-50">
          <ul className="flex flex-col gap-1 py-2">
            {distList}
          </ul>
        </div>
      )}
    </div>
  )
}
export default SearchDistForm
