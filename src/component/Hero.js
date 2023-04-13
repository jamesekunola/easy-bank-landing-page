import React from "react";
import PhonebgDesktop from "../images/bg-intro-desktop.svg";
import PhonebgMobile from "../images/bg-intro-mobile.svg";
import MockupsImg from "../images/image-mockups.png";

export default function Hero() {
  return (
    <div className="hero--container">
      {/* hero image */}
      <div className="hero-images">
        {/* <img
          src={PhonebgDesktop}
          alt="a background of dark blue and light green"
          className="desktop_phone"
        />
        <img
          src={PhonebgMobile}
          alt="a background of dark blue and light green"
          className="mobile_phone"
        /> */}
        <img src={MockupsImg} alt="phone mockups" />
      </div>
      {/* hero text */}
      <div className="hero--text">
        <h1>Next generation digital banking</h1>
        <p>
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending, saving, budgeting, investing, and much
          more.
        </p>
        <button className="invite--btn">Request Invite</button>
      </div>
    </div>
  );
}
