import React from "react";
import { useState } from "react";
import { Searchbar, SearchbarMobile } from "./Searchbar";

function Topbar() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="justify-center flex">
      <nav className="navbar w-[95%] flex py-3 justify-between items-center glass-gradient fixed top-0 z-[1]">
        <div className="flex justify-between items-center mx-5">
          <img
            className="w-16 h-16"
            src="/images/logo/BlockEstateLogo.png"
            alt="logo"
            loading="lazy"
          />
          <h1 className="text-primary font-orbitron font-semibold md:text-[20px] text-[15px]">
            BlockEstate
          </h1>
        </div>
        <Searchbar />
        <div className="sm:flex hidden mx-10">
          <img
            className="w-11 h-11 rounded-full"
            src="/images/profile/pf.png"
            alt="profile"
          />
          <div className="flex flex-col px-2">
            <h1 className="text-primary font-orbitron font-semibold md:text-[15px] text-[13px]">
              Shobhitexe
            </h1>
            <p className="text-primary font-poppins text-[10px]">Logged In</p>
          </div>
        </div>

        <div className="sm:hidden flex-col justify-between  items-center">
          <img
            src={
              toggle ? "/images/navicons/x.png" : "/images/topbar/Search.svg"
            }
            className="w-[28px] h-[28px] cursor-pointer object-contain mx-5"
            alt="menu"
            onClick={() => setToggle((prev) => !prev)}
          />
          {toggle && <SearchbarMobile />}
        </div>
      </nav>
    </div>
  );
}

export default Topbar;
