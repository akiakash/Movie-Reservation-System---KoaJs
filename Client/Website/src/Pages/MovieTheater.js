import React from "react";
import Container from "react-bootstrap/esm/Container";
import NavBar from "../Layout/NavBar";

function MovieTheater() {
  const singleMovie = JSON.parse(sessionStorage.getItem("singlemovie"));
  console.log("singleMovie : ", singleMovie);

  const pagenav = (theater, show) => {
    window.sessionStorage.setItem("theater", JSON.stringify(theater));
    window.sessionStorage.setItem("showtime", JSON.stringify(show));
  };

  return (
    <div>
      <NavBar />
      <Container>
        <div
          style={{
            fontSize: 28,
            fontWeight: "300",
            lineHeight: "25px",
            color: "#000025",
            margin: "30px 0px 30px",
          }}
        >
          {singleMovie.original_title}
        </div>
        <div style={{ border: "1px solid black", marginBottom: "20px" }} />
        <div>
          {singleMovie.theaters.map((item) => (
            <center>
              <span
                style={{
                  fontSize: 20,
                  fontWeight: "300",
                  lineHeight: "25px",
                  color: "#000025",
                }}
              >
                {item.name}
              </span>
              <div
                style={{
                  fontSize: 20,
                  fontWeight: "300",
                  lineHeight: "25px",
                  color: "#000025",
                  margin: "10px 0px 30px",
                }}
              >
                {item.show.map((item) => (
                  <a
                    href="/TicketBooking"
                    style={{ textDecoration: "none" }}
                    onClick={() => pagenav(singleMovie.theaters, item)}
                  >
                    <span
                      style={{
                        border: "1px solid black",
                        padding: "7px 15px",
                        borderRadius: 15,
                        borderColor: "blue",
                        color: "blue",
                        margin: 10,
                      }}
                    >
                      {item.show_data}-{item.show_time}
                    </span>
                  </a>
                ))}
              </div>
            </center>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default MovieTheater;
