const express = require("express");
const router = express.Router();
const Show_Time = require("../model/show_time.model");

router.get("/", async (req, res) => {
  try {
    const show_time = await Show_Time.find().sort({ show_time: "asc" });
    res.json(show_time);
  } catch (err) {
    res.json({ message: err });
  }
});

router.post("/", async (req, res) => {
  const showTimeExist = await Show_Time.findOne({
    label: req.body.label,
  });
  if (showTimeExist)
    return res.status(400).json({ error_Message: "Show Time already exists" });

  const label = new Show_Time({
    label: req.body.label,
    value: req.body.label,
  });
  try {
    const savedShowTime = await label.save();
    res.json(savedShowTime);
  } catch (err) {
    res.json({ message: err });
  }
});

router.delete("/:showtimeId", async (req, res) => {
  try {
    const romeShowTime = await Show_Time.remove({
      _id: req.params.showtimeId,
    });
    res.json(romeShowTime);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
