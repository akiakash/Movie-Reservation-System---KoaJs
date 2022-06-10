const express = require("express");
const router = express.Router();
const TicketBooking = require("../model/ticketbooking.model");

router.get("/", async (req, res) => {
  try {
    const ticketBooking = await TicketBooking.find();
    res.status(200).json(ticketBooking);
  } catch (err) {
    res.json({ message: err });
  }
});

router.post("/", async (req, res) => {
  const ticketBooking = await new TicketBooking(req.body);
  try {
    const savedticketBooking = await ticketBooking.save();
    res.status(200).json(savedticketBooking);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
});

//get All Movies By Movie Admin
router.get("/UserBookings", async (req, res) => {
  try {
    const ticketBooking = await TicketBooking.find({
      userID: req.query.userID,
    });
    res.status(200).json(ticketBooking);
  } catch (err) {
    res.json({ message: err });
  }
});

router.delete("/:savedticketBookingId", async (req, res) => {
  try {
    const removeticketBooking = await TicketBooking.remove({
      _id: req.params.savedticketBookingId,
    });
    res.json(removeticketBooking);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
