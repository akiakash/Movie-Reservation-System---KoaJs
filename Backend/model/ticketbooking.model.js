const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema(
  {
    userID: { type: String, required: true, trim: true },
    userName: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    contactnumber: { type: String, required: true, trim: true },
    number_of_seats: { type: String, required: true, trim: true },
    price: { type: String, required: true, trim: true },
  },
  { versionKey: false }
);

module.exports = mongoose.model("tickectBooking", BookingSchema);
