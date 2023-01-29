import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import VideoSearchItem from "../components/VideoSearchItem";

const Search = () => {
    const [result, setResult] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchParams, setSearchParams] = useSearchParams();
    const q = searchParams.get("q");

    useEffect(() => {
        setLoading(true);
        const getResults = async () => {
            try {
                const response = await axios.get(`http://localhost:5500/api/video?q=${q}`);
                setResult(response.data.items);
                setLoading(false);
            } catch (error) {
                console.log(error);
            }
        }

        getResults();
    }, [searchParams]);

    return (
        <React.Fragment>
            {
                loading ?
                <div className="flex flex-col w-5/6 ml-[calc(100vw/6)] mt-14">
                    <div className="flex flex-row m-6 p-4 shadow animate-pulse">
                        <div className="mb-4 h-[384px] w-2/5 rounded-lg bg-zinc-700"></div>
                        <div className="w-3/5 ml-4">
                            <div className="h-4 w-full rounded-full bg-zinc-700"></div>
                            <div className="h-4 w-1/4 rounded-full bg-zinc-700 mt-1"></div>
                        </div>
                    </div>
                    <div className="flex flex-row m-6 p-4 shadow animate-pulse">
                        <div className="mb-4 h-[384px] w-2/5 rounded-lg bg-zinc-700"></div>
                        <div className="w-3/5 ml-4">
                            <div className="h-4 w-full rounded-full bg-zinc-700"></div>
                            <div className="h-4 w-1/4 rounded-full bg-zinc-700 mt-1"></div>
                        </div>
                    </div>
                    <div className="flex flex-row m-6 p-4 shadow animate-pulse">
                        <div className="mb-4 h-[384px] w-2/5 rounded-lg bg-zinc-700"></div>
                        <div className="w-3/5 ml-4">
                            <div className="h-4 w-full rounded-full bg-zinc-700"></div>
                            <div className="h-4 w-1/4 rounded-full bg-zinc-700 mt-1"></div>
                        </div>
                    </div>
                    <div className="flex flex-row m-6 p-4 shadow animate-pulse">
                        <div className="mb-4 h-[384px] w-2/5 rounded-lg bg-zinc-700"></div>
                        <div className="w-3/5 ml-4">
                            <div className="h-4 w-full rounded-full bg-zinc-700"></div>
                            <div className="h-4 w-1/4 rounded-full bg-zinc-700 mt-1"></div>
                        </div>
                    </div>
                </div>
                :
                <div className="flex flex-col w-5/6 ml-[calc(100vw/6)] mt-14">
                    {
                        result.map((video) => {
                            return <VideoSearchItem
                                    key={video.id.videoId}
                                    videoId={video.id.videoId}
                                    publishedAt={video.snippet.publishedAt}
                                    title={video.snippet.title}
                                    thumbnails={video.snippet.thumbnails}
                                    channelTitle={video.snippet.channelTitle}
                                    description={video.snippet.description}
                                    />
                        })
                    }
                </div>
            }
        </React.Fragment>
    );
};

export default Search;