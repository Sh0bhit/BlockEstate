import React from "react";
import { cardData } from "../../constants/constants";

export default function Cards() {
  return (
    <div className="xs:mt-10 mt-[150px] flex gap-8 flex-wrap justify-center">
      {cardData.map((card) => {
        return (
          <div className="flex relative w-[200px] h-[300px]" key={card.id}>
            <img
              src={card.image}
              alt={`${card.name}-img`}
              className="rounded-3xl object-cover"
            />
            <div className="card-gradient absolute bottom-0 w-full h-[100px] cursor-pointer">
              <h1 className="text-primary font-orbitron font-semibold p-3">
                {card.area}
              </h1>
              <div className="flex px-3 justify-between">
                <div className="flex">
                  <img
                    src={card.profileImg}
                    alt={card.name}
                    className="w-9 h-9 rounded-full"
                  />
                  <div className="flex flex-col mx-1 text-primary font-poppins my-auto">
                    <p className=" text-[9px] opacity-80">Uploaded by</p>
                    <h1 className="text-[11px]">{card.name}</h1>
                  </div>
                </div>
                <div className="flex flex-col mx-1 text-primary font-poppins my-auto px-3">
                  <p className=" text-[10px] opacity-80">Price</p>
                  <h1 className="text-[12px]">{card.price} Eth</h1>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
