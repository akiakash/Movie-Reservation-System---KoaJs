const mongoose = require("mongoose");

const CastSchema = new mongoose.Schema(
  {
    label: { type: String, required: true, trim: true },
    value: { type: String, required: true, trim: true },
  },
  { versionKey: false }
);

module.exports = mongoose.model("TheaterDrop", CastSchema);
