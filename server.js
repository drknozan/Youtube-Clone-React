import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import channelRouter from "./routes/channelRoutes.js";
import videoRouter from "./routes/videoRoutes.js";

dotenv.config();
const app = express();

app.use(cors());
app.use("/api/channel", channelRouter);
app.use("/api/video", videoRouter);

app.listen(5500, () => {
    console.log("Server is running on port 5500.");
})