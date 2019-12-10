import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import "./Header.scss";

const Header = () => {
  const links = [
    { to: "/", exact: true, text: "Home" },
    { to: "/about", exact: false, text: "About" },
    { to: "/albums", exact: false, text: "Albums" },
    { to: "/artists", exact: false, text: "Artists" },
  ];

  return <NavList links={links} />;
};

const NavList = ({ links }) => {
  return (
    <nav className="cl-effect-4" aria-label="breadcrumb">
      <ol className="breadcrumb">
        {links.map(l => (
          <NavMask key={l.to} {...l} />
        ))}
      </ol>
    </nav>
  );
};

NavList.propTypes = {
  links: PropTypes.array.isRequired
};

const NavMask = ({ to, exact, text }) => {
  const classPrefix = "breadcrumb-item";
  const [isActive, setIsActive] = useState(false);

  function handleIsActive(isActive) {
    setIsActive(isActive !== null);
  }

  return (
    <li
      className={classPrefix + (isActive ? " active" : "")}
      aria-current="page"
    >
      <NavLink to={to} exact={exact} isActive={handleIsActive}>
        {text}
      </NavLink>
    </li>
  );
};

NavMask.propTypes = {
  to: PropTypes.string.isRequired,
  exact: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
};

export default Header;
