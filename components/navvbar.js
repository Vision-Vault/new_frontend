import Link from "next/link";
import { useState } from "react";
import "typeface-montserrat";
import 'fontsource-raleway';
import "font-awesome/css/font-awesome.min.css";

function Navbar() {

 const categories = [
   { name: "Category 1", url: "/category1" },
   { name: "Category 2", url: "/category2" },
   { name: "Category 3", url: "/category3" },
 ];

 const [isDropdownOpen, setIsDropdownOpen] = useState(false);

 const toggleDropdown = () => {
   setIsDropdownOpen(!isDropdownOpen);
 };

  return (
    <>
      <div className="navbar" style={{ fontFamily: "Raleway, sans-serif" }}>
        <img src="/images/l11.png" />
        <h1 style={{ fontFamily: "Raleway, sans-serif" }}>Vision Vault</h1>
        <div className="nav-elemnts">
          <Link className="navbar-link" href={"/"}>
            Home
          </Link>
          <Link className="navbar-link" href={"/"}>
            Profile
          </Link>

          <div className="navbar-dropdown">
            <span className="navbar-link">
              Categories
              <p id="parrow" style={{ marginLeft: "10px" }}>
                <i className="fa fa-caret-down" aria-hidden="true"></i>
              </p>
            </span>
            <div className="dropdown-content">
              {categories.map((category, index) => (
                <Link key={index} href={category.url}>
                  {category.name}
                </Link>
              ))}
            </div>
          </div>

          <Link className="navbar-link" href={"/"}>
            Projects
          </Link>
          <Link className="navbar-link" href={"/"}>
            about
          </Link>
        </div>
        <div className="profilein">
          <Link href={"/"}>
            <img id="userhome" src="/images/user.png" />
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
