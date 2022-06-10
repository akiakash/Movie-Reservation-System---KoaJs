const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

dotenv.config();
app.use(bodyParser.json());
app.use(cors());

//Middleware
app.use(express.json());

//Inport Routes
const authRoute = require("./routes/auth");
const MovieAdminAuthRoute = require("./routes/MovieAdminAuth");
const castRoute = require("./routes/cast.route");
const movieRoute = require("./routes/movie.route");
const genreRoute = require("./routes/genre.route");
const languageRoute = require("./routes/language.route");
const showTimeRoute = require("./routes/show_time.route");
const theaterRoute = require("./routes/theater.route");
const sendmessageRoute = require("./routes/send_message.route");
const ticketBookingRoute = require("./routes/ticketbooking.route");
const paymentRoute = require("./routes/payment.route");

//Route Middlewares
app.use("/api/user", authRoute);
app.use("/api/movie_admin", MovieAdminAuthRoute);
app.use("/api/cast", castRoute);
app.use("/api/movie", movieRoute);
app.use("/api/genre", genreRoute);
app.use("/api/language", languageRoute);
app.use("/api/show_time", showTimeRoute);
app.use("/api/theater", theaterRoute);
app.use("/api/send-message", sendmessageRoute);
app.use("/api/ticketBooking", ticketBookingRoute);
app.use("/api/payment", paymentRoute);

//Connect to DB
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true }, () =>
  console.log("Connected to DB!")
);

app.listen(3000, () => console.log("Server Up and running"));
