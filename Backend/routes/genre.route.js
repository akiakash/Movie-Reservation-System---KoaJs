const express = require("express");
const router = express.Router();
const Genre = require("../model/genre.model");
const GenreDrop = require("../model/genreDrop.model");

router.get("/", async (req, res) => {
  try {
    const genre = await Genre.find().sort({ genre_type: "asc" });
    res.json(genre);
  } catch (err) {
    res.json({ message: err });
  }
});

router.get("/Dropdown", async (req, res) => {
  try {
    const genre = await GenreDrop.find().sort({ genre_type: "asc" });
    res.json(genre);
  } catch (err) {
    res.json({ message: err });
  }
});

router.post("/", async (req, res) => {
  const genreExist = await Genre.findOne({ genre_type: req.body.genre_type });
  if (genreExist)
    return res.status(400).json({ error_Message: "Genre already exists" });

  const genre = new Genre({
    genre_type: req.body.genre_type,
  });
  try {
    const savedGenre = await genre.save();
    const genreDrop = new GenreDrop({
      label: savedGenre.genre_type,
      value: savedGenre._id,
    });
    const savedGenreDrop = await genreDrop.save();
    res.json(savedGenre).json(savedGenreDrop);
  } catch (err) {
    res.json({ message: err });
  }
});

router.delete("/:genreId", async (req, res) => {
  try {
    const genreLanguage = await Genre.remove({
      _id: req.params.genreId,
    });
    res.json(genreLanguage);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
