import React, { useState } from "react";
import { AppWrap, MotionWrap } from "../../Wrapper";
import "./header.css";
import svg from "../../images/ellipsesvg.svg";
import logosvg from "../../images/logosvg.svg";
import CarouselContainer from "../CarouselContainer/Carouselheader";

function Header() {
  return (
    <div className="header">
      <CarouselContainer />
      <img className="svgimg" src={svg} />

      <img className="logoimg" src={logosvg} />
    </div>
  );
}
export default AppWrap(
  MotionWrap(Header, "app__skills"),
  "skills",
  "app__whitebg"
);
