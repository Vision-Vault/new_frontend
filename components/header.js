import React from "react";
import Navbar from "./navvbar";
import NCreateButton from "./NCreateButton";

function Header() {
  return (
    <>
      <div className="header" style={{ fontFamily: "Raleway, sans-serif" }}>
        <Navbar />
        <img className="header-image" src="/images/he33.gif" alt="GIF" />

        <div className="desc">
          <p className="pp"> Turning Visions into Reality</p>
          <br />
          <h1 id="vv">
            Vision
            <br /> Vault
          </h1>
          <p className="pp">
            Where Dreams <br /> Take Flight!
          </p>
          <br />

          <p id="bigidea">
            <br />
            <br />
            Your next big idea starts here <br />
            Develop a marketing strategy to attract <br />
            both project creators and backers.
          </p>
          <NCreateButton />

          {/* <button id="start-button">Start here</button> */}
        </div>

        <div className="features">
          <div className="feature" id="f1">
            <img src=" /images/security.png" alt />
            <h3>Security</h3>
            <br />
            <p>Protect against unauthorized access</p>
          </div>

          <div className="feature" id="f2">
            <img src=" /images/legal.png" alt />
            <h3>Legal Compliance</h3>
            <br />
            <p>Offer terms and conditions for users</p>
          </div>

          <div className="feature" id="f3">
            <img src="/images/feedback.png " alt />
            <h3>Feedback and Iteration</h3>
            <p>
              <br />
              Collect feedback from users
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
