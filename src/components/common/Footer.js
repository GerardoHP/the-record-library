import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container-fluid">
        <ul>
          <li>
            <Link to="/about">About</Link>{" "}
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/gerardohp/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
        </ul>
        <p>
          Nulla quis lorem ut libero malesuada feugiat. Sed porttitor lectus
          nibh. Nulla porttitor accumsan tincidunt. Vestibulum ac diam sit amet
          quam vehicula elementum sed sit amet dui.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
