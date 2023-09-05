


import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-semibold">Your Company Name</div>
        <p>
          &copy; {new Date().getFullYear()} VisionVault. All Rights Reserved.
        </p>
        <div className="text-lg">
          <p>Phone: +1 (123) 456-7890</p>
          <p>Email: contact@example.com</p>
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
    </footer>
  );
}

export default Footer;
