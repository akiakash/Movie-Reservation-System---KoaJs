import React, { useEffect, useState } from "react";
import NavBar from "../../components/NavBar";
import TopBar from "../../components/TopBar";
import * as S from "../styles";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Select from "react-select";
import axios from "axios";
import { getUser } from "../../Utils/Common";

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

function Movie() {
  const user = getUser();

  const [apicast, setApiCast] = useState([]);
  const [apitheater, setApiTheater] = useState([]);
  const [apigenre, setApiGenre] = useState([]);
  const [apilanguage, setApiLanguage] = useState([]);

  // useEffect(() => {
  // genreDropdown();
  // });

  const genreDropdown = () => {
    axios
      .get(`http://localhost:3000/api/genre/Dropdown`)
      .then((res) => {
        setApiGenre(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const languageDropdown = () => {
    axios
      .get(`http://localhost:3000/api/language/Dropdown`)
      .then((res) => {
        setApiLanguage(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const castDropDown = () => {
    axios
      .get(`http://localhost:3000/api/cast/DropDown`)
      .then((res) => {
        setApiCast(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const theaterDropDown = () => {
    axios
      .get(`http://localhost:3000/api/theater/DropDown`)
      .then((res) => {
        setApiTheater(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const Onrefresh = () => {
    genreDropdown();
    languageDropdown();
    castDropDown();
    theaterDropDown();
  };

  const [original_title, setoriginal_title] = useState("");
  const [overview, setoverview] = useState("");
  const [release_date, setrelease_date] = useState("");
  const [runtime, setruntime] = useState("");
  const [image, setimage] = useState("");
  const [promo, setpromo] = useState("");
  const [imdbRating, setimdbRating] = useState("");

  const HandleMovieType = (e) => {
    const ObjMovieType = [];
    e.map((item) => {
      const aaaaa = item.value;
      ObjMovieType.push({ show_time: aaaaa });
    });
    console.log(ObjMovieType);
    window.sessionStorage.setItem("ObjMovieType", JSON.stringify(ObjMovieType));
  };

  const HandleCast = (e) => {
    const ObjCast = [];
    e.map((item) => {
      const aaaaa = item.value;
      ObjCast.push({ _id: aaaaa });
    });
    console.log(ObjCast);
    window.sessionStorage.setItem("ObjCast", JSON.stringify(ObjCast));
  };

  const HandleTheater = (e) => {
    const ObjTheater = [];
    e.map((item) => {
      const aaaaa = item.value;
      ObjTheater.push({ _id: aaaaa });
    });
    console.log(ObjTheater);
    window.sessionStorage.setItem("ObjTheater", JSON.stringify(ObjTheater));
  };

  const HandleGenre = (e) => {
    const ObjGenre = [];
    e.map((item) => {
      const aaaaa = item.value;
      ObjGenre.push({ _id: aaaaa });
    });
    console.log(ObjGenre);
    window.sessionStorage.setItem("ObjGenre", JSON.stringify(ObjGenre));
  };

  const HandleLanguage = (e) => {
    const ObjLanguage = [];
    e.map((item) => {
      const aaaaa = item.value;
      ObjLanguage.push({ _id: aaaaa });
    });
    console.log(ObjLanguage);
    window.sessionStorage.setItem("ObjLanguage", JSON.stringify(ObjLanguage));
  };

  const OnSubmit = () => {
    const movie_type = JSON.parse(sessionStorage.getItem("ObjMovieType"));
    const cast = JSON.parse(sessionStorage.getItem("ObjCast"));
    const theaters = JSON.parse(sessionStorage.getItem("ObjTheater"));
    const genre = JSON.parse(sessionStorage.getItem("ObjGenre"));
    const language = JSON.parse(sessionStorage.getItem("ObjLanguage"));

    const body = {
      movie_admin: user.id,
      original_title: original_title,
      overview: overview,
      release_date: release_date,
      runtime: parseInt(runtime),
      image: image,
      promo: promo,
      movie_type: movie_type,
      imdbRating: imdbRating,
      cast: cast,
      theaters: theaters,
      genre: genre,
      language: language,
    };

    console.log("body :", body);

    axios
      .post("http://localhost:3000/api/movie", body)
      .then((res) => {
        console.log(res.data);
        window.location.reload(false);
      })
      .catch((err) => {
        console.log(err);
      });
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
          <div
            style={{
              fontSize: 25,
              fontWidth: 700,
              paddingLeft: 90,
              display: "inline-block",
            }}
            onClick={() => Onrefresh()}
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
              View Movies
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
            <div>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Original Title</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Original Title"
                  value={original_title}
                  onChange={(e) => setoriginal_title(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>overview</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="overview"
                  value={overview}
                  onChange={(e) => setoverview(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Release Date</Form.Label>
                <Form.Control
                  type="date"
                  placeholder="Release Date"
                  value={release_date}
                  onChange={(e) => setrelease_date(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Run Time</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Run Time"
                  value={runtime}
                  onChange={(e) => setruntime(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Image Link</Form.Label>
                <Form.Control
                  type="text"
                  name="image"
                  value={image}
                  onChange={(e) => setimage(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Promo Link</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Promo Link"
                  value={promo}
                  onChange={(e) => setpromo(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Movie Type</Form.Label>
                <Select isMulti options={options} onChange={HandleMovieType} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>IMDB Rating</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="IMDB Rating"
                  value={imdbRating}
                  onChange={(e) => setimdbRating(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Cast</Form.Label>
                <Select isMulti options={apicast} onChange={HandleCast} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Theater</Form.Label>
                <Select isMulti options={apitheater} onChange={HandleTheater} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Genre</Form.Label>
                <Select isMulti options={apigenre} onChange={HandleGenre} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Language</Form.Label>
                <Select
                  isMulti
                  options={apilanguage}
                  onChange={HandleLanguage}
                />
              </Form.Group>

              <Button
                variant="primary"
                type="submit"
                onClick={() => OnSubmit()}
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

export default Movie;
