const mongoose = require("mongoose");

const CastSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    type: { type: String, required: true, trim: true },
    image: { type: String },
    cloudinary_id: { type: String },
  },
  { versionKey: false }
);

module.exports = mongoose.model("cast", CastSchema);
