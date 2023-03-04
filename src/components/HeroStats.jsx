import React from "react";

export default function HeroStats() {
  return (
    <div className="hero-stats flex text-primary gap-10 mt-10 sm:mx-0 mx-auto bg-bgColor">
      <div className="flex flex-col font-orbitron">
        <span className="text-[20px]">29K</span>
        <span className="text-[10px]">Listings</span>
      </div>
      <div className="flex flex-col font-orbitron">
        <span className="text-[20px]">18K</span>
        <span className="text-[10px]">Brokers</span>
      </div>
      <div className="flex flex-col font-orbitron">
        <span className="text-[20px]">25K</span>
        <span className="text-[10px]">Auctions</span>
      </div>
    </div>
  );
}
