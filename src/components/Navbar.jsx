import React from "react";

import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      <nav className="navbar w-full flex py-6 justify-between items-center bg-bgColor  fixed top-0 z-[1]">
        <div className="logo flex justify-between items-center sm:pl-16 pl-5">
          <img
            src="/images/logo/BlockEstateLogo.png"
            alt="logo"
            className="logo-img w-16 h-16"
            loading="lazy"
          />
          <h1 className="logo-text font-orbitron text-primary sm:text-[22px] text-[22px] font-bold">
            BlockEstate
          </h1>
        </div>
        <ul className="nav-buttons list-none sm:flex hidden text-primary justify-end items-center flex-1 pr-16 ">
          {props.link.map((nav, index) => {
            return (
              <li
                key={nav.id}
                className={`font-poppins ${
                  index === props.link.length - 1 ? "mr-0" : "mr-10"
                } cursor-pointer font-normal text-[16px] `}
              >
                {nav.id === "about" ? (
                  <Link to={`${nav.id}`}>{nav.title}</Link>
                ) : props.page === "home" ? (
                  <a href={`#${nav.id}`}>{nav.title}</a>
                ) : (
                  <Link to={`${nav.id}`}>{nav.title}</Link>
                )}
              </li>
            );
          })}
        </ul>
        <div className="mobile-nav sm:hidden flex flex-1 items-center justify-end">
          <img
            src={
              toggle
                ? "/images/navicons/x.png"
                : "/images/navicons/hamburger.png"
            }
            alt="menu"
            className="mobileNavImage w-[28px] h-[28px] cursor-pointer object-contain mr-5"
            loading="lazy"
            onClick={() => setToggle((prev) => !prev)}
          />
          <div
            className={`mobile-menu ${
              toggle ? "flex" : "hidden"
            } p-6 absolute top-20 my-2 min-w-[140px] w-full bg-bgColor sidebar`}
          >
            <ul className="nav-buttons list-none flex flex-col text-primary justify-end items-center flex-1">
              {props.link.map((nav, index) => {
                return (
                  <li
                    key={nav.id}
                    className={`font-poppins ${
                      index === props.link.length - 1 ? "mb-0" : "mb-4"
                    } cursor-pointer font-normal text-[16px]`}
                  >
                    {nav.id === "about" ? (
                      <Link to={`${nav.id}`}>{nav.title}</Link>
                    ) : props.page === "home" ? (
                      <a href={`#${nav.id}`}>{nav.title}</a>
                    ) : (
                      <Link to={`${nav.id}`}>{nav.title}</Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
