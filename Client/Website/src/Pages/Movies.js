import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/esm/Container";
import AllMovies from "../components/Movies/AllMovies";
import SearchIcon from "@mui/icons-material/Search";
import NavBar from "../Layout/NavBar";
import axios from "axios";
import { useHistory } from "react-router-dom";

function Movies() {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/movie")
      .then((res) => {
        setMovies(res.data);
        // console.log(res.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  const history = useHistory();
  const movetoSinglemovie = (item) => {
    sessionStorage.setItem("singlemovie", JSON.stringify(item));
    history.push("/SingleMovie");
  };

  return (
    <div>
      <NavBar />
      <Container>
        <div>
          <form
            className="example"
            action="/action_page.php"
            style={{
              margin: "auto",
              maxWidth: 400,
              paddingTop: 50,
              paddingBottom: 50,
            }}
          >
            <input
              type="text"
              placeholder="Search.."
              name="search2"
              style={{
                padding: "10px",
                fontSize: "20px",
                border: "0px solid",
                float: "left",
                width: "85%",
                height: "60px",
                borderTopLeftRadius: 5,
                borderBottomLeftRadius: 5,
                backgroundColor: "#f5f2f2",
              }}
              onChange={(e) => {
                setSearchTerm(e.target.value);
              }}
            />
            <button
              type="submit"
              style={{
                float: "left",
                width: "15%",
                padding: "10px",
                background: "#8b0000",
                color: "white",
                height: "60px",
                fontSize: "20px",
                border: "0px solid",
                borderTopRightRadius: 5,
                borderBottomRightRadius: 5,
                borderLeft: "none",
                cursor: "pointer",
              }}
            >
              <SearchIcon />
            </button>
          </form>
        </div>
        <br />
        <br />

        <div
          style={{
            fontFamily: "sans-serif",
            fontWeight: 400,
            fontSize: 28,
            paddingBottom: 10,
          }}
        >
          Movies
          <span
            style={{
              fontFamily: "sans-serif",
              fontWeight: 400,
              fontSize: 16,
              color: "#0078ff",
              paddingLeft: 30,
            }}
          >
            Now Showing
          </span>
        </div>
        <div style={{ paddingBottom: 40 }}>
          {movies
            ? movies
                .filter((val) => {
                  if (searchTerm === "") {
                    return val;
                  } else if (
                    val.original_title
                      .toLocaleLowerCase()
                      .includes(searchTerm.toLocaleLowerCase())
                  ) {
                    return val;
                  }
                })
                .map((item) => (
                  <div
                    style={{
                      backgroundColor: "#fff",
                      width: "300px",
                      borderRadius: 10,
                      height: "510px",
                      float: "left",
                      marginRight: 110,
                      marginBottom: 30,
                      backgroundColor: "#f5f2f2",
                    }}
                  >
                    <a
                      href=""
                      style={{ textDecoration: "none" }}
                      onClick={() => movetoSinglemovie(item)}
                    >
                      <div>
                        <img
                          src={item.image}
                          width={300}
                          style={{
                            borderTopLeftRadius: 10,
                            borderTopRightRadius: 10,
                          }}
                        />
                      </div>
                      <div style={{ margin: "10px 10px 20px" }}>
                        <h6
                          style={{
                            fontFamily: "sans-serif",
                            fontSize: "15px",
                            color: "#333333",
                          }}
                        >
                          {item.original_title.substring(0, 40)}
                        </h6>
                        <h6
                          style={{
                            fontFamily: "sans-serif",
                            fontSize: "12px",
                            color: "#999999",
                          }}
                        >
                          {item.language.map((items) => (
                            <span>{items.language_type} | </span>
                          ))}
                        </h6>
                      </div>
                    </a>
                  </div>
                ))
            : "Loading..."}
        </div>
      </Container>
    </div>
  );
}

export default Movies;
