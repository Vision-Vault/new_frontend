import Link from "next/link";
import { useState } from "react";

function Navbar() {
  const categories = [
    { id: 1, name: "Environmental & Sustainability" },
    { id: 2, name: "Technology & Innovation" },
    { id: 3, name: "Health & Medical" },
    { id: 4, name: "Arts & Culture" },
    { id: 5, name: "Education" },
    { id: 6, name: "Community & Social Impact" },
    { id: 7, name: "Food & Culinary" },
    { id: 8, name: "Animal Welfare" },
    { id: 9, name: "Sports & Athletics" },
    { id: 10, name: "Cultural Preservation" },
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

          <div className="navbar-dropdown">
            <span className="navbar-link">
              Categories
              <p id="parrow" style={{ marginLeft: "10px" }}>
                <i className="fa fa-caret-down" aria-hidden="true"></i>
              </p>
            </span>
            <div className={`dropdown-content${isDropdownOpen ? " show" : ""}`}>
              {categories.map((category) => (
                <Link key={category.id} href={`/categories/${category.id}`}>
                  {category.name}
                </Link>
              ))}
            </div>
          </div>

          <Link className="navbar-link" href={"/profile"}>
            Profile
          </Link>
          <Link className="navbar-link" href={"/about"}>
            About
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
