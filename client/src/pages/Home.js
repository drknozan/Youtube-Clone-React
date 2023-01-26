import React, { useEffect, useState } from "react";
import VideoItem from "../components/VideoItem";
import axios from "axios";

const Home = () => {
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        async function getVideos() {
            try {
                const response = await axios.get("http://localhost:5500/api/video?q=sports");
                setVideos(response.data.items);
                setLoading(false);
            } catch (error) {
                console.log(error);
            };
        };

        getVideos();
    }, []);

    return (
        <React.Fragment>
        {
            loading ?
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-5/6 bg-zinc-900 ml-[calc(100vw/6)] mt-14 px-6 pt-6">
                {
                    <div className="z-30 w-screen h-screen">
                        <div className="h-24 w-24 absolute left-[calc(50%)] top-[calc(50%)] animate-spin rounded-full border-t-4 border-gray-400 border-t-zinc-500"></div>
                    </div>
                }
            </div>
            :
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-5/6 bg-zinc-900 ml-[calc(100vw/6)] mt-14 px-6 pt-6">
                {
                    videos.map((video) => {
                        return (
                            <VideoItem 
                                    key={video.id.videoId}
                                    videoId={video.id.videoId}
                                    publishedAt={video.snippet.publishedAt}
                                    title={video.snippet.title}
                                    thumbnails={video.snippet.thumbnails.high.url}
                                    channelTitle={video.snippet.channelTitle}
                            />
                        )
                    })
                }
            </div>
        }
        </React.Fragment>
    );
};

export default Home;