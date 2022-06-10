import "react-slideshow-image/dist/styles.css";
import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { sizeHeight } from "@mui/system";

const slideImages = [
  {
    url: "https://www.bmu.edu.in/acic-propel/contents/1630095955__cover.jpeg",
    caption: "Slide 1",
  },
  {
    url: "images/slide_3.jpg",
    caption: "Slide 2",
  },
  {
    url: "images/slide_4.jpg",
    caption: "Slide 3",
  },
];

const Slideshow = () => {
  return (
    <div className="slide-container">
      <Slide>
        {slideImages.map((slideImage, index) => (
          <div className="each-slide" key={index}>
            <div
              style={{
                backgroundImage: `url(${slideImage.url})`,
                sizeHeight: 100,
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
export default Slideshow;
