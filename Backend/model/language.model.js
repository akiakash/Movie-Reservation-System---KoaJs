const mongoose = require("mongoose");

const CastSchema = new mongoose.Schema(
  {
    language_type: { type: String, required: true, trim: true },
  },
  { versionKey: false }
);

module.exports = mongoose.model("Language", CastSchema);
