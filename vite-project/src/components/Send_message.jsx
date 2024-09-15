
const Send_message = () => {
  return (
    <div className="bg-gray-200 fixed bottom-0 w-full py-10 shadow-lg">
      <form className="containerWrap flex">
        <input className="input w-full focus:outline-none bg-gray-100 rounded-r-none text-black" type="text" />
        <button className="w-auto bg-gray-500 text-white rounded-r-lg px-5 text-sm">Send</button>
      </form>
    </div>
  )
}

export default Send_message
