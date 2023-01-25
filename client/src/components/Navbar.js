import { FiMenu, FiSearch } from "react-icons/fi";
import { AiOutlineMore } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { BsYoutube } from "react-icons/bs";
import { BsMicFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
    const [searchInput, setSearchInput] = useState("");
    const navigate = useNavigate();

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        navigate(`/search?q=${searchInput}`);
    };

    return (
        <div className="fixed top-0 w-full z-20 bg-zinc-800">
        <div className="mx-4 h-14 flex flex-row items-center justify-between">
            <div className="flex">
                <div className="flex items-center mx-2">
                    <FiMenu size={26} className="text-white cursor-pointer" />
                </div>
                <div className="flex items-center cursor-pointer mx-2" onClick={() => navigate("/")}>
                    <BsYoutube size={34} className="text-rose-600"/>
                    <div className="text-white text-lg text-center font-semibold mx-1">
                        YouTube
                    </div>
                </div>
            </div>
            <div className="flex flex-row">
                <form className="h-10 flex" onSubmit={handleSearchSubmit}>
                    <input className="w-[538px] bg-zinc-900 border border-zinc-700 p-4 text-white focus:outline-none" placeholder="Search" onChange={(e) => setSearchInput(e.target.value)}></input>
                    <button type="submit" className="flex justify-center border border-zinc-700 h-10 w-16 bg-zinc-700 p-2">
                        <FiSearch size={20} className="text-white cursor-pointer" />
                    </button>
                    <div className="bg-zinc-900 p-2.5 rounded-full ml-4">
                        <BsMicFill size={18} className="text-white cursor-pointer" />
                    </div>
                </form>
            </div>
            <div className="flex flex-row mx-2 items-center justify-end">
                <AiOutlineMore size={24} className="text-white mr-4 cursor-pointer" />
                <div className="flex border border-sky-400 rounded p-2 cursor-pointer">
                    <BiUserCircle size={22} className="text-sky-400" />
                    <div className="text-sky-400 mx-1 text-sm flex items-center">
                        SIGN IN
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Navbar;
