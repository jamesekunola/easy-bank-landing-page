import React from "react";
import MockupsImg from "../images/image-mockups.png";

export default function Hero() {
  return (
    <div className="hero--container">
      {/* hero image */}
      <div className="hero-images">
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
