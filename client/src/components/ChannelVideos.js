import VideoItem from "./VideoItem";

const ChannelVideos = ({ channelVideos }) => {
    return (
        <>
            {
                channelVideos.map((video, i) => {
                    return <VideoItem
                        key={i}
                        videoId={video.contentDetails.videoId}
                        publishedAt={video.snippet.publishedAt}
                        title={video.snippet.title}
                        thumbnails={video.snippet.thumbnails.high.url}
                        channelTitle={video.snippet.channelTitle}
                    />
                })
            }
        </>
    )
}

export default ChannelVideos;