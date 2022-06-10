import React from "react";
import Container from "react-bootstrap/esm/Container";
import NavBar from "../Layout/NavBar";
import Slider from "../components/Home/Slider";
import Movies from "../components/Home/Movies";
import PrivacyNote from "../components/Home/PrivacyNote";

function Home() {
  return (
    <div style={{ backgroundColor: "#f5f2f2" }}>
      <NavBar />
      <Slider />
      <Container>
        <Movies />
        <PrivacyNote />
      </Container>
    </div>
  );
}

export default Home;
