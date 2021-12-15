import React from "react";
import { NavLink } from "react-router-dom";

const links = [
  { url: "/search", text: " 🔎 All" },
  { url: "/news", text: " 💡 News" },
  { url: "/images", text: " 🌙 Images" },
  { url: "/videos", text: " 🔎 Videos" },
];

export const Links = () => {
  return (
    <div classname="flex sm:justify-around justify-between items-center mt-4">
      {links.map(({ url, text }, index) => (
        <NavLink
          className="m-2 mb-0 mt-4"
          to={url}
          key={index}
          activeClassName="text-blue-700 border-b-2 dark:text-blue-300 border-blue-700 pb-2"
        >
          {text}
        </NavLink>
      ))}
    </div>
  );
};
