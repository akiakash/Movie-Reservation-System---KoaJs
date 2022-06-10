const mongoose = require("mongoose");

const CastSchema = new mongoose.Schema(
  {
    genre_type: { type: String, required: true, trim: true },
  },
  { versionKey: false }
);

module.exports = mongoose.model("Genre", CastSchema);
