import React from "react";
import { cardData } from "../../constants/constants";

export default function Cards() {
  return (
    <div className="xs:mt-10 mt-[150px] sm:flex grid grid-cols-2 xs:gap-8 gap-5 flex-wrap justify-center">
      {cardData.map((card) => {
        return (
          <div
            className="flex relative sm:w-[200px] xs:w-[200px] w-[150px] sm:h-[300px] xs:h-[250px] h-[200px] sm:mx-0 mx-auto"
            key={card.id}
          >
            <img
              src={card.image}
              alt={`${card.name}-img`}
              className="rounded-3xl object-cover"
            />
            <div className="card-gradient absolute bottom-0 w-full xs:h-[100px] h-[60px] cursor-pointer">
              <h1 className="text-primary font-orbitron font-semibold xs:p-3 p-1 xs:text-[15px] text-[12px]">
                {card.area}
              </h1>
              <div className="flex px-3 justify-between mt-1">
                <div className="flex">
                  <img
                    src={card.profileImg}
                    alt={card.name}
                    className="xs:w-9 w-6 xs:h-9 h-6 rounded-full"
                  />
                  <div className="flex flex-col mx-1 text-primary font-poppins my-auto">
                    <p className="text-[9px] opacity-80 xs:block hidden">
                      Uploaded by
                    </p>
                    <h1 className="text-[11px] xs:block hidden">{card.name}</h1>
                  </div>
                </div>
                <div className="flex flex-col mx-1 text-primary font-poppins my-auto px-3">
                  <p className=" text-[10px] opacity-80 xs:block hidden">
                    Price
                  </p>
                  <h1 className="text-[13px] xs:font-normal font-bold">
                    {card.price} Eth
                  </h1>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
