import React, { useState } from "react";
import NavBar from "../../components/NavBar";
import TopBar from "../../components/TopBar";
import * as S from "../styles";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

function Others() {
  const [language, setLanguage] = useState("");
  const submitlanguage = () => {
    axios
      .post("http://localhost:3000/api/language", {
        language_type: language,
      })
      .then((res) => {
        console.log(res);
        alert("Language has been successfully added...!");
        window.location.reload(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const [genre, setGenre] = useState("");
  const submitgenre = () => {
    axios
      .post("http://localhost:3000/api/genre", {
        genre_type: genre,
      })
      .then((res) => {
        console.log(res);
        alert("Genre has been successfully added...!");
        window.location.reload(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const [showtime, setShowTime] = useState("");
  const submitshowtime = () => {
    axios
      .post("http://localhost:3000/api/show_time", {
        show_time: showtime,
      })
      .then((res) => {
        console.log(res);
        alert("Show time has been successfully added...!");
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
          <div style={{ fontSize: 25, fontWidth: 700, paddingLeft: 90 }}>
            Language
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
                <Form.Label>Language</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Language"
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                />
              </Form.Group>

              <Button
                variant="primary"
                type="submit"
                onClick={() => submitlanguage()}
              >
                Submit
              </Button>
            </div>
          </div>
        </div>
        <div style={{ margin: "40px 20px" }}>
          <div style={{ fontSize: 25, fontWidth: 700, paddingLeft: 90 }}>
            Genre
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
                <Form.Label>Genre</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Genre"
                  value={genre}
                  onChange={(e) => setGenre(e.target.value)}
                />
              </Form.Group>

              <Button
                variant="primary"
                type="submit"
                onClick={() => submitgenre()}
              >
                Submit
              </Button>
            </div>
          </div>
        </div>
        <div style={{ margin: "40px 20px" }}>
          <div style={{ fontSize: 25, fontWidth: 700, paddingLeft: 90 }}>
            Show Time
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
                <Form.Label>Show Time</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Show Time"
                  value={showtime}
                  onChange={(e) => setShowTime(e.target.value)}
                />
                <Form.Text className="text-muted">
                  (Month Date - Minute:Secound (AM/PM))
                </Form.Text>
              </Form.Group>

              <Button
                variant="primary"
                type="submit"
                onClick={() => submitshowtime()}
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

export default Others;
