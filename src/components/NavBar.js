import React, { useState } from "react";
import logo from "../images/logo.png";

function NavBar() {
  const [open, setOpen] = useState(false);
  return (
    <div className="header">
      <div className="header_wrapper">
        <div className="logo">
          <a href="/">
            <img
              src={logo}
              alt="logo"
              // width={180}
              height={80}
            />
          </a>
        </div>
        <div className={open ? "menu_mobile open" : "menu_mobile"}>
          <div className="menu_mobile_relative">
            <div className="menu_mobile_overlay"></div>
            <ul className="menu_mobile_items">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">About</a>
              </li>
              <li>
                <a href="/">Pricing</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
        <div className={"menu"}>
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Pricing</a>
          <a href="/contact">Contact</a>
          <div className="number">
            <img
              src="https://i8.amplience.net/i/jpl/phone-call-877402671b025927871de04103cbe388"
              alt=""
            />
            <div
              className="phone_number"
              onclick="window.location.href='tel:07790611737';"
            >
              01619268999
            </div>
          </div>
        </div>
        <button
          className={open === false ? "hamburger" : "hamburger is-active"}
          onClick={() => setOpen(!open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>
  );
}

export default NavBar;
