import React from "react";
import { Link } from "gatsby";

export default function NotFoundPage() {
  const links = [
    {
      path: "/",
      text: "Home",
    },
    {
      path: "/about/",
      text: "About",
    },
    {
      path: "/contact/",
      text: "Contact",
    },
  ];

  return (
    <div>
      <h1>404: Not Found</h1>
      <p>
        迷子になってしまったようです😭 サイトマップから探してみませんか？
      </p>
      <ul>
        {links.map((link) => (
          <li key={link.path}>
            <Link to={link.path}>{link.text}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
