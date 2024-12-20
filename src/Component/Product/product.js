import React from "react";
import "./product.css";
import drum from "../../images/drum.jpg";
import prevarrow from "../../images/Vector.png";
import gif from "../../images/countries.gif";
import nextarrow from "../../images/Vector (1).png";
import CarouselContainer from "../CarouselContainer";
import p1_img1 from "../../images/Inside Page 01.jpg";
import p1_img2 from "../../images/img2.png";
import p1_img3 from "../../images/img3.png";
import p1_img4 from "../../images/img4.png";
import p1_img5 from "../../images/Inside Page 05.jpg";
import p1_img6 from "../../images/Inside Page 06.jpg";
import p1_img7 from "../../images/Inside Page 07.jpg";
import p1_img8 from "../../images/img8.png";
import p1_img9 from "../../images/img9.png";
import p1_img10 from "../../images/Rectangle 2.png";

import { AppWrap, MotionWrap } from "../../Wrapper";

function Product() {
  return (
    <div style={{ marginBottom: "0rem" }}>
      <div className="country">
      <div className="c2">
        <img src={gif} className="map"></img>
        </div>
      </div>

      {/* <!-- product range heading --> */}

      <div id="product" class="productheading">
        <h2 class="product_heading1">Our Product Range</h2>
        <h4 class="product_heading2">
          Explore our range of high quality products
        </h4>
      </div>

      {/* <!-- product 1 --> */}

      <div className="product">
        <div className="product_left">
          <CarouselContainer first={p1_img1} second={p1_img2} third={p1_img1} />

          <a class="prev">
            <img src={prevarrow} />
          </a>
          <a class="next">
            <img src={nextarrow} />
          </a>
        </div>
        <div className="product_right">
          <h2 className="product_head">Stainless Steel Closed Head Drum</h2>
          <div className="product_desc">
            <h4 className="product_subhead">
              <span className="boldlist">
                Sizes available in : 5L, 12L, 20L, 28L, 40L, 60L, 75L, 110L
                &amp; 210L
              </span>
            </h4>

            <ul className="product_list">
              <li>Available in grade SS 304 &amp; SS316</li>
              <li>UN Approved : 1A1 / X1.6 / 250 / IND</li>
              <li>Closures : Standard 2" and 3/4" Stainless Steel Tri-Sure</li>
              <li>Internal Finish : 2B / BA (Mirror)</li>
              <li>Closure Rings : Available in PE (Standard), PTFE, Viton</li>
              <li>
                Shell Welded Using Plasma Weld Technology, Free from any Residue
                Particles.
              </li>
              <li>
                Top / Bottom Triple Seamed with Shell and Resistance Welded,
                Eliminating usages of Sealing Compounds which contaminates the
                Packaging material.{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* <!-- product 2  --> */}

      <div class="product">
        <div class="product_left">
          <CarouselContainer first={p1_img3} second={p1_img4} third={p1_img3} />
          <a class="prev">
            <img src={prevarrow} />
          </a>
          <a class="next">
            <img src={nextarrow} />
          </a>
        </div>
        <div class="product_right">
          <h2 class="product_head">Stainless Steel Open Head Drum</h2>
          <div class="product_desc">
            <h4 className="product_subhead">
              <span className="boldlist">
                Sizes available in : 5L, 12L, 20L, 30L, 40L, 60L, 75L, 110L
                &amp; 210L
              </span>
            </h4>

            <ul className="product_list">
              <li>Available in grade SS 304 &amp; SS316</li>
              <li>UN Approved : 1A1 / X220 / S / IND</li>
              <li>Internal Finish : 2B / BA (Mirror)</li>
              <li>
                Closing Ring in Bolt Type &amp; Clamp Type/ Also available Heavy
                Duty Clamp Ring for Liquid Transport
              </li>
              <li>
                Shell Welded Using Plasma Weld Technology, Free from any Residue
                Particles.
              </li>
              <li>
                Bottom Triple Seamed with Shell and Resistance Welded,
                Eliminating usages of Sealing Compounds which contaminates the
                Packaging material.{" "}
              </li>
              <li>Thickness : 1.00mm (19SWG) &amp; 1.2mm (18SWG)</li>
              <li>Optional Closures of 2" and 3/4" on TopLid</li>
              <li>External Finish : Matt/2B</li>
            </ul>
          </div>
        </div>
      </div>

      {/* <!-- product 3  --> */}

      <div class="product">
        <div
          class="product_left"
          style={{ maxHeight: "530px", overflow: "hidden" }}
        >
          <CarouselContainer first={p1_img5} second={p1_img6} third={p1_img7} />
          <a class="prev">
            <img src={prevarrow} />
          </a>
          <a class="next">
            <img src={nextarrow} />
          </a>
        </div>
        <div class="product_right">
          <h2 class="product_head">
            Stainless Steel Open Head Crevice Free Drum
          </h2>
          <div class="product_desc">
            <h4 className="product_subhead">
              <span className="boldlist">
                Sizes available in : 150L &amp; 210L;
              </span>
            </h4>

            <ul className="product_list">
              <li>Available in grade SS 304 &amp; SS316</li>
              <li>Internal Finish : BA (Mirror)</li>
              <li>
                Shell Welded Using Plasma Weld Technology, Free from any Residue
                Particles.
              </li>
              <li>
                Welded Bottom Enables the Drum to be Thoroughly cleaned to
                Sterile Conditions
              </li>
              <li>
                Suitable for applications inlcuding the pharmaceutical, food,
                speciality chemical and toxic chemical industries specially for
                mixing batches and storage as per GPM norms.
              </li>
              <li>Thickness : 1.00mm (19SWG) &amp; 1.2mm (18SWG)</li>
              <li>External Finish : Matt</li>
            </ul>
          </div>
        </div>
      </div>

      {/* <!-- product 4 --> */}

      <div class="product">
        <div class="product_left">
          <CarouselContainer first={p1_img8} second={p1_img9} third={p1_img8} />
          <a class="prev">
            <img src={prevarrow} />
          </a>
          <a class="next">
            <img src={nextarrow} />
          </a>
        </div>
        <div class="product_right p1r">
          <h2 class="product_head">
            Stainless Steel Conical Containers (Crevice Free)
          </h2>
          <div class="product_desc">
            <h4 className="product_subhead">
              <span className="boldlist">
                Sizes available in : 5L, 12L, 20L, 30L, 40L, 60L, 75L, 110L
                &amp; 210L
              </span>
            </h4>

            <ul className="product_list">
              <li>Available in grade SS 304 &amp; SS316</li>
              <li>Internal Finish : Mirror Polished</li>
              <li>Available Types : Standard &amp; Air Tight</li>
              <li>
                Shell Welded Using Plasma Weld Technology, Free from any Residue
                Particles.
              </li>
              <li>Thickness : 0.8mm (22SWG)</li>
              <li>External Finish : Matt</li>
              <li>Handles are Plasma Spot Welded</li>
            </ul>
          </div>
        </div>
      </div>

      {/* <!-- product 5  --> */}

      <div class="product">
        <div class="product_left">
          <img src={p1_img10} className="product_img "></img>

          {/* <a class="prev">
            <img src={prevarrow} />
          </a>
          <a class="next">
            <img src={nextarrow} />
          </a> */}
        </div>
        <div class="product_right">
          <h2 class="product_head">Stainless Steel Bottles</h2>
          <div class="product_desc">
            <h4 className="product_subhead">
              <span className="boldlist">
                Sizes available in : 500ml &amp; 1000ml
              </span>
            </h4>

            <ul className="product_list">
              <li>Available in grade SS 304 &amp; SS316</li>
              <li>Thickness : 1.50mm</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppWrap(
  MotionWrap(Product, "app__skills"),
  "skills",
  "app__whitebg"
);
