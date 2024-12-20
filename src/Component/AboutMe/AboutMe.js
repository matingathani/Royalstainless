import React from "react";
import "./AboutMe.css";
import { AppWrap, MotionWrap } from "../../Wrapper";

import image from "../../images/owner.jpg";

const AboutMe = () => {
  return (
    <div id="about" className="outercontainer">
      <div className="container" style={{ zIndex: "30" }}>
        <div class="aboutheading">
          <h2 class="about_heading1">
            Manufacturing & Exporting High quality products.
          </h2>
          <h4 class="about_heading2">
            A Leading Manufacturing Company, Serving Since 1998.
          </h4>
        </div>

        <div className="grid">
          <div className="aboutme_description">
            <p>
              It Gives Immense Pleasure to Introduce our Company as One of the
              Leading Producers of Stainless-Steel Packaging &amp; Storing
              Materials of Drums – Barrels – Conical Containers.
            </p>
            <p>
              With the Variety of Different Sizes – Shapes and Types we have
              been serving the Industry of Pharmaceutical – Essential Oil –
              Beverage and Food since Year 1998.
            </p>
            <p>
              From Hazardous Goods Transport of liquid / Solid products to
              Mixing Batch and Storage our Drums are the Best to Be relied upon
              !!
            </p>
            <p>
              We Specialize in the “know how” of Stainless-Steel materials as
              our experience with it is since the year 1968 , hence we have a
              Handpicked choice in selecting utmost Quality raw material to give
              Optimum Finish in the End Product.<br></br>Although our SOPs are
              as per ISO 9001-2015, Our Production Process adhere our own Strict
              &amp; fix Norm procedures to ensure an Optimum Quality Finish
              product. Our Works is spread in a 20,000 Sq. Feet of Area with
              designated space provided for each process.
            </p>
            <p>
              We are Happy to Serve you in any part of the World with our
              footsteps already available in Countries like USA – UK , Ireland –
              Europe – Iran – India - Nepal – Sri Lanka – Australia.
            </p>
            <p>
              We Warmly welcome all your Requirements for Stainless Steel
              packaging and storing and shall be happy to serve your Industry !!
            </p>
            <div className="aboutme_descrption-director">
              <p style={{ fontFamily: "satisfy" }}>Tejas Gathani</p>
              <p style={{ margin: "0rem" }}>Managing Director</p>
            </div>
          </div>
          <div className="aboutme_image">
            <img src={image} alt="director_image" />
          </div>
          <div className="aboutme_properties">
            <div className="firsthead">
              <b>
                We have
                <span style={{ color: "#035992" }}>
                  "Over a Decade long relations"
                </span>
                with our Happy Customers !
              </b>
            </div>
            <ul>
              <li>
                <b>Quality</b>
              </li>
            </ul>
            <p>
              From Raw Material to The Finish Product, We ensure Step to Step
              Check points for Optimum Quality Finish{" "}
            </p>
            <ul>
              <li className="aboutme_properties-listitem">
                <b>Reliability</b>
              </li>
            </ul>
            <p>
              With timely Deliveries to Follow ups for Quality assurance, Our
              Team provides Complete Satisfaction to Rely on us on every
              Consignment experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppWrap(
  MotionWrap(AboutMe, "app__skills"),
  "skills",
  "app__whitebg"
);
