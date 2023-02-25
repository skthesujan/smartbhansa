import React from "react";

import "./footer.scss";
import bg from './l.jpg';


const Footer = () => {
  return (
    <footer
      className="footer bgImg bgImgFixed"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="container">
        <div className="footerInfo">
          <div className="footerDetails">
            <h1>Services</h1>
            <a href="#home">
              <p>Delivery</p>
            </a>
            <a href="#menu">
              <p>Pricing</p>
            </a>
          </div>
          <div className="footerDetails">
            <h1>Information</h1>
            <a href="#contact">
              <p>Contact us</p>
            </a>
            <a href="#home">
              <p>Terms of services</p>
            </a>
          </div>
          <div className="footerDetails" >
            <iframe title="our location map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7066.999287996801!2d85.33661487179653!3d27.670948281227815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19e58a6d1331%3A0x18ad0afdf12f826f!2sBalkumari%2C%20Lalitpur%2044600!5e0!3m2!1sen!2snp!4v1676140261519!5m2!1sen!2snp"> </iframe>
          </div>
        </div>
        <p className="license">copyright 2023 &#169; SmartBhansa</p>
      </div>
    </footer>
  );
};

export default Footer;
