import express from "express";

const router = express.Router();

import { getVideos, getVideoInfo } from "../controllers/videoController.js";

router.route("/:id").get(getVideoInfo);
router.route("/").get(getVideos);


export default router;