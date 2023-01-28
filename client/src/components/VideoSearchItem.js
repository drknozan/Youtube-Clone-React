import axios from "axios";
import React, { useEffect, useState } from "react";
import { setViewCount } from "../utils";
import { useNavigate } from "react-router-dom";

const VideoSearchItem = ({ videoId, publishedAt, title, description, thumbnails, channelTitle }) => {
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

    return (
        <React.Fragment>
            {
                loading ?
                <div className="flex flex-row m-6 p-4 shadow animate-pulse">
                    <div className="mb-4 h-[384px] w-2/5 rounded bg-zinc-700"></div>
                    <div className="w-3/5 ml-4">
                        <div className="h-4 w-full rounded bg-zinc-700"></div>
                        <div className="h-4 w-1/4 rounded bg-zinc-700 mt-1"></div>
                    </div>
                </div>
                :
                <div className="flex flex-row m-6 cursor-pointer">
                    <div className="relative" onClick={() => navigate(`/video/${videoId}`)}>
                        <img className="object-cover" width={thumbnails.high.width} height={thumbnails.high.height} src={thumbnails.high.url}></img>
                    </div>
                    <div className="w-3/5 ml-4">
                        <div className="text-white text-xl">
                            {title}
                        </div>
                        <div className="flex flex-row text-zinc-400 text-xs mt-1">
                            <div className="">
                                {setViewCount(videoInfo.video.statistics.viewCount)}
                            </div>
                            <div className="ml-2">
                                {publishedAt.slice(0, 10)}
                            </div>
                        </div>
                        <div className="flex flex-row items-center mt-4" onClick={() => navigate(`/channel/${videoInfo.video.snippet.channelId}`)}>
                            <div>
                                <img className="w-6 rounded-full h-6 object-cover" src={videoInfo.channel.snippet.thumbnails.high.url} referrerPolicy="no-referrer"></img>
                            </div>
                            <div className="ml-2 text-zinc-400 text-sm">
                                {channelTitle}
                            </div>
                        </div>
                        <div className="text-zinc-400 text-sm mt-4">
                            {description}
                        </div>
                    </div>
                </div>
            }
        </React.Fragment>
    )
};

export default VideoSearchItem;