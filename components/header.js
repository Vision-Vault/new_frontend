import React from "react";
import Navbar from "./navvbar";
import NCreateButton from "./NCreateButton";

function Header() {
  return (
    <>
      <div className="header" style={{ fontFamily: "Raleway, sans-serif" }}>
        <Navbar />
        <img className="header-image" src="/assests/money.png" alt="GIF" />

        <div className="desc">
          <p className="pp"> Turning Visions into Reality</p>
          <br />
          <p className="pp"> Vision Where Dreams </p>
          <br />
          <p className="pp" >Vault Take Flight!</p>

          <p id="bigidea">
            <br />
            Your next big idea starts here <br />
            Develop a marketing strategy to attract <br />
            both project creators and backers.
          </p>
          <NCreateButton />

          {/* <button id="start-button">Start here</button> */}
        </div>


      </div>
    </>
  );
}

export default Header;
