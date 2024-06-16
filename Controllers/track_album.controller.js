import express from "express";
import TrackAlbumModel from "../Models/track_album.model.js";
export const TrackAlbumController = express.Router();

TrackAlbumController.get("/album-tracks", async (req, res) => {
  const data = await TrackAlbumModel.getAllTrackAlbumRel();
  res.status(200).send(data);
});
