"use client"
import React, {useState} from 'react'
import {useData} from "@/context/DataProvider";
import InputSearchResults from "@/components/InputSearchResults";

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
      const handleClick = () => {
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
          className={`
            h-8 p-5 cursor-pointer hover:bg-primary/20 flex items-center  transition-all
          `}>
          <span className="flex-1 align-middle">{distributor.name} {distributor.surname}</span>
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
        onClick={() => {setShowList(true)}}
        value={distName}
        className="text-base flex-1 pl-3 p-2 bg-white rounded-2xl"
        type="text"
        placeholder="Distributeur"
      />
      <InputSearchResults show={showList} items={distList} />
    </div>
  )
}
export default SearchDistForm
