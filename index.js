import express from "express";
import dotenv from "dotenv";

import { ArtistController } from "./Controllers/artist.controller.js";
import { SongController } from "./Controllers/song.controller.js";

const app = express();

app.use(express.urlencoded({ extended: true }));

dotenv.config();

const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Welcome to the Cloud Music CRUD API");
});

app.use(ArtistController, SongController);

app.use((req, res) => {
  res.status(404).send("The site was not found");
});

app.listen(port, () => {
  console.log(`Webserver is running on port: http://localhost:${port}`);
});
