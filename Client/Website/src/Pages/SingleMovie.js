import React from "react";
import Container from "react-bootstrap/Container";
import NavBar from "../Layout/NavBar";
import ReactPlayer from "react-player";
import Slider from "react-slick";
import StarRateIcon from "@mui/icons-material/StarRate";
import { useHistory } from "react-router-dom";

function SingleMovie() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  const singleMovie = JSON.parse(sessionStorage.getItem("singlemovie"));

  const history = useHistory();
  const BookNow = () => {
    history.push("MovieTheater");
  };

  return (
    <div>
      <NavBar />
      <ReactPlayer
        url={singleMovie.promo}
        width={"100%"}
        style={{ zIndex: 0 }}
      />
      <Container>
        <div style={{ marginTop: "-100px", zIndex: 1, position: "relative" }}>
          <div style={{ float: "left" }}>
            <img
              src={singleMovie.image}
              width={250}
              height={350}
              style={{ borderRadius: 10 }}
            />
          </div>
          <div style={{ float: "left", marginTop: 40, marginLeft: 20 }}>
            <h2
              style={{
                fontWeight: 600,
                fontSize: 24,
                color: "#fff",
              }}
            >
              {singleMovie.original_title}{" "}
              <div>
                {singleMovie.movie_type.map((item) => (
                  <div
                    style={{
                      border: "1px Solid #fff",
                      borderWidth: "1",
                      float: "right",
                      padding: "2px 8px 2px 8px",
                      fontSize: 11,
                      borderRadius: 40,
                      margin: 5,
                    }}
                  >
                    {item.movie_type}
                  </div>
                ))}
              </div>
            </h2>
            <h5
              style={{
                fontWeight: 400,
                fontSize: 12,
                color: "#fff",
              }}
            >
              {singleMovie.language.map((item) => (
                <div style={{ float: "left" }}>{item.language_type} | </div>
              ))}
            </h5>
            <br />
            <div>
              <div style={{ justifyContent: "" }}>
                {singleMovie.genre.map((item) => (
                  <div
                    style={{
                      border: "1px Solid #000",
                      borderWidth: "1",
                      float: "left",
                      padding: "2px 8px 2px 8px",
                      fontSize: 11,
                      borderRadius: 40,
                      margin: 5,
                    }}
                  >
                    {item.genre_type}
                  </div>
                ))}

                <div style={{ float: "right" }}>
                  <button
                    type="submit"
                    className="form-control btn rounded submit px-3"
                    style={{
                      backgroundColor: "#8b0000",
                      color: "#fff",
                      margin: "10px 40px 10px 40px",
                    }}
                    onClick={() => BookNow()}
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
            <br />
            <br />
            <br />
            <div
              style={{
                marginTop: "-20px",
                fontSize: 13,
                borderRadius: 40,
              }}
            >
              {singleMovie.release_date.substring(0, 10)}
            </div>
            <span
              style={{
                marginTop: "-20px",
                fontSize: 13,
                borderRadius: 40,
              }}
            >
              Runnnig Time - {singleMovie.runtime} min
            </span>
            <br />
            <span
              style={{
                marginTop: "-20px",
                fontSize: 15,
                borderRadius: 40,
              }}
            >
              IMDB RATING <StarRateIcon style={{ marginTop: -10 }} />{" "}
              {singleMovie.imdbRating}
              /10
            </span>
            <div style={{ marginTop: 30 }}>
              <h5>Overview</h5>
              <p style={{ maxWidth: "900px" }}>{singleMovie.overview}</p>
            </div>
            <div>
              <h5>Cast</h5>
              <div style={{ maxWidth: "900px" }}>
                <Slider {...settings}>
                  {singleMovie.cast.map((item) => (
                    <div
                      style={{
                        overflow: "hidden",
                        display: "inline-block",
                        textAlign: "center",
                      }}
                    >
                      <div>
                        <img
                          src={item.image}
                          width={150}
                          height={150}
                          style={{
                            borderRadius: 100,
                            display: "block",
                            marginLeft: "auto",
                            marginRight: "auto",
                          }}
                        />
                      </div>
                      <div
                        style={{
                          justifyContent: "center",
                          textAlign: "center",
                        }}
                      >
                        <span
                          style={{
                            fontSize: 12,
                            fontWeight: "400",
                            color: "#8b0000",
                          }}
                        >
                          {item.name}
                        </span>
                        <br />
                        <span
                          style={{
                            fontSize: 12,
                            fontWeight: "400",
                            color: "#999999",
                          }}
                        >
                          {item.type}
                        </span>
                      </div>
                    </div>
                  ))}
                  <div>
                    <h3></h3>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default SingleMovie;
