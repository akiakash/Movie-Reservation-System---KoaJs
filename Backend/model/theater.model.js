const mongoose = require("mongoose");

const CastSchema = new mongoose.Schema(
  {
    movie_admin: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      trim: true,
    },
    name: { type: String, required: true, trim: true },
    location: { type: String, required: true, trim: true },
    contact_number: { type: String, required: true, trim: true },
    number_of_seats: { type: Number, required: true, trim: true },
    price: { type: Number, required: true, trim: true },
    show: [
      {
        show_time: { type: String, trim: true },
      },
    ],
  },
  { versionKey: false }
);

module.exports = mongoose.model("Theater", CastSchema);
