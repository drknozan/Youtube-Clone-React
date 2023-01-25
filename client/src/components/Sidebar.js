import { AiFillHome, AiOutlineCompass, AiOutlineVideoCamera } from "react-icons/ai";
import { MdOutlineFeedback, MdOutlineHelp, MdVideoLibrary, MdOutlineSubscriptions, MdHistory, MdVideogameAsset, Md360, MdAddCircleOutline, MdOutlineSettings, MdOutlinedFlag } from "react-icons/md";
import { BiUserCircle } from "react-icons/bi";
import { BsMusicNoteBeamed, BsTrophyFill } from "react-icons/bs";
import { FaSatelliteDish } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
    const navigate = useNavigate();

    return (
        <div className="fixed left-0 z-10 bg-zinc-800 w-1/6">
            <div className="absolute top-14 bg-zinc-800 h-screen hover:overflow-y-scroll">
                <div className="border-b border-zinc-600">
                    <div className="flex px-6 py-4 hover:bg-zinc-700 cursor-pointer" onClick={() => navigate("/")}>
                            <AiFillHome size={24} className="text-white" />
                        <div className="text-white text-md ml-6">
                            Home
                        </div>
                    </div>
                    <div className="flex px-6 py-4 hover:bg-zinc-700 cursor-pointer">
                        <AiOutlineCompass size={24} className="text-white" />
                        <div className="text-white text-md ml-6">
                            Explore
                        </div>
                    </div>
                    <div className="flex px-6 py-4 hover:bg-zinc-700 cursor-pointer">
                        <AiOutlineVideoCamera size={24} className="text-white" />
                        <div className="text-white text-md ml-6">
                            Shorts
                        </div>
                    </div>
                    <div className="flex px-6 py-4 hover:bg-zinc-700 cursor-pointer">
                        <MdOutlineSubscriptions size={24} className="text-white" />
                        <div className="text-white text-md ml-6">
                            Subscriptions
                        </div>
                    </div>
                </div>
                <div className="border-b border-zinc-600">
                    <div className="flex px-6 py-4 hover:bg-zinc-700 cursor-pointer">
                        <MdVideoLibrary size={24} className="text-white" />
                        <div className="text-white text-md ml-6">
                            Library
                        </div>
                    </div>
                    <div className="flex px-6 py-4 hover:bg-zinc-700 cursor-pointer">
                        <MdHistory size={24} className="text-white" />
                        <div className="text-white text-md ml-6">
                            History
                        </div>
                    </div>
                </div>
                <div className="border-b border-zinc-600">
                    <div className="text-white text-sm p-6">
                        Sign in to like videos, comment, and subscribe.
                    </div>
                    <div className="flex justify-center border border-sky-400 rounded p-2 cursor-pointer w-28 ml-6 mb-4">
                        <BiUserCircle size={22} className="text-sky-400" />
                        <div className="text-sky-400 mx-1 text-sm flex items-center">
                            SIGN IN
                        </div>
                    </div>
                </div>
                <div className="border-b border-zinc-600">
                    <div className="text-sm text-zinc-400 ml-6 mt-4">
                        EXPLORE
                    </div>
                    <div className="flex px-6 py-4 hover:bg-zinc-700 cursor-pointer">
                        <div className="bg-zinc-700 p-2 rounded-full">
                            <BsMusicNoteBeamed size={16} className="text-white" />
                        </div>
                        <div className="text-white text-sm ml-6 flex items-center">
                            Music
                        </div>
                    </div>
                    <div className="flex px-6 py-4 hover:bg-zinc-700 cursor-pointer">
                        <div className="bg-zinc-700 p-2 rounded-full">
                            <BsTrophyFill size={16} className="text-white" />
                        </div>
                        <div className="text-white text-sm ml-6 flex items-center">
                            Sports
                        </div>
                    </div>
                    <div className="flex px-6 py-4 hover:bg-zinc-700 cursor-pointer">
                        <div className="bg-zinc-700 p-2 rounded-full">
                            <MdVideogameAsset size={16} className="text-white" />
                        </div>
                        <div className="text-white text-sm ml-6 flex items-center">
                            Gaming
                        </div>
                    </div>
                    <div className="flex px-6 py-4 hover:bg-zinc-700 cursor-pointer">
                        <div className="bg-zinc-700 p-2 rounded-full">
                            <FaSatelliteDish size={16} className="text-white" />
                        </div>
                        <div className="text-white text-sm ml-6 flex items-center">
                            Live
                        </div>
                    </div>
                    <div className="flex px-6 py-4 hover:bg-zinc-700 cursor-pointer">
                        <div className="bg-zinc-700 p-2 rounded-full">
                            <Md360 size={16} className="text-white" />
                        </div>
                        <div className="text-white text-sm ml-6 flex items-center">
                            360 Video
                        </div>
                    </div>
                </div>
                <div className="border-b border-zinc-600">
                    <div className="flex px-6 py-4 hover:bg-zinc-700 cursor-pointer">
                        <div className="bg-zinc-700 p-2 rounded-full">
                            <MdAddCircleOutline size={16} className="text-white" />
                        </div>
                        <div className="text-white text-sm ml-6 flex items-center">
                            Browse Channels
                        </div>
                    </div>
                </div>
                <div className="border-b border-zinc-600">
                    <div className="flex px-6 py-4 hover:bg-zinc-700 cursor-pointer">
                        <MdOutlineSettings size={24} className="text-white" />
                        <div className="text-white text-sm ml-6 flex items-center">
                            Settings
                        </div>
                    </div>
                    <div className="flex px-6 py-4 hover:bg-zinc-700 cursor-pointer">
                        <MdOutlinedFlag size={24} className="text-white" />
                        <div className="text-white text-sm ml-6 flex items-center">
                            Report History
                        </div>
                    </div>
                    <div className="flex px-6 py-4 hover:bg-zinc-700 cursor-pointer">
                        <MdOutlineHelp size={24} className="text-white" />
                        <div className="text-white text-sm ml-6 flex items-center">
                            Help
                        </div>
                    </div>
                    <div className="flex px-6 py-4 hover:bg-zinc-700 cursor-pointer">
                        <MdOutlineFeedback size={24} className="text-white" />
                        <div className="text-white text-sm ml-6 flex items-center">
                            Send Feedback
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;

