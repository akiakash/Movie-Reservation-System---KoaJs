import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import axios from "axios";
import { useHistory } from "react-router-dom";

function Movies() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

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
    <div style={{ paddingBottom: 20 }}>
      <div style={{ display: "flex" }}>
        <div>
          <h5
            style={{
              fontFamily: "sans-serif",
              fontSize: "18px",
              marginTop: 30,
              marginBottom: 10,
            }}
          >
            Movies
          </h5>
        </div>
        <div
          style={{
            paddingTop: 30,
            marginBottom: 10,
          }}
        >
          <a
            href="movies"
            style={{
              fontFamily: "sans-serif",
              fontSize: "14px",
              color: "#0078ff",
              textDecoration: "none",
              position: "absolute",
            }}
          >
            View All
          </a>
        </div>
      </div>

      <div>
        <Slider {...settings}>
          {movies
            ? movies.map((item) => (
                <div>
                  <a
                    href=""
                    style={{ textDecoration: "none" }}
                    onClick={() => movetoSinglemovie(item)}
                  >
                    <div
                      style={{
                        backgroundColor: "#fff",
                        width: "300px",
                        borderRadius: 10,
                        height: "510px",
                      }}
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
                    </div>
                  </a>
                </div>
              ))
            : "Loading..."}
        </Slider>
      </div>
    </div>
  );
}

export default Movies;
