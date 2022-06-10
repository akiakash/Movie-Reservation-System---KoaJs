import React, { useEffect, useState } from "react";
import NavBar from "../../components/NavBar";
import TopBar from "../../components/TopBar";
import * as S from "../styles";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Select from "react-select";
import axios from "axios";

// const options = [
//   { value: "2D", label: "2D" },
//   { value: "3D", label: "3D" },
//   { value: "4D", label: "4D" },
//   { value: "5D", label: "5D" },
//   { value: "6D", label: "6D" },
//   { value: "7D", label: "7D" },
//   { value: "8D", label: "8D" },
//   { value: "9D", label: "9D" },
// ];

function EditTheatre() {
  //   const [apicast, setApiCast] = useState([]);
  //   useEffect(() => {
  //     axios.get(`http://localhost:3000/api/cast`).then((res) => {
  //       setApiCast(res.data);
  //     });
  //   });

  const [name, setName] = useState([]);
  const [location, setLocation] = useState([]);
  const [numberr, setNumberr] = useState([]);
  const [theatre, setTheatre] = useState([]);
  // const [runtime, setRuntime] = useState([]);

  const id = window.sessionStorage.getItem("TheatreID");

  useEffect(() => {
    axios.get(`http://localhost:3000/api/theater/${id}`).then((response) => {
      console.log(response.data);
      setName(response.data.name);
      setLocation(response.data.location);
      setNumberr(response.data.contact_number);
      // setRuntime(response.data.runtime);
      // setImage(response.data.image);
      // setPromo(response.data.promo);
      //   setMovietype(response.data.movie_type\        //   setCast(response.data.cast.cast);
      setTheatre(response.data);
      console.log(response.data);
    });
  }, []);

  function Edit() {
    axios
      .patch(`http://localhost:3000/api/theater/${id}`, {
        name: name,
        location: location,
        contact_number: numberr,
      })
      .then((response) => {
        // setLoading(false);
        // window.location.reload();
      })
      .catch((error) => {
        // setLoading(false);
        alert("Sorry, Something Error...");
      });
  }

  return (
    // <div>akash</div>
    <S.Container>
      <NavBar />
      <S.Main>
        <header>
          <TopBar />
        </header>
        {/* <Efficiency /> */}
        <div style={{ margin: 20 }}>
          <div
            style={{
              fontSize: 25,
              fontWidth: 700,
              paddingLeft: 90,
              display: "inline-block",
            }}
          >
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
            <a href="/showtheatres">
              <Button> Done </Button>
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
                  defaultValue={theatre.name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Location</Form.Label>
                <Form.Control
                  type="text"
                  defaultValue={theatre.location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Contact Number</Form.Label>
                <Form.Control
                  type="text"
                  defaultValue={theatre.contact_number}
                  onChange={(e) => setNumberr(e.target.value)}
                />
              </Form.Group>

              {/* <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Number of Seats</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Number of Seats"
                  onChange={(e) => setNumberOfSeats(e.target.value)}
                />
              </Form.Group> */}

              {/* <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Price</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Price"
                  onChange={(e) => setPrice(e.target.value)}
                />
              </Form.Group> */}

              {/* <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Shows</Form.Label>
                <Select isMulti options={show} onChange={DblHandle} />
                {diaplayvalue}
              </Form.Group> */}

              <Button variant="primary" type="submit" onClick={Edit}>
                Submit
              </Button>
            </div>
          </div>
        </div>
      </S.Main>
    </S.Container>
  );
}

export default EditTheatre;
