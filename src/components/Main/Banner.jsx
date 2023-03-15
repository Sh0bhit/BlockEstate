import React from "react";
import { motion } from "framer-motion";

export default function Banner() {
  return (
    <div className="w-[90%] glass-gradient md:mt-[220px] mt-[150px] mx-auto xs:block hidden">
      <div className="relative  p-5">
        <img
          src="/images/Banner/banner.png"
          alt="banner"
          className="lg:h-[250px] md:h-[200px] h-[100px] w-full object-cover opacity-10 blur-[5px]"
        />

        <motion.img
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 0.1,
            duration: 0.5,
            type: "spring",
            stiffness: 50,
          }}
          src="/images/Banner/person.png"
          alt="person"
          className="absolute bottom-5 right-5 lg:w-[400px] md:w-[300px] w-[150px]  object-contain"
        />
        <div className="absolute md:left-10 left-5 top-[50%] -translate-y-1/2 flex flex-col lg:gap-5 md:gap-2 gap-1 sm:min-w-[40%] min-w-[50%] w-[40%]">
          <h1 className="text-primary font-orbitron font-bold lg:text-[40px] md:text-[30px] text-[20px]">
            BlockEstate
          </h1>
          <hr />
          <p className="text-primary font-poppins lg:text-[15px] md:text-[13px] text-[8px]">
            Unlock your dreams with BlockEstate - Where property meets
            possibility
          </p>
          <p className="btn-gradient md:w-[150px] w-[100px] lg:text-[15px] md:text-[12px] text-[8px] text-center px-2 py-3 text-primary font-orbitron font-semibold">
            Explore Now
          </p>
        </div>
      </div>
    </div>
  );
}
