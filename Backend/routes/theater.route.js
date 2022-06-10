const express = require("express");
const router = express.Router();
const Theater = require("../model/theater.model");
const TheaterDrop = require("../model/theaterDrop.model");

router.get("/", async (req, res) => {
  try {
    const theater = await Theater.find();
    res.status(200).json(theater);
  } catch (err) {
    res.json({ message: err });
  }
});

//get All Theater By Movie Admin
router.get("/MovieAdmin", async (req, res) => {
  try {
    const theater = await Theater.find({ movie_admin: req.query.movie_admin });
    res.status(200).json(theater);
  } catch (err) {
    res.json({ message: err });
  }
});

router.get("/DropDown", async (req, res) => {
  try {
    const theater = await TheaterDrop.find();
    res.status(200).json(theater);
  } catch (err) {
    res.json({ message: err });
  }
});

router.post("/", async (req, res) => {
  const theater = await new Theater(req.body);

  try {
    const savedTheater = await theater.save();
    const theaterDrop = new TheaterDrop({
      label: savedTheater.name,
      value: savedTheater._id,
    });
    const savedtheaterDrop = await theaterDrop.save();
    res.status(200).json(savedTheater).json(savedtheaterDrop);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
});

router.delete("/:theaterId", async (req, res) => {
  try {
    const removetheater = await Theater.remove({
      _id: req.params.theaterId,
    });
    res.json(removetheater);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
