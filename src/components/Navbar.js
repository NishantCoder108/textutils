import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const Navbar = (props) => {
  function Capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

  const [palete, setPalete] = useState({
    backgroundColor: "green",
  });


  function paleteColor(pcolor) {
    let d = (document.body.style.backgroundColor = pcolor);

    pcolor ==="black" ? (document.body.style.color = "white") : (document.body.style.color ="black")
        setPalete(d);
  }
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img
              style={{
                width: "48px",
                borderRadius: "30px",
                margin: "1px 3px 1px 3px",
              }}
              src="https://media-exp1.licdn.com/dms/image/C5603AQFsbEuiE5YS7Q/profile-displayphoto-shrink_100_100/0/1618945058673?e=1636588800&v=beta&t=jI1fTfbCNb-xhFBxfz7dc5Sii6oIC3s2uZyZJwd16SY"
              alt="Logo Img"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  {props.aboutText}
                </Link>
              </li>
            </ul>
            {/* <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form> */}

            {/* Color Palette */}
            <div
              style={{
                backgroundColor: "red",
                width: "20px",
                height: "20px",

                margin: "7px 12px 9px 3px",
                borderRadius: "6px",
              }}
              onClick={() => {
                return paleteColor("red");
              }}
            ></div>
            <div
              style={{
                backgroundColor: "green",
                width: "20px",
                height: "20px",

                margin: "7px 12px 9px 3px",
                borderRadius: "6px",
              }}
              onClick={() => {
                return paleteColor("green");
              }}
            ></div>
            <div
              style={{
                backgroundColor: "yellow",
                width: "20px",
                height: "20px",

                margin: "7px 12px 9px 3px",
                borderRadius: "6px",
              }}
              onClick={() => {
                return paleteColor("yellow");
              }}
            ></div>
            <div
              style={{
                backgroundColor: "orange",
                width: "20px",
                height: "20px",

                margin: "7px 12px 9px 3px",
                borderRadius: "6px",
              }}
              onClick={() => {
                return paleteColor("orange");
              }}
            ></div>
            <div
              style={{
                backgroundColor: "violet",
                width: "20px",
                height: "20px",

                margin: "7px 12px 9px 3px",
                borderRadius: "6px",
              }}
              onClick={() => {
                return paleteColor("violet");
              }}
            ></div>
            <div
              style={{
                backgroundColor: "black",
                width: "20px",
                height: "20px",

                margin: "7px 12px 9px 3px",
                borderRadius: "6px",
              }}
              onClick={() => {
                return paleteColor("black");
              }}
            ></div>



            <div className="form-check form-switch" onClick={props.toggle}>
              <input
                className="form-check-input "
                type="checkbox"
                id="flexSwitchCheckDefault"
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                {Capitalize(`${props.mode} `)}Mode
              </label>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

Navbar.propTypes = {
  logo: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  logo: "Your Logo",
  aboutText: "About",
};
export default Navbar;
