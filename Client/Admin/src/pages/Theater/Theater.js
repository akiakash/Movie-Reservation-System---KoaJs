import React, { useEffect, useState } from "react";
import NavBar from "../../components/NavBar";
import TopBar from "../../components/TopBar";
import * as S from "../styles";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import Select from "react-select";
import { getUser } from "../../Utils/Common";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const user = getUser();

function Theater() {
  const [show, setShow] = useState();
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/show_time")
      .then((res) => {
        setShow(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  const [name, setName] = useState();
  const [location, setLocation] = useState();
  const [contactnumber, setContactNumber] = useState();
  const [numberofseats, setNumberOfSeats] = useState();
  const [price, setPrice] = useState();

  const handleSubmit = () => {
    const sess = JSON.parse(sessionStorage.getItem("shows"));

    const body = {
      movie_admin: user.id,
      name: name,
      location: location,
      contact_number: contactnumber,
      number_of_seats: parseInt(numberofseats),
      price: parseInt(price),
      show: sess,
    };

    console.log("body : ", body);

    axios
      .post("http://localhost:3000/api/theater", body)
      .then((res) => {
        console.log(res);
        window.location.reload(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const Obj = [];
  const DblHandle = (e) => {
    e.map((item) => {
      const aaaaa = item.label;
      Obj.push({ show_time: aaaaa });
    });
    console.log(Obj);
    window.sessionStorage.setItem("shows", JSON.stringify(Obj));
  };

  return (
    <S.Container>
      <NavBar />
      <S.Main>
        <header>
          <TopBar />
        </header>
        {/* <Efficiency /> */}
        <div style={{ margin: 20 }}>
          <div style={{ fontSize: 25, fontWidth: 700, paddingLeft: 90 }}>
            Theater
          </div>
          <div
            style={{
              fontSize: 25,
              fontWidth: 700,
              paddingLeft: 90,
              marginLeft: "55%",
              display: "inline-block",
            }}
          >
            <a href="/ShowTheaters">
              <Button> Show Theatres </Button>
            </a>
          </div>
          <div
            style={{
              maxWidth: "100%",
              marginLeft: 100,
              marginRight: 100,
              marginTop: 30,
            }}
          >
            <div>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Theater Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Theater Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Location</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Contact Number</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Contact Number"
                  value={contactnumber}
                  onChange={(e) => setContactNumber(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Number of Seats</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Number of Seats"
                  value={numberofseats}
                  onChange={(e) => setNumberOfSeats(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Price</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Shows</Form.Label>
                <Select isMulti options={show} onChange={DblHandle} />
              </Form.Group>

              <Button
                variant="primary"
                type="submit"
                onClick={() => handleSubmit()}
              >
                Submit
              </Button>
            </div>
          </div>
        </div>
      </S.Main>
    </S.Container>
  );
}

export default Theater;
