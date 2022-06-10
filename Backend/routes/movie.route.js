const express = require("express");
const router = express.Router();
const Movie = require("../model/movie.model");

//get All Movies
router.get("/", async (req, res) => {
  try {
    const movie = await Movie.find()
      .populate("theaters")
      .populate("cast")
      .populate("genre")
      .populate("language");
    res.status(200).json(movie);
  } catch (err) {
    res.json({ message: err });
  }
});

//get All Movies By Movie Admin
router.get("/MovieAdmin", async (req, res) => {
  try {
    const movie = await Movie.find({ movie_admin: req.query.movie_admin })
      .populate("theaters")
      .populate("cast")
      .populate("genre")
      .populate("language");
    res.status(200).json(movie);
  } catch (err) {
    res.json({ message: err });
  }
});

//Create new movie
router.post("/", async (req, res) => {
  const movie = await new Movie(req.body);

  try {
    const savedMovie = await movie.save();
    res.status(200).json(savedMovie);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
});

//Get Movie By ID
router.get("/:movieId", async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.movieId)
      .find()
      .populate("theaters")
      .populate("cast")
      .populate("genre")
      .populate("language");
    res.json(movie);
  } catch (err) {
    res.json({ message: err });
  }
});

//Delete Movie by Movie ID
router.delete("/:movieId", async (req, res) => {
  try {
    const removeMovie = await Movie.remove({
      _id: req.params.movieId,
    });
    res.json(removeMovie);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
