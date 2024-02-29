import React from "react";
import { Link } from "gatsby";

export default function NotFoundPage() {
  const links = [
    {
      path: "/",
      text: "Home",
    },
  ];

  return (
    <div>
      <h1>404: Not Found</h1>
      <p>
        {"迷子になってしまったようです😭\nホームに戻りましょう!"}
      </p>
      <ul>
        {links.map((link) => (
          <li key={link.path}>
            <Link to={link.path}>{link.text}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
