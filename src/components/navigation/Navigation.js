import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  const [active, setActive] = useState("");
  return (
    <nav>
      <Link
        to="/about"
        onClick={() => setActive("#about")}
        className={active === "#about" ? "active" : ""}
      >
        about
      </Link>
      <Link
        to="/homepage"
        onClick={() => setActive("#homepage")}
        className={active === "#homepage" ? "active" : ""}
      >
        homepage
      </Link>
    </nav>
  );
}

export default Navigation;
