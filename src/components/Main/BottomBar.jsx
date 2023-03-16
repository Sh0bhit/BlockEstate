import React from "react";
import { BottomData } from "../../constants/constants";

export default function BottomBar() {
  return (
    <div className="fixed sm:hidden bottom-[-10px] glass-gradient w-full h-[100px] roun z-[5]">
      <div className="text-primary flex justify-around ">
        {BottomData.map((Data) => {
          return (
            <div
              className="flex flex-col mt-5 gap-1 cursor-pointer"
              key={Data.tittle}
            >
              <img
                src={Data.image}
                className={
                  Data.tittle === "Upload"
                    ? "absolute left-[50%] -translate-x-1/2 bottom-14"
                    : "w-8 h-8 mx-auto"
                }
                alt={Data.tittle}
              />
              <h1
                className={`font-orbitron text-[9px] opacity-50 text-center ${
                  Data.tittle === "Upload" ? "mt-9 mr-1" : ""
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
