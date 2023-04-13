import React from "react";

export default function HeroStats({ totalSupply, uniqueBrokers }) {
  return (
    <div className="hero-stats flex text-primary gap-10 mt-10 sm:mx-0 mx-auto bg-bgColor">
      <div className="flex flex-col font-orbitron">
        <span className="text-[20px]">{totalSupply}</span>
        <span className="text-[10px]">Listings</span>
      </div>
      <div className="flex flex-col font-orbitron">
        <span className="text-[20px]">{uniqueBrokers}</span>
        <span className="text-[10px]">Brokers</span>
      </div>
      <div className="flex flex-col font-orbitron">
        <span className="text-[20px]">-</span>
        <span className="text-[10px]">Auctions</span>
      </div>
    </div>
  );
}
