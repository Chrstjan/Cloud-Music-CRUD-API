import express from "express";
import songModel from "../Models/song.model.js";
export const SongController = express.Router();

SongController.get("/tracks", async (req, res) => {
  const data = await songModel.getAllTracks();
  res.status(200).send(data);
});

SongController.get("/tracks/:name", async (req, res) => {
  const { name } = req.params;
  const data = await songModel.getTrackByName(name);
  res.status(200).send(data);
});

SongController.post("/tracks", async (req, res) => {
  const data = await songModel.createTrack(req.body);
  res.status(201).send(data);
});

SongController.put("/tracks/", async (req, res) => {
  const data = await songModel.updateTrack(req.body);
  res.status(200).send(data);
});

SongController.delete("/tracks", async (req, res) => {
  const data = await songModel.deleteTrack(req.body);
  console.log("Track deleted");
  res.status(200).send(data);
});
