import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { RiShareForwardLine } from "react-icons/ri";
import { AiOutlineEllipsis } from "react-icons/ai";
import { MdPlaylistAdd } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { setViewCount } from "../utils";
import axios from "axios";

const Video = () => {
    const [loading, setLoading] = useState(true);
    const [videoInfo, setVideoInfo] = useState({});
    let { videoId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const getVideoInfo = async () => {
            try {
                const response = await axios.get(`http://localhost:5500/api/video/${videoId}`);
                setVideoInfo(response.data);
                setLoading(false);
            } catch (error) {
                console.log(error);
            };
        }

        getVideoInfo();
    }, []);

    const handleChannelClick = (e) => {
        e.preventDefault();
        navigate(`/channel/${videoInfo.video.snippet.channelId}`);
    };

    return (
        <React.Fragment>
            {
                loading ?
                <div className="p-4 rounded shadow animate-pulse ml-[calc(100vw/6)] mt-14 px-8 py-6">
                    <div className="mb-4 h-[560px] rounded bg-zinc-700">
                        
                    </div>
                    <div className="h-2.5 rounded-full bg-zinc-700 w-48 mb-4"></div>
                    <div className="h-2 rounded-full bg-zinc-700 w-24"></div>
                    <div className="flex items-center mt-2 space-x-3">
                        <div className="w-12 h-12 rounded-full bg-zinc-700"></div>
                        <div>
                            <div className="h-2.5 rounded-full bg-zinc-700 w-32 mb-2"></div>
                            <div className="w-48 h-2 rounded-full bg-zinc-700"></div>
                        </div>
                    </div>
                </div>
                :
                <div className="flex flex-col w-5/6 ml-[calc(100vw/6)] mt-14 px-8 py-6">
                    <div className="h-[560px] w-full">
                        <iframe className="w-full h-full" src={`https://www.youtube.com/embed/${videoId}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                    </div>
                    <div className="text-white text-xl mt-4">
                        {videoInfo.video.snippet.title}
                    </div>
                    <div className="flex justify-between mt-2 text-sm border-b border-zinc-800 pb-6 text-zinc-400">
                        <div className="flex flex-row">
                            <div className="">
                                {setViewCount(videoInfo.video.statistics.viewCount)} views •
                            </div>
                            <div className="ml-2">
                                {videoInfo.video.snippet.publishedAt.slice(0, 10)}
                            </div>
                        </div>
                        <div className="flex flex-row mx-6">
                            <AiOutlineLike size={24} className="text-white ml-6" />
                            <div className="text-white uppercase bold ml-2">
                                {videoInfo.video.statistics.likeCount}
                            </div>
                            <AiOutlineDislike size={24} className="text-white ml-6" />
                            <div className="text-white uppercase bold ml-2">
                                dislike
                            </div>
                            <RiShareForwardLine size={24} className="text-white ml-6" />
                            <div className="text-white uppercase bold ml-2">
                                share
                            </div>
                            <MdPlaylistAdd size={24} className="text-white ml-6" />
                            <div className="text-white uppercase bold ml-2">
                                save
                            </div>
                            <AiOutlineEllipsis size={24} className="text-white ml-6" />
                        </div>
                    </div>
                    <div className="flex flex-row justify-between mt-6">
                        <div className="flex flex-row items-center cursor-pointer" onClick={handleChannelClick}>
                            <img className="w-12 h-12 object-cover rounded-full" src={videoInfo.channel.snippet.thumbnails.high.url} referrerPolicy="no-referrer"></img>
                            <div className="flex flex-col justify-center ml-6">
                                <div className="text-white text-md">
                                    {videoInfo.channel.snippet.title}
                                </div>
                                <div className="text-zinc-400 text-xs">
                                    {setViewCount(videoInfo.channel.statistics.subscriberCount)} subscribers
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <button className="bg-red-600 text-white px-5 py-2.5 text-sm  rounded-sm">
                                SUBSCRIBE
                            </button>
                        </div>
                    </div>
                    <div>
                        
                    </div>
                </div>
            }
        </React.Fragment>
    );
};

export default Video;