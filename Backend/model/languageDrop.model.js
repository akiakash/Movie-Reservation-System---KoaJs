const mongoose = require("mongoose");

const CastSchema = new mongoose.Schema(
  {
    value: { type: String, required: true, trim: true },
    label: { type: String, required: true, trim: true },
  },
  { versionKey: false }
);

module.exports = mongoose.model("LanguageDrop", CastSchema);
