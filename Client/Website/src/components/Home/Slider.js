import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const slideImages = [
  {
    url: "./Images/Slider/ajth.jpg",
    caption: "Slide 1",
  },
  {
    url: "./Images/Slider/Rajini.jpg",
    caption: "Slide 2",
  },
  {
    url: "./Images/Slider/vijay.jpg",
    caption: "Slide 3",
  },
];

const Slider = () => {
  return (
    <div
      className="slide-container"
      style={{
        marginTop: "4%",
        marginBottom: "4%",
        marginLeft: "15%",
        marginRight: "15%",
      }}
    >
      <Slide>
        {slideImages.map((slideImage, index) => (
          <div className="each-slide" key={index}>
            <div
              style={{
                backgroundImage: `url(${slideImage.url})`,
                height: "500px",
                width: "2000px",
              }}
            >
              <span>{slideImage.caption}</span>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default Slider;
