const express = require("express");
const router = express.Router();
const Cast = require("../model/cast.model");
const CastDrop = require("../model/castDrop.model");
const cloudinary = require("../utils/cloudinary");
const upload = require("../utils/multer");

router.get("/", async (req, res) => {
  try {
    const cast = await Cast.find();
    res.json(cast);
  } catch (err) {
    res.json({ message: err });
  }
});

router.get("/DropDown", async (req, res) => {
  try {
    const cast = await CastDrop.find();
    res.json(cast);
  } catch (err) {
    res.json({ message: err });
  }
});

router.post("/", upload.single("image"), async (req, res) => {
  // Upload image to cloudinary
  const result = await cloudinary.uploader.upload(req.file.path);

  const cast = new Cast({
    name: req.body.name,
    description: req.body.description,
    type: req.body.type,
    image: result.secure_url,
    cloudinary_id: result.public_id,
  });

  try {
    const savedCast = await cast.save();
    const castDrop = new CastDrop({
      label: savedCast.name,
      value: savedCast._id,
    });
    const savedCastDrop = await castDrop.save();
    res.json(savedCastDrop);
    res.json(savedCast);
  } catch (err) {
    res.json({ message: err });
  }
});

router.delete("/:castId", async (req, res) => {
  try {
    const removeCast = await Cast.remove({
      _id: req.params.castId,
    });
    res.json(removeCast);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
