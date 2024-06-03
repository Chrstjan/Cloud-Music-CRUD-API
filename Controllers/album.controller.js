import express from "express";
import AlbumModel from "../Models/album.model.js";
export const AlbumController = express.Router();

AlbumController.get("/albums", async (req, res) => {
  const data = await AlbumModel.getAllAlbums();
  res.status(200).send(data);
});

AlbumController.get("/albums/:name", async (req, res) => {
  const { name } = req.params;
  const data = await AlbumModel.getAlbumByName(name);
  res.status(200).send(data);
});

AlbumController.post("/albums", async (req, res) => {
  const data = await AlbumModel.CreateAlbum(req.body);
  res.status(201).send(data);
});

AlbumController.put("/albums", async (req, res) => {
  const data = await AlbumModel.updateAlbum(req.body);
  res.status(200).send(data);
});

AlbumController.delete("/albums", async (req, res) => {
  const data = await AlbumModel.deleteAlbum(req.body);
  console.log("Album deleted");
  res.status(200).send(data);
});
