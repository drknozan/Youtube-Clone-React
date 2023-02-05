import express from "express";
import { getChannelInfo } from "../controllers/channelController.js";

const router = express.Router();

router.route("/:id").get(getChannelInfo);

export default router;