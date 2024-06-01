import express from "express";
import ArtistModel from "../Models/artist.model.js";
export const ArtistController = express.Router();

ArtistController.get("/artists", async (req, res) => {
  const data = await ArtistModel.getAllArtists();
  res.status(200).send(data);
});

ArtistController.get("/artists/:name", async (req, res) => {
  const { name } = req.params;
  const data = await ArtistModel.getArtistByName(name);
  res.status(200).send(data);
});

ArtistController.post("/artists", async (req, res) => {
  const data = await ArtistModel.createArtist(req.body);
  res.status(201).send(data);
});

ArtistController.put("/artists/", async (req, res) => {
  const data = await ArtistModel.updateArtist(req.body);
  res.status(200).send(data);
});

ArtistController.delete("/artists", async (req, res) => {
  const data = await ArtistModel.deleteArtist(req.body);
  console.log("Artist Deleted");
  res.status(200).send(data);
});
