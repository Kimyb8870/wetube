import express from "express";
import routes from "../routes";
import {
  videos,
  uploadVideo,
  videoDetail,
  deleteVideo,
  editVideo,
} from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get(routes.videos, videos);
videoRouter.get(routes.uploadVideo, uploadVideo);
videoRouter.get(routes.videoDetail, videoDetail);
videoRouter.get(routes.deleteVideo, deleteVideo);
videoRouter.get(routes.editVideo, editVideo);

export default videoRouter;
