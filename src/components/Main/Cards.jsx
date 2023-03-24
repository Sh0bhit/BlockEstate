import React from "react";

export default function Cards({ homes }) {
  return (
    <div className="xs:mt-10 mt-[150px] mb-[100px] sm:flex grid grid-cols-2 xs:gap-8 gap-5 flex-wrap justify-center">
      {homes.map((home, index) => {
        return (
          <div
            className="flex relative sm:w-[200px] xs:w-[200px] w-[150px] sm:h-[300px] xs:h-[250px] h-[200px] sm:mx-0 mx-auto"
            key={index}
          >
            <img
              src={home.image}
              alt={`${home.name}-img`}
              className="rounded-3xl object-cover"
            />
            <div className="card-gradient absolute bottom-0 w-full xs:h-[40%] h-[42%] cursor-pointer">
              <h1 className="text-primary font-orbitron font-semibold xs:p-3 p-1 xs:text-[15px] text-[12px]">
                {home.name}
              </h1>
              <div className="flex px-3 justify-between mt-1">
                <div className="flex">
                  <div className="flex flex-col mx-1 text-primary font-poppins my-auto">
                    <p className="xs:text-[9px] text-[8px] opacity-80 ">Area</p>
                    <h1 className="text-[11px] ">
                      {home.attributes[4].value} sqft
                    </h1>
                  </div>
                </div>
                <div className="flex flex-col mx-1 text-primary font-poppins my-auto px-3">
                  <p className="xs:text-[10px] text-[8px] opacity-80 ">Price</p>
                  <h1 className="xs:text-[13px] text-[10px] xs:font-normal font-bold">
                    {home.attributes[0].value} Eth
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
