import React, { useState } from "react";
import Container from "react-bootstrap/esm/Container";
import NavBar from "../Layout/NavBar";
import Card from "react-bootstrap/Card";
import StripeCheckout from "react-stripe-checkout";
import QRCode from "qrcode";

function TicketCard() {
  const cardItems = JSON.parse(localStorage.getItem("card"));
  // let new01 = cardItems.splice(4);
  // console.log(new01);

  let totalPrice = 0;

  cardItems.map((item) => (totalPrice = totalPrice + item.price));

  const [src, setSrc] = useState("");

  const handleToken = (token) => {
    fetch("http://localhost:3000/api/payment/donate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token, totalPrice }),
    })
      .then((res) => res.json())
      .then((_) => {
        window.alert("Transaction Successful.");
      })
      .catch((_) => window.alert("Transaction Failed."));
  };

  const aappp = "180000";

  // const setQR = () => {
  QRCode.toDataURL(aappp).then((data) => {
    setSrc(data);
  });
  // };

  return (
    <div>
      <NavBar />
      <Container>
        <h2
          style={{
            fontFamily: "sans-serif",
            marginTop: 20,
            marginBottom: "20",
          }}
        >
          All Tickets Bookings
        </h2>
        {src ? <img src={src} /> : null}
        <div>
          {cardItems
            ? cardItems.map((item) => (
                <Card style={{ margin: 10 }}>
                  <Card.Body>
                    <div>
                      <div style={{ float: "left" }}>
                        <img
                          src={item.movieImage}
                          alt="Image"
                          width={"150px"}
                          height={"200px"}
                          style={{ borderRadius: 20 }}
                        ></img>
                      </div>
                      <div style={{ float: "left" }}>
                        <h3
                          style={{
                            margin: 10,
                            fontFamily: "sans-serif",
                          }}
                        >
                          {item.movie}
                        </h3>
                        <h6
                          style={{
                            margin: 10,
                            fontFamily: "sans-serif",
                          }}
                        >
                          {item.theater}
                        </h6>
                        <h6
                          style={{
                            margin: 10,
                            fontFamily: "sans-serif",
                          }}
                        >
                          Show : {item.show.show_data} - {item.show.show_time}
                        </h6>
                        <h6
                          style={{
                            margin: 10,
                            fontFamily: "sans-serif",
                          }}
                        >
                          No of Seats - {item.number_of_seats}
                        </h6>
                        <h6
                          style={{
                            margin: 10,
                            fontFamily: "sans-serif",
                          }}
                        >
                          Total Price - {item.price}
                        </h6>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              ))
            : "Empty Card...!"}
          <center>
            <div
              style={{
                fontSize: 35,
                fontFamily: "sans-serif",
                fontWeight: "500",
              }}
            >
              Total Bill - {totalPrice}
            </div>
            <StripeCheckout
              name="Scope Cinemas"
              description="Have fun with your movie."
              image="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/512px-Circle-icons-profile.svg.png"
              ComponentClass="div"
              panelLabel="Give Money"
              stripeKey={process.env.REACT_APP_STRIPE_KEY || ""}
              token={handleToken}
              currency="lkr"
              amount={totalPrice * 100}
              billingAddress={true}
            ></StripeCheckout>
          </center>
        </div>
      </Container>
    </div>
  );
}

export default TicketCard;
