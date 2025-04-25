const Loading = () => {
  return (
    <div className={"absolute top-0 bottom-0 overflow-hidden flex gap-5"}>
      <div className={"overflow-auto"}>
        <ul className={"flex flex-col bg-black/10 rounded-3xl p-2 gap-2 min-w-3xl"}>
          <li className={"loadingComponent w-full h-16 bg-white/80 rounded-2xl"}></li>
          <li className={"loadingComponent w-full h-16 bg-white/80 rounded-2xl"}></li>
          <li className={"loadingComponent w-full h-16 bg-white/80 rounded-2xl"}></li>
          <li className={"loadingComponent w-full h-16 bg-white/80 rounded-2xl"}></li>
          <li className={"loadingComponent w-full h-16 bg-white/80 rounded-2xl"}></li>
          <li className={"loadingComponent w-full h-16 bg-white/80 rounded-2xl"}></li>
          <li className={"loadingComponent w-full h-16 bg-white/80 rounded-2xl"}></li>
        </ul>
      </div>
      <div className={"bg-black/10 h-fit min-w-md rounded-3xl p-2 flex flex-col gap-2"}>
        <div className={"loadingComponent bg-white h-10 rounded-2xl"}></div>
        <div className={"loadingComponent bg-white h-10 rounded-2xl"}></div>
        <div className={"loadingComponent bg-white h-10 rounded-2xl"}></div>
        <div className={"loadingComponent bg-primary h-10 rounded-2xl"}></div>
      </div>
    </div>
  )
}
export default Loading
