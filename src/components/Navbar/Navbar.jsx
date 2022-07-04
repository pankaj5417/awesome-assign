import React from "react";
import { useState } from "react";
import {
  Button,
  Container,
  Offcanvas,
  Nav,
  NavDropdown,
  Form,
  FormControl,
} from "react-bootstrap";
import "./navbar.css";
function Navbar() {
  const [open, setOpen] = useState(false);

  const showList = () => {
    open ? setOpen(false) : setOpen(true);
  };
  return (
    <>
      <header id="header" className="fixed-top">
        <div className="container-fluid head-1 d-flex align-items-center justify-content-between">
          <marquee
            style={{ behavior: "scroll", direction: "left", width: "100%" }}
          >
            Let's leave a better planet for the coming generations!
          </marquee>
        </div>

        <div className="container d-flex head-2 align-items-center justify-content-between">
          <nav id="navbar" className="navbar">
            <ul>
              <li>
                <a
                  className="nav-link scrollto"
                  href=""
                  target="_blank"
                >
                  <i>
                    <img src="https://www.virmansha.com/assets/img/fb.png" />
                  </i>
                </a>
              </li>

              <li>
                <a
                  className="nav-link scrollto"
                  href="#"
                  target="_blank"
                >
                  <i>
                    <img src="https://www.virmansha.com/assets/img/insta.png" />
                  </i>
                </a>
              </li>

              <li>
                <a
                  className="nav-link scrollto"
                  href="#"
                  target="_blank"
                >
                  <i>
                    <img src="https://www.virmansha.com/assets/img/linkedin.png" />
                  </i>
                </a>
              </li>
            </ul>
          </nav>
          <a href="" className="logo">
            <img
              src="https://www.virmansha.com/assets/img/logo3.png"
              alt=""
              className="img-fluid"
            />
          </a>

          <nav id="navbar" className="navbar">
            <ul>
              <li>
                <div className="searchbar">
                  <form action="" method="POST">
                    <input
                      type="text"
                      name="name"
                      className="search-head"
                      placeholder="Search..."
                      required
                    />
                    <i
                      className="fa fa-search searchIcon"
                      aria-hidden="true"
                    ></i>
                    <div className="icon"></div>
                  </form>
                </div>

                <form id="content-search" className=" d-none">
                  <input
                    type="text"
                    name="name"
                    className="input"
                    id="search-input"
                    placeholder=""
                    required
                  />
                  <button
                    type="reset"
                    className="search"
                    id="search-btn"
                  ></button>
                </form>
              </li>
              <li>
                <a className="nav-link scrollto " href="#">
                  <i>
                    <i className="fa fa-shopping-bag" aria-hidden="true"></i>
                  </i>
                </a>
              </li>
              <li className="dropdown">
                <a href="#">
                  <i className="fa fa-bars" aria-hidden="true"></i>
                </a>
                <ul>
                  <li>
                    <a href="">Home</a>
                  </li>
                  <li>
                    <a href="">About</a>
                  </li>
                  <li>
                    <a href="">Impact</a>
                  </li>
                  <li>
                    <a href="#">
                      <span>Products</span>{" "}
                      <i
                        onClick={showList}
                        className="fa fa-chevron-down"
                        aria-hidden="true"
                      ></i>
                    </a>
                    {open && (
                      <div>
                        <p>
                          <a href="">Home furnishings</a>
                        </p>
                        <p>
                          <a href="">Home Decor</a>
                        </p>
                        <p>
                          <a href="">Bags</a>
                        </p>
                        <p>
                          <a href="">Accessories</a>
                        </p>
                        <p>
                          <a href="">Toys</a>
                        </p>
                      </div>
                    )}
                  </li>
                  <li>
                    <a href="">Shop</a>
                  </li>
                  <li>
                    <a href="">Blog</a>
                  </li>
                  <li>
                    <a href="">Contact</a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Navbar;
