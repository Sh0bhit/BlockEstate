import React from "react";

export default function SidebarWallet({ balance }) {
  return (
    <div className="glass-gradient pb-5">
      <h1 className="text-primary font-orbitron font-semibold text-center mt-5">
        <span className="font-poppins font-normal text-[13px]">Your</span>{" "}
        Balance
      </h1>
      <h1 className="text-primary font-orbitron font-semibold w-[40%] mx-auto mt-3 text-[12px] text-center">
        <span className="text-[20px]">{parseFloat(balance).toFixed(3)}</span>{" "}
        MATIC
        <hr className="opacity-70" />
      </h1>
      <div className="flex justify-around">
        <div className="flex flex-col items-center gap-2">
          <div className="mt-7 flex justify-center">
            <img
              src="/images/sidebar/ethereum.svg"
              alt="ethereum"
              className="w-7 h-7"
            />
            <h1 className="text-primary font-orbitron font-semibold my-auto text-[11px]">
              MATIC / Usd
            </h1>
          </div>
          <h1 className="text-primary font-poppins text-[15px]">$1,697.41</h1>{" "}
          <img
            src="/images/sidebar/GraphUp.svg"
            alt="graph"
            className="w-[70px] h-15"
          />
        </div>

        <div className="flex flex-col items-center gap-2">
          <div className="mt-7 flex justify-center">
            <img
              src="/images/sidebar/gas.svg"
              alt="ethereum"
              className=" w-7 h-7"
            />
            <h1 className="text-primary font-orbitron font-semibold my-auto text-[11px]">
              Gas price
            </h1>
          </div>
          <h1 className="text-primary font-poppins text-[15px]">19 gwei</h1>{" "}
          <img
            src="/images/sidebar/GraphDown.svg"
            alt="graph"
            className="w-[70px] h-15"
          />
        </div>
      </div>
    </div>
  );
}
