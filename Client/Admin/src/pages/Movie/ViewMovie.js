import React, { useEffect, useState } from "react";
import NavBar from "../../components/NavBar";
import TopBar from "../../components/TopBar";
import * as S from "../styles";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Select from "react-select";
import axios from "axios";
import Table from "react-bootstrap/Table";
import { getUser } from "../../Utils/Common";

import Card from "react-bootstrap/Card";
const options = [
  { value: "2D", label: "2D" },
  { value: "3D", label: "3D" },
  { value: "4D", label: "4D" },
  { value: "5D", label: "5D" },
  { value: "6D", label: "6D" },
  { value: "7D", label: "7D" },
  { value: "8D", label: "8D" },
  { value: "9D", label: "9D" },
];

function back() {
  window.location = "/Movie";
}

function editMovie(_id) {
  console.log("Movie" + _id);
  window.sessionStorage.setItem("MovieID", _id);
  window.location = "/EditMovie";
}

function deleteMovie(_id) {
  alert("Are you confirm to delete?");
  fetch(`http://localhost:3000/api/movie/${_id}`, {
    method: "DELETE",
  }).then((response) => {
    response.json();
    alert("Movie Successfully Deleted...!");
  });
}

const user = getUser();

function ViewMovies() {
  const [movies, setMovies] = useState([]);
  const getRequest = () => {
    if (user.name === "admin") {
      axios.get(`http://localhost:3000/api/movie`).then((response) => {
        setMovies(response.data);
      });
    } else {
      axios
        .get(
          `http://localhost:3000/api/movie/MovieAdmin?movie_admin=${user.id}`
        )
        .then((response) => {
          setMovies(response.data);
        });
    }
  };

  useEffect(() => {
    getRequest();
  }, [movies]);

  return (
    <S.Container>
      <NavBar />
      <S.Main>
        <header>
          <TopBar />
        </header>
        {/* <Efficiency /> */}
        <Button
          style={{ marginLeft: "90%", marginTop: "20px", width: "8%" }}
          onClick={back}
        >
          Back
        </Button>
        {movies.map((item) => (
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
            <li>Original Title - {item.original_title}</li>
            <li>Overview - {item.overview}</li>
            <li>Release Date - {item.release_date}</li>
            <li>Run Time - {item.runtime}</li>
            <li>Image - {item.image}</li>
            <li>Promo Link - {item.promo}</li>
            <li>Movie Type - {item.movie_type.movie_type}</li>
            <li>IMDB Rating - {item.imdbRating}</li>
            <li>Cast - {item.cast.name}</li>
            <center>
              <Button
                style={{ width: "9%" }}
                onClick={() => editMovie(item._id)}
              >
                Edit
              </Button>
              <Button
                style={{ width: "9%", marginLeft: "20px" }}
                onClick={() => deleteMovie(item._id)}
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

export default ViewMovies;
