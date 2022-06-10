const express = require("express");
const router = express.Router();
const Vonage = require("@vonage/server-sdk");

const vonage = new Vonage(
  {
    apiKey: "878bd97b",
    apiSecret: "17d4e80432b74b18",
  },
  { debug: true }
);

router.post("/", async (req, res) => {
  // res.send("Send Message API");

  const to = req.body.to;
  const text = req.body.text;
  const from = "12034848525";

  vonage.message.sendSms(
    from,
    to,
    text,
    { type: "unicode" },
    (err, responseData) => {
      if (err) {
        console.log(err);
      } else {
        if (responseData.messages[0]["status"] === "0") {
          console.log("Message sent successfully.");
        } else {
          console.log(
            `Message failed with error: ${responseData.messages[0]["error-text"]}`
          );
        }
      }
    }
  );
});

module.exports = router;
