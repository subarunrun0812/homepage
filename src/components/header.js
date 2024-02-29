import React from "react";
import { Link } from "gatsby";

const homeStyle = {
  marginRight: "100px",
  display: "flex", // Center horizontally
  justifyContent: "flex-end", // Align to right edge
  textDecoration: "none", // アンダーバー削除
  color: "#000000", // 通常時の文字色

  // カーソルを合わせた時のスタイル
  "&:hover": {
    color: "#49B4AF",
  },
};

export default function Header() {
  return (
    <header>
      <Link to="/game" style={homeStyle}>
        <h3>Game</h3>
      </Link>
    </header>
  );
}

