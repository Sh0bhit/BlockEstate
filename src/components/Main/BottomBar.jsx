import React from "react";
import { BottomData } from "../../constants/constants";

export default function BottomBar() {
  return (
    <div className="fixed sm:hidden bottom-[-10px] glass-gradient w-full h-[80px] roun z-[5]">
      <div className="text-primary flex justify-around ">
        {BottomData.map((Data) => {
          return (
            <div
              className="flex flex-col mt-3 gap-1 cursor-pointer"
              key={Data.tittle}
            >
              <img
                src={Data.image}
                className={
                  Data.tittle === "Upload"
                    ? "absolute left-[50%] -translate-x-1/2 bottom-10"
                    : "w-8 h-8 mx-auto"
                }
                alt={Data.tittle}
              />
              <h1
                className={`font-orbitron text-[7px] opacity-50 text-center ${
                  Data.tittle === "Upload" ? "mt-9 ml-4" : ""
                }`}
              >
                {Data.tittle}
              </h1>
            </div>
          );
        })}
      </div>
    </div>
  );
}
