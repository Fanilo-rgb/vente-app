const InputSearchResults = ({ show, items }) => {
  return (
    <div
      className={`absolute top-full left-2 right-2 bg-white rounded-2xl shadow-2xl z-50 transition-all duration-300 transform origin-top overflow-hidden ${
        show ? "max-h-60" : "max-h-0 pointer-events-none"
      }`}
    >
      <ul className="h-full flex flex-col justify-between py-2.5">
        {items}
      </ul>
    </div>
  )
}
export default InputSearchResults
