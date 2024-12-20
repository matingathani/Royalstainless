import React from "react";
import { AppWrap, MotionWrap } from "../../Wrapper";

import "./footer.css";
import logo from "../../images/Group 7.svg";
import email from "../../images/email.svg";
import user from "../../images/user.svg";
import address from "../../images/address.svg";
import phone from "../../images/phone.svg";
import wave from "../../images/footer (1).png";

function Footer(props) {
  return (
    <div id="contactus">
      <div className="wave">
        <img className="waveimg" src={wave}></img>
      </div>
      <div className="footer">
        <div className="footer_container">
          <div className="footer_left">
            <img className="footer_img1" src={logo} />
          </div>

          <div className="footer_center">
            <h4 className="footer_head" style={{ marginLeft: "1rem" }}>
              Contact Details
            </h4>
            <ul className="footer_list">
              <li className="list">
                <img className="icons" src={address} /> GIDC Phase 4, opp.
                Sainest Tube, <br />
                Bhehind Gati Transport,
                <br />
                Chhatral, Tal: Kalol,Dist Gandhinagar,
                <br />
                GUJARAT : 382 729 INDIA
              </li>
              <li className="list">
                <img className="icons" src={user} />
                Tejas Gathani
                <br />
                Director
              </li>
              <li class="list">
                <img className="icons" src={phone} />
                +91 9825610150
              </li>
              <li class="list" style={{ display: "block" }}>
                <img className="icons" src={email} />

                <a href="mailto:tejgathani@gmail.com" className="link">
                  tejgathani@gmail.com
                </a>

                <br></br>

                <a
                  href="mailto:tejas.gathani@royalstainless.com"
                  className="link"
                  style={{ marginLeft: "3rem" }}
                >
                  tejas.gathani@royalstainless.com
                </a>
              </li>
            </ul>
          </div>

          <div className="footer_right">
            <h4 className="footer_head">Find Us Here</h4>

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3664.727022168763!2d72.43607464932747!3d23.289366584744137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e8700bfffffff%3A0x662a1aa457f64b14!2sRoyal%20Stainless%20Steel%20Containers!5e0!3m2!1sen!2sin!4v1649751130388!5m2!1sen!2sin"
              className="Map"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div className="bottom">
          <p className="bottom_para">
            © 2022 Royal Stainless Steel. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
export default AppWrap(
  MotionWrap(Footer, "app__skills"),
  "skills",
  "app__whitebg"
);
