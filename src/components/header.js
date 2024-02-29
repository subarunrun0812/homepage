import React from "react";
import { Link } from "gatsby";

const homeStyle =
{
  marginRight: "100px",
  display: "flex", // Center horizontally
  justifyContent: "flex-end", // Align to right edge
}


export default function Header(){
  return (
    document.title = "SasakiSubaru's Blog",
    <header>
      <Link to="/">
        <h3 style={homeStyle}>Home</h3>
      </Link>
    </header>
  );
};
