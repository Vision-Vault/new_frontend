import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

 export default function Footer() {
  return (
    <footer  className="n_footer text-white py-10">
      <div
        id="footer2"
        className="container mx-auto flex justify-between items-center"
      >

        <div id="footernum" className="text-lg">
          <p>Phone: +1 (123) 456-7890</p>
          <p>Email: contactvision@gmail.com</p>
        </div>
        <a
          href="https://github.com/yourgithubusername"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400 transition duration-300 ease-in-out"
        >
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>

      </div>

      <div id="linefooter"></div>
      <p id="footerdate" className="text-center">
          &copy; {new Date().getFullYear()} VisionVault. All Rights Reserved.
        </p>
    </footer>
  );
}
