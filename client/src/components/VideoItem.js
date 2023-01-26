import axios from "axios";
import { setDuration, setViewCount } from "../utils";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";

export default function VideoItem({ videoId, publishedAt, title, thumbnails, channelTitle  }) {
    const [loading, setLoading] = useState(true);
    const [videoInfo, setVideoInfo] = useState({});
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

    const handleVideoClick = (e) => {
        e.preventDefault();
        navigate(`/video/${videoId}`);
    }

    const handleChannelClick = (e) => {
        e.preventDefault();
        navigate(`/channel/${videoInfo.video.snippet.channelId}`);
    }
    

    return (
            <React.Fragment>
                {
                    loading ?
                    <div className="p-4 rounded shadow animate-pulse">
                        <div className="mb-4 h-48 rounded bg-zinc-700"></div>
                        <div className="h-2.5 rounded-full bg-zinc-700 w-48 mb-4"></div>
                        <div className="h-2 rounded-full bg-zinc-700"></div>
                        <div className="flex items-center mt-2 space-x-3">
                            <div className="w-12 h-12 rounded-full bg-zinc-700"></div>
                            <div>
                                <div className="h-2.5 rounded-full bg-zinc-700 w-32 mb-2"></div>
                                <div className="w-48 h-2 rounded-full bg-zinc-700"></div>
                            </div>
                        </div>
                    </div>
                    :
                    <div className="flex flex-col cursor-pointer m-2">
                        <div className="relative" onClick={handleVideoClick}>
                            <img className="" src={thumbnails}></img>
                            <div className="absolute bottom-0 right-0 text-xs text-white bg-black p-1 rounded-sm m-1.5">{setDuration(videoInfo.video.contentDetails.duration)}</div>
                        </div>
                        <div className="flex flex-row p-2" onClick={handleChannelClick}>
                            <div className="w-1/5">
                                <img className="w-9 rounded-full h-9 object-cover mt-1.5" src={videoInfo.channel.snippet.thumbnails.high.url}></img>
                            </div>
                            <div className="w-4/5">
                                <p className="text-white max-h-16 py-0.5 overflow-hidden text-l" onClick={handleVideoClick}>
                                    {title.substring(0,36) + "..."}
                                </p>
                                <div className="text-xs text-zinc-400" onClick={handleChannelClick}>
                                    {channelTitle}
                                </div>
                                <div className="flex flex-row">
                                    <div className="text-xs text-zinc-400">
                                        {setViewCount(videoInfo.video.statistics.viewCount)} views •
                                    </div>
                                    <div className="text-xs text-zinc-400 ml-2">
                                        {publishedAt.slice(0, 10)}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </React.Fragment>
        )
};