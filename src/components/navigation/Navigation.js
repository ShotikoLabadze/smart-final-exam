import React from "react";
import { useState } from "react";
import { Link, useResolvedPath, useMatch } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  const [active, setActive] = useState("");
  return (
    <nav>
      <CustomLink
        to="/about"
        onClick={() => setActive("#about")}
        className={active === "#about" ? "active" : ""}
      >
        about
      </CustomLink>
      <CustomLink
        to="/homepage"
        onClick={() => setActive("#homepage")}
        className={active === "#homepage" ? "active" : ""}
      >
        homepage
      </CustomLink>
    </nav>
  );
}

export default Navigation;

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
