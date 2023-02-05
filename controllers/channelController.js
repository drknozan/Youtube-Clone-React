import axios from "axios";

export const getChannelInfo = async (req, res) => {
    const { id: channelId } = req.params;

    let channelInfo = {};

    try {
        const channelInfoResponse = await axios.get(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channelId}&maxResults=1&key=${process.env.API_KEY}`);
        channelInfo.channel = channelInfoResponse.data.items[0];

        const channelVideosResponse = await axios.get(`https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&playlistId=${channelInfoResponse.data.items[0].contentDetails.relatedPlaylists.uploads}&maxResults=20&key=${process.env.API_KEY}`);
        channelInfo.videos = channelVideosResponse.data.items;

        return res.status(200).send(channelInfo);
    } catch (error) {
        return res.status(403).send({ msg: "Something went wrong!" });
    }
};