import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState({
    home: true,
    about: false,
    shop: false,
    contact: false,
    Service: false,
  });
  
  return (
    <nav
      className="custom-navbar navbar navbar navbar-expand-md navbar-dark bg-dark"
      arial-label="Furni navigation bar"
    >
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          Furni<span>.</span>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarsFurni"
          aria-controls="navbarsFurni"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarsFurni">
          <ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
            <li className={`${active.home && "nav-item active"}`}>
              <NavLink
              end
                // className={({ isActive }) =>
                //   `nav-link ${
                //     isActive
                //       ? setActive({
                //           home: true,
                //           about: false,
                //           shop: false,
                //           contact: false,
                //           Service: false,
                //         })
                //       : setActive({
                //           home: false,
                //           about: false,
                //           shop: false,
                //           contact: false,
                //           Service: false,
                //         })
                //   } `
                // }
                className="nav-link"
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className={`${active.shop && "nav-item active"}`}>
              <NavLink className="nav-link" to="/shop">
                Shop
              </NavLink>
            </li>
            <li className={`${active.about && "nav-item active"}`}>
              <NavLink className="nav-link" to="/about">
                About us
              </NavLink>
            </li>
            <li className={`${active.Service && "nav-item active"}`}>
              <NavLink className="nav-link" to="/services">
                Services
              </NavLink>
            </li>
            <li className={`${active.contact && "nav-item active"}`}>
              <NavLink className="nav-link" to="/contact">
                Contact us
              </NavLink>
            </li>
          </ul>
          <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
            <li>
              <NavLink className="nav-link" to="">
                <img src="images/user.svg" />
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to="/cart">
                <img src="images/cart.svg" />
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
