import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ChannelVideos from "../components/ChannelVideos";
import { setViewCount } from "../utils";

const Channel = () => {
    const [loading, setLoading] = useState(true);
    const [channelInfo, setChannelInfo] = useState({});
    const [tab, setTab] = useState("home");
    let { channelId } = useParams();

    useEffect(() => {
        const getChannelInfo = async () => {
            try {
                const response = await axios.get(`http://localhost:5500/api/channel/${channelId}`);
                setChannelInfo(response.data);
                setLoading(false);
            } catch (error) {
                console.log(error);
            };
        }

        getChannelInfo();
    }, []);

    const handleTabClick = (e) => {
        e.preventDefault();
        setTab(e.target.textContent);
    };

    const renderTabContent = () => {
        switch(tab) {
            case "home":
                return (
                    <div>
                        
                    </div>
                )
            case "videos":
                return (
                    <div className="grid grid-cols-4">
                        <ChannelVideos channelVideos={channelInfo.videos} />
                    </div>
                )
            case "playlists":
                return (
                    <div>

                    </div>
                )
            case "about":
                return (
                    <div className="text-white flex">
                        <div className="w-3/4 border-b border-zinc-600 pb-8 pr-8">
                            <div className="text-md mt-8">
                                Description
                            </div>
                            <div className="text-sm mt-8">
                                {channelInfo.channel.snippet.description}
                            </div>
                        </div>
                        <div className="w-1/4">
                            <div className="text-md border-b border-zinc-600 mt-8 pb-4">
                                Stats
                            </div>
                            <div className="text-sm border-b border-zinc-600 py-4">
                                Joined {channelInfo.channel.snippet.publishedAt.slice(0, 10)}
                            </div>
                            <div className="text-sm border-b border-zinc-600 py-4">
                                {setViewCount(channelInfo.channel.statistics.viewCount)} views
                            </div>
                        </div>
                    </div>
                )
        }
    };

    return (
        <React.Fragment>
            {
                loading ?
                <div className="z-30 w-screen h-screen">
                    <div className="h-36 w-36 absolute left-[calc(50%)] top-[calc(50%)] animate-spin rounded-full border-t-4 border-gray-400 border-t-zinc-500"></div>
                </div>
                :
                <div className="flex flex-col w-5/6 ml-[calc(100vw/6)] mt-14">
                    <div className="flex flex-col">
        
                        {/* CHANNEL INFO */}
                        {
                            channelInfo.channel && 
                            <div className="flex flex-row justify-between">
                                <div className="flex flex-row">
                                    <img className="w-20 h-20 object-cover rounded-full ml-16 mt-4" src={channelInfo.channel.snippet.thumbnails.high.url} referrerPolicy="no-referrer"></img>
                                    <div className="flex flex-col justify-center ml-8 mt-4">
                                        <div className="text-white text-xl">
                                            {channelInfo.channel.snippet.title}
                                        </div>
                                        <div className="text-zinc-400">
                                            {setViewCount(channelInfo.channel.statistics.subscriberCount)} subscribers
                                        </div>
                                    </div>
                                </div>
                                <div className="">
                                    <button className="bg-red-600 text-white px-5 py-2.5 text-sm  rounded-sm mt-9 mr-16">
                                        SUBSCRIBE
                                    </button>
                                </div>
                            </div>
                        }
        
                        {/* TABS */}
                        <div className="text-sm font-medium text-center px-16 mt-4 border-b border-zinc-700 text-zinc-400">
                            <ul className="flex flex-wrap">
                                <li className="mr-2 cursor-pointer">
                                    <a onClick={handleTabClick} className="inline-block p-4 hover:text-zinc-200 focus:border-b-2 focus:border-zinc-200 uppercase">home</a>
                                </li>
                                <li className="mr-2 cursor-pointer">
                                    <a onClick={handleTabClick} className="inline-block p-4 hover:text-zinc-200 focus:border-b-2 focus:border-zinc-200 uppercase">videos</a>
                                </li>
                                <li className="mr-2 cursor-pointer">
                                    <a className="inline-block p-4 hover:text-zinc-200 focus:border-b-2 focus:border-zinc-200 uppercase">playlists</a>
                                </li>
                                <li className="mr-2 cursor-pointer">
                                    <a onClick={handleTabClick} className="inline-block p-4 hover:text-zinc-200 focus:border-b-2 focus:border-zinc-200 uppercase">about</a>
                                </li>
                            </ul>
                        </div>
        
                        {/* TAB CONTENTS */}
                        <div className="flex flex-col mx-12">
                            {
                                renderTabContent()
                            }
                        </div>
                    </div>
                </div>
            }
        </React.Fragment>
    )
};

export default Channel;