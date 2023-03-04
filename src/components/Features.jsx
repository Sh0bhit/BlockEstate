import React from "react";
import { features } from "../constants/constants";

export default function Features() {
  return (
    <section className="features mt-40 bg-bgColor" id="features">
      <div className="features-div w-[80%] features-gradient text-primary flex flex-col mx-auto py-[50px]">
        <div className="features-heading w-[90%] text-center mx-auto">
          <h className="text-primary font-orbitron md:text-[40px] sm:text-[30px] xs:text-[20px] text-[15px] font-semibold ">
            Upload and Sell your{" "}
            <span className="headTextgradient">RealEstate</span>
          </h>
        </div>
        <div className="features-images flex sm:flex-row flex-col sm:gap-0 gap-[40px] justify-around mt-10">
          {features.map((content, index) => {
            return (
              <div
                className="flex flex-col sm:gap-[15px] gap-[5px] justify-center"
                key={content.tittle}
              >
                <img
                  src={`${content.img}`}
                  className="md:w-[60px] w-[50px] mx-auto"
                  alt="features-img"
                  loading="lazy"
                />
                <h className="text-center font-orbitron font-semibold md:text-[20px] text-[15px]">
                  {content.tittle}
                </h>
                <p className="text-center font-poppins md:text-[12px] text-[10px] sm:w-[80%] w-[50%] mx-auto">
                  {content.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
