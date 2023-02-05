import axios from "axios";

export const getVideos = async (req, res) => {
    const { q } = req.query;

    try {
        const response = await axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=24&eventType=completed&q=${q}&type=video&key=${process.env.API_KEY}`);
        return res.status(200).send(response.data);
    } catch (error) {
        return res.status(403).send({ msg: "Something went wrong" });
    }
}

export const getVideoInfo = async (req, res) => {
    const { id: videoId } = req.params;

    let videoInfo = {};

    try {
        const videoInfoResponse = await axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&maxResults=1&key=${process.env.API_KEY}`);
        videoInfo.video = videoInfoResponse.data.items[0];

        const channelVideosResponse = await axios.get(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${videoInfoResponse.data.items[0].snippet.channelId}&maxResults=1&key=${process.env.API_KEY}`);
        videoInfo.channel = channelVideosResponse.data.items[0];

        return res.status(200).send(videoInfo);
    } catch (error) {
        return res.status(500).send({ msg: "Something went wrong" });
    }
}