import React, { useEffect, useState } from "react";
import NavBar from "../../components/NavBar";
import TopBar from "../../components/TopBar";
import * as S from "../styles";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Select from "react-select";
import axios from "axios";

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

function EditMovie() {
  //   const [apicast, setApiCast] = useState([]);
  //   useEffect(() => {
  //     axios.get(`http://localhost:3000/api/cast`).then((res) => {
  //       setApiCast(res.data);
  //     });
  //   });

  const [title, setTitle] = useState([]);
  const [overview, setOverview] = useState([]);
  const [releasedate, setReleasedate] = useState([]);
  const [runtime, setRuntime] = useState([]);
  const [image, setImage] = useState([]);
  const [promo, setPromo] = useState([]);
  const [movietype, setMovietype] = useState([]);
  const [imdbrating, setImdbrating] = useState([]);
  const [cast, setCast] = useState([]);
  const [movie, setMovie] = useState([]);

  const id = window.sessionStorage.getItem("MovieID");

  useEffect(() => {
    axios.get(`http://localhost:3000/api/movie/${id}`).then((response) => {
      console.log(response.data);
      setTitle(response.data.original_title);
      setOverview(response.data.overview);
      setReleasedate(response.data.release_date);
      setRuntime(response.data.runtime);
      setImage(response.data.image);
      setPromo(response.data.promo);
      //   setMovietype(response.data.movie_type.movie_type);
      setImdbrating(response.data.imdbRating);
      //   setCast(response.data.cast.cast);
      setMovie(response.data);
      console.log(response.data);
    });
  }, []);

  function updateMovie() {
    axios
      .patch(`http://localhost:3000/api/movie/${id}`, {
        original_title: title,
        overview: overview,
        release_date: releasedate,
        runtime: runtime,
        image: image,
        promo: promo,
        movie_type: movietype,
        imdbRating: imdbrating,
        cast: cast,
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
            Movie
          </div>
          <a href="/viewmovies">
            <Button
              style={{
                fontSize: 18,
                fontWidth: 700,
                paddingLeft: 10,
                marginLeft: "66%",
                display: "inline-block",
              }}
            >
              Done
            </Button>
          </a>
          <div
            style={{
              maxWidth: "100%",
              marginLeft: 100,
              marginRight: 100,
              marginTop: 30,
            }}
          >
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Original Title</Form.Label>
                <Form.Control
                  type="text"
                  defaultValue={movie.original_title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>overview</Form.Label>
                <Form.Control
                  type="text"
                  defaultValue={movie.overview}
                  onChange={(e) => setOverview(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Release Date</Form.Label>
                <Form.Control
                  type="date"
                  defaultValue={movie.release_date}
                  onChange={(e) => setReleasedate(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Run Time</Form.Label>
                <Form.Control
                  type="number"
                  defaultValue={movie.runtime}
                  onChange={(e) => setRuntime(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Image</Form.Label>
                <Form.Control type="file" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Promo Link</Form.Label>
                <Form.Control
                  type="text"
                  defaultValue={movie.promo}
                  onChange={(e) => setPromo(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Movie Type</Form.Label>
                <Select isMulti options={options} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>IMDB Rating</Form.Label>
                <Form.Control
                  type="number"
                  defaultValue={movie.imdbRating}
                  onChange={(e) => setImdbrating(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Cast</Form.Label>
                <Select isMulti options={options} />
              </Form.Group>

              <Button variant="primary" type="submit" onClick={updateMovie}>
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </S.Main>
    </S.Container>
  );
}

export default EditMovie;
