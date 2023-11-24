import { Link, useNavigate } from "react-router-dom";
import {BiSearch} from "react-icons/bi"
import {BsCameraReels} from "react-icons/bs"
import {FaBell} from "react-icons/fa"

const Header = () => {

const navigate =useNavigate()

const handleSubmit = (e) => {
  e.preventDefault()
  const text =e.target[0].value
  navigate(`/results?search_query=${text}`)
}

  return (
    <header className="flex justify-between items-center p-4">
        <Link to={"/"} className="flex items-center gap-[10px]">
        <img width={50} src="/yt-logo.png" alt="" />
        <h1 className="text-2xl hidden md:block">YouTube</h1>
        </Link>

        <form onSubmit={handleSubmit} className="flex items-center border border-gray-400 rounded-[20px]" >
            <input placeholder="örn: Komik videolar..." className="bg-black outline-none rounded-[20px] py-1 px-3" type="text" />
            <button className="grid place-items-center border-left px-2">
            <BiSearch />
            </button>
        </form>

        <div className="flex gap-3 text-xl cursor-pointer">
        <div className="p-2 transition duration-500 hover:bg-gray-700 rounded-full"><BsCameraReels/></div>
        <div className="p-2 transition duration-500 hover:bg-gray-700 rounded-full"><FaBell/></div>
        </div>
    </header>
  )
}

export default Header;