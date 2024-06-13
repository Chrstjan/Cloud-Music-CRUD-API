import express from "express";
import dotenv from "dotenv";

import { ArtistController } from "./Controllers/artist.controller.js";
import { SongController } from "./Controllers/song.controller.js";
import { AlbumController } from "./Controllers/album.controller.js";

const app = express();

app.use(express.urlencoded({ extended: true }));

dotenv.config();

const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Welcome to the Cloud Music CRUD API");
});

app.use(ArtistController, SongController, AlbumController);

app.use((req, res, next) => {
  res.status(404).send("The site was not found");
  res.header("Access-Control-Allow-Origin", "*"); // Adjust this if you want to restrict to specific origins
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.listen(port, () => {
  console.log(`Webserver is running on port: http://localhost:${port}`);
});
