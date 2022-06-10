const mongoose = require("mongoose");

const CastSchema = new mongoose.Schema(
  {
    movie_admin: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      trim: true,
    },
    original_title: { type: String, required: true, trim: true },
    overview: { type: String, required: true, trim: true },
    release_date: { type: Date, required: true, trim: true },
    runtime: { type: Number, required: true, trim: true },
    image: { type: String },
    cloudinary_id: { type: String },
    promo: { type: String, required: true, trim: true },
    movie_type: [{ movie_type: { type: String, trim: true } }],
    imdbRating: { type: String, required: true, trim: true },
    cast: [
      {
        type: mongoose.Schema.Types.ObjectId,
        trim: true,
        ref: "cast",
      },
    ],
    theaters: [
      {
        type: mongoose.Schema.Types.ObjectId,
        trim: true,
        ref: "Theater",
      },
    ],
    genre: [
      {
        type: mongoose.Schema.Types.ObjectId,
        trim: true,
        ref: "Genre",
      },
    ],
    language: [
      {
        type: mongoose.Schema.Types.ObjectId,
        trim: true,
        ref: "Language",
      },
    ],
  },
  { versionKey: false }
);

module.exports = mongoose.model("movie", CastSchema);
