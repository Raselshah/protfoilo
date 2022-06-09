import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavMenu = () => {
  const menuItem = (
    <>
      <li className="text-base-100 text-md tracking-widest uppercase hover:text-secondary px-2">
        {" "}
        <a href="#home">Home</a>{" "}
      </li>
      <li className="text-base-100 text-md tracking-widest uppercase hover:text-secondary px-2">
        {" "}
        <a href="#service">Project</a>{" "}
      </li>
      <li className="text-base-100 text-md tracking-widest uppercase hover:text-secondary px-2">
        {" "}
        <a href="#contact">Contact me</a>{" "}
      </li>
    </>
  );
  return (
    <div class="navbar bg-neutral p-4">
      <div class="navbar-start">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-neutral rounded-box w-52"
          >
            {menuItem}
            <a
              target="_blank"
              rel="noreferrer"
              href={
                "https://drive.google.com/file/d/1fDvMGw2XzWxJaVWv6025Op57v49HNBL4/view?usp=sharing"
              }
              class="btn btn-primary tracking-widest uppercase text-base-100"
            >
              Download Resume
            </a>
          </ul>
        </div>
        <a class="btn btn-ghost normal-case text-2xl text-base-100">
          Rasel<span className="text-secondary">Shah</span>{" "}
        </a>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal p-0">
          {menuItem}
          <a
            target="_blank"
            rel="noreferrer"
            href={
              "https://drive.google.com/file/d/1fDvMGw2XzWxJaVWv6025Op57v49HNBL4/view?usp=sharing"
            }
            class="btn btn-primary tracking-widest uppercase text-base-100"
          >
            Download Resume
          </a>
        </ul>
      </div>
    </div>
  );
};

export default NavMenu;
