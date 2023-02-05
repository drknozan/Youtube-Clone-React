import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import videoRouter from "./routes/videoRoutes.js";

dotenv.config();
const app = express();

app.use(cors());
app.use("/api/video", videoRouter);

app.listen(5500, () => {
    console.log("Server is running on port 5500.");
})