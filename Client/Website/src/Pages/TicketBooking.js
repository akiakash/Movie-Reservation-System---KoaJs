import React, { useState } from "react";
import axios from "axios";
import NavBar from "../Layout/NavBar";
import { getUser } from "../Utils/Common";
import { useHistory } from "react-router-dom";
import QRCode from "qrcode";
import { useCart } from "react-use-cart";

let todatlprice01 = 0;

function TicketBooking(props) {
  const showtime = JSON.parse(sessionStorage.getItem("showtime"));
  const movie = JSON.parse(sessionStorage.getItem("singlemovie"));
  const theater = JSON.parse(sessionStorage.getItem("theater"));
  console.log("singleMovie : ", showtime);
  let theatrtname = theater[0].name;
  console.log("theater : ", theater[0].name);

  const user = getUser();

  const [contactnumber, setcontactnumber] = useState("");
  const [number_of_seats, setnumber_of_seats] = useState("");
  const [price, setprice] = useState("");

  const payment = (val) => {
    setnumber_of_seats(val);
    todatlprice01 = val * 1000;
  };
  const [src, setSrc] = useState("");

  // const handleToken = (token) => {
  //   const body = {
  //     userID: user.id,
  //     userName: user.name,
  //     email: user.email,
  //     contactnumber: contactnumber,
  //     number_of_seats: number_of_seats,
  //     price: todatlprice01,
  //   };

  //   const QRtext = [
  //     user.id,
  //     user.name,
  //     user.email,
  //     contactnumber,
  //     number_of_seats,
  //     todatlprice01,
  //   ];

  //   if (contactnumber === "" || number_of_seats === "") {
  //     alert("Please fill all required fields");
  //   } else {
  //     fetch("http://localhost:3000/api/payment/donate", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ token, todatlprice01 }),
  //     })
  //       .then((res) => res.json())
  //       .then((_) => {
  //         window.alert("Transaction Successful.");
  //         bookingpost();
  //         setQR();
  //       })
  //       .catch((_) => window.alert("Transaction Failed."));
  //   }

  //   const setQR = () => {
  //     QRCode.toDataURL(body).then((data) => {
  //       setSrc(data);
  //     });
  //   };

  //   const bookingpost = () => {
  //     axios
  //       .post("http://localhost:3000/api/ticketBooking", body)
  //       .then((res) => {
  //         console.log(res.data);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   };
  // };

  const history = useHistory();
  const addtoCard = () => {
    if (contactnumber === "" || number_of_seats === "") {
      alert("Please fill all required fields");
    } else {
      const data = {
        movie: movie.original_title,
        theater: theatrtname,
        movieImage: movie.image,
        userID: user.id,
        userName: user.name,
        email: user.email,
        contactnumber: contactnumber,
        number_of_seats: number_of_seats,
        price: todatlprice01,
        show: showtime,
      };

      if (!localStorage.getItem("card")) {
        localStorage.setItem("card", "[]");
      }

      let old_card = JSON.parse(localStorage.getItem("card"));
      old_card.push(data);

      localStorage.setItem("card", JSON.stringify(old_card));

      history.push("./");
    }
  };

  return (
    <div>
      <NavBar />

      <section style={{ padding: "5em 0" }}>
        <div
          style={{
            width: "100%",
            paddingright: "15px",
            paddingleft: "15px",
            marginright: "auto",
            marginleft: "auto",
          }}
        >
          <div
            style={{
              display: "flex",
              flexwrap: "wrap",
              marginright: "-15px",
              marginleft: "15px",
              justifyContent: "center",
            }}
          >
            <center>
              <div className="col-md-12 col-lg-11">
                <div className="wrap d-md-flex">
                  <div>
                    <img src="./Images/beast1.jpg" className="img" />
                  </div>
                  <div
                    className="login-wrap p-4 p-md-5"
                    style={{ width: "600px", marginTop: "80px" }}
                  >
                    {src ? <img src={src} /> : null}
                    <div className="d-flex">
                      <div>
                        <h3 className="mb-4">Book Now</h3>
                      </div>
                    </div>
                    <form action="#" className="signin-form">
                      <div className="form-group mb-3">
                        <label className="label d-flex" htmlFor="name">
                          userName
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Username"
                          value={user.name}
                        />
                      </div>
                      <div className="form-group mb-3">
                        <label className="label d-flex" htmlFor="name">
                          Email
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Email"
                          value={user.email}
                        />
                      </div>
                      <div className="form-group mb-3">
                        <label className="label d-flex" htmlFor="password">
                          Contact Number
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Contact Number"
                          defaultValue={contactnumber}
                          onChange={(e) => setcontactnumber(e.target.value)}
                        />
                      </div>
                      <div className="form-group mb-3">
                        <label
                          className="label d-flex"
                          htmlFor="confirmpassword"
                        >
                          Number of Seats
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Number of Seats"
                          defaultValue={number_of_seats}
                          onChange={(e) => payment(e.target.value)}
                        />
                      </div>
                      <div className="form-group mb-3">
                        <label
                          className="label d-flex"
                          htmlFor="confirmpassword"
                        >
                          Total Price
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Total Price"
                          value={todatlprice01}
                        />
                      </div>
                      <div style={{ marginBottom: "1rem", marginTop: "2rem" }}>
                        <button
                          type="submit"
                          className="form-control btn btn-primary rounded submit px-3"
                          style={{ backgroundColor: "#8b0000" }}
                          onClick={() => addtoCard()}
                        >
                          Add to Card
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </center>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TicketBooking;
