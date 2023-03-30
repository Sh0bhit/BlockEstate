import React from "react";
import { Searchbar, SearchbarMobile } from "./Searchbar";
import { Link } from "react-router-dom";
import { useState } from "react";
import { ethers } from "ethers";

function Topbar({ account, setAccount, provider, bal }) {
  const [toggle, setToggle] = useState(false);

  const connectHandler = async () => {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    setAccount(accounts[0]);
    console.log(accounts[0]);

    const balance = await provider.getBalance(accounts[0]);
    const balanceInEth = ethers.utils.formatEther(balance);
    bal(balanceInEth);
  };

  return (
    <div className="justify-center flex">
      <nav className="navbar w-[95%] flex py-3 justify-between items-center glass-gradient fixed top-0 z-[1]">
        <Link to="/">
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
        </Link>

        <Searchbar />
        <div className="sm:flex hidden mx-10">
          {account ? (
            <button className="btn-gradient md:w-[150px] w-[100px] lg:text-[15px] md:text-[12px] text-[8px] text-center px-2 py-3 text-primary font-orbitron font-semibold cursor-pointer">
              {account.slice(0, 6) + "...." + account.slice(38, 42)}
            </button>
          ) : (
            <button
              className="btn-gradient md:w-[150px] w-[100px] lg:text-[15px] md:text-[12px] text-[8px] text-center px-2 py-3 text-primary font-orbitron font-semibold cursor-pointer"
              onClick={connectHandler}
            >
              Connect Wallet
            </button>
          )}
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
