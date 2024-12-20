import React from "react";
import { Carousel } from "react-bootstrap";
import headerimg from "../../images/Rectangle 119.png";

import headerimg2 from "../../images/Rectangle 1.png";
import "./Carousel.css";

const CarouselContainer = () => {
  return (
    <div>
      <Carousel fade variant="dark" indicators={false}>
        <Carousel.Item>
          <img className="d-block w-100" src={headerimg} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={headerimg2} alt="Second slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselContainer;
