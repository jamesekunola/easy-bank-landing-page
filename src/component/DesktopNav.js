import React from "react";
import Logo from "../images/logo.svg";
import HamburgerIcon from "../images/icon-hamburger.svg";
import CloseIcon from "../images/icon-close.svg";

export default function DesktopNav() {
  const HandleClick = () => {
    console.log("rock and roll");
  };

  return (
    <div className="wrapper">
      {/* logo / hamburgar */}
      <div className="nav--logo">
        <a href="#home" className="logo">
          <img src={Logo} alt="easybank" />
        </a>

        <button className="flex mobile_nav-btn" onClick={HandleClick}>
          <span className="hambuger-icon">
            <img src={HamburgerIcon} alt="open mobile nav" />
          </span>
          <span className="close-icon">
            <img src={CloseIcon} alt="Close mobile nav" />
          </span>
        </button>
      </div>
      {/* navlinks */}
      <div className="navlinks">
        <ul className="links-cover">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Careers</a>
          </li>
        </ul>
      </div>
      {/* invite button */}
      <button className="invite--btn">Request Invite</button>
    </div>
  );
}
