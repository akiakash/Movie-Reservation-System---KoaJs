import React, { useEffect, useState } from "react";
import NavBar from "../../components/NavBar";
import TopBar from "../../components/TopBar";
import * as S from "../styles";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import axios from "axios";
import { getUser } from "../../Utils/Common";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

function ShowTheaters() {
  const user = getUser();

  const [theatres, setTheatres] = useState([]);
  const getRequest = () => {
    if (user.name === "admin") {
      axios.get(`http://localhost:3000/api/theater`).then((response) => {
        setTheatres(response.data);
      });
    } else {
      axios
        .get(
          `http://localhost:3000/api/theater/MovieAdmin?movie_admin=${user.id}`
        )
        .then((response) => {
          setTheatres(response.data);
        });
    }
  };

  useEffect(() => {
    getRequest();
  }, [theatres]);

  function deleteTheatre(_id) {
    alert("Are you confirm to delete?");
    fetch(`http://localhost:3000/api/theater/${_id}`, {
      method: "DELETE",
    }).then((response) => {
      response.json();
      alert("Theatre Successfully Deleted...!");
    });
  }

  function editTheatre(_id) {
    console.log("Theatre" + _id);
    window.sessionStorage.setItem("TheatreID", _id);
    window.location = "/EditTheatre";
  }

  return (
    <S.Container>
      <NavBar />
      <S.Main>
        <header>
          <TopBar />
        </header>
        {theatres.map((item) => (
          <Card
            style={{
              marginTop: "30px",
              paddingTop: "20px",
              paddingBottom: "20px",
              paddingLeft: "20px",
              paddingRight: "20px",
              marginRight: "20px",
              marginLeft: "20px",
            }}
          >
            <li>Theatre Name - {item.name}</li>
            <li>Location - {item.location}</li>
            <li>Contact Number - {item.contact_number}</li>
            {/* <li>Number Of Seats - {item.show_time.show_time}</li> */}

            <center>
              <Button
                style={{ width: "9%" }}
                onClick={() => editTheatre(item._id)}
              >
                Edit
              </Button>
              <Button
                style={{ width: "9%", marginLeft: "20px" }}
                onClick={() => deleteTheatre(item._id)}
              >
                Delete
              </Button>
            </center>
          </Card>
        ))}
      </S.Main>
    </S.Container>
  );
}

export default ShowTheaters;
