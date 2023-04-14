import React from "react";
import FacebookIcon from "../images/icon-facebook.svg";
import YoutubeIcon from "../images/icon-youtube.svg";
import TwitterIcon from "../images/icon-twitter.svg";
import pinterestIcon from "../images/icon-pinterest.svg";
import InstagramIcon from "../images/icon-instagram.svg";
import FooterLogo from "../images/footer-logo.svg";

export default function Footer() {
  return (
    <footer className="flex wrapper">
      <div className="footer--container">
        <div className="footer-socials">
          <a href="#">
            <img src={FooterLogo} alt="easybank" className="footer--logo" />
          </a>

          <ul className="socials-media__link">
            <li>
              <a href="#">
                <img src={FacebookIcon} alt="Facebook" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={YoutubeIcon} alt="Youtube" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={TwitterIcon} alt="twitter" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={pinterestIcon} alt="pinterest" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={InstagramIcon} alt="instagram" />
              </a>
            </li>
          </ul>
        </div>

        {/* footer links */}
        <div className="footer-link__container">
          <div className="footer--links">
            <ul>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
            </ul>
          </div>
          <div className="footer--links">
            <ul>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Support</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>
        {/* invite btn */}
        <div className="footer--invite">
          <button className="invite--btn">Request invite</button>
          <p>© Easybank. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}
