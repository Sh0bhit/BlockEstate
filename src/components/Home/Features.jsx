import React from "react";
import { features } from "../../data/constants";
import { motion } from "framer-motion";

export default function Features() {
  return (
    <section className="features mt-40 bg-bgColor" id="features">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 0.5,
          delay: 0.3,
          type: "spring",
          stiffness: 100,
        }}
        className="features-div w-[80%] glass-gradient text-primary flex flex-col mx-auto py-[50px]"
      >
        <motion.div
          initial={{ opacity: 0, translateY: "50%" }}
          whileInView={{ opacity: 1, translateY: "0%" }}
          transition={{
            delay: 0.3,
            duration: 0.5,
            type: "spring",
            stiffness: 100,
          }}
          className="features-heading w-[90%] text-center mx-auto"
        >
          <h1 className="text-primary font-orbitron md:text-[40px] sm:text-[30px] xs:text-[20px] text-[15px] font-semibold ">
            Upload and Sell your{" "}
            <span className="headTextgradient">RealEstate</span>
          </h1>
        </motion.div>
        <div className="features-images flex sm:flex-row flex-col sm:gap-0 gap-[40px] justify-around mt-10">
          {features.map((content, index) => {
            return (
              <div
                className="flex flex-col sm:gap-[15px] gap-[5px] justify-center"
                key={content.tittle}
              >
                <motion.img
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{
                    delay: 0.6,
                    duration: 0.5,
                    type: "spring",
                    stiffness: 100,
                  }}
                  src={`${content.img}`}
                  className="md:w-[60px] w-[50px] mx-auto"
                  alt="features-img"
                  loading="lazy"
                />
                <motion.h1
                  initial={{ opacity: 0, translateY: "50%" }}
                  whileInView={{ opacity: 1, translateY: "0%" }}
                  transition={{
                    delay: 0.3,
                    duration: 0.5,
                    type: "spring",
                    stiffness: 100,
                  }}
                  className="text-center font-orbitron font-semibold md:text-[20px] text-[15px]"
                >
                  {content.tittle}
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, translateY: "50%" }}
                  whileInView={{ opacity: 1, translateY: "0%" }}
                  transition={{
                    delay: 0.6,
                    duration: 0.5,
                    type: "spring",
                    stiffness: 100,
                  }}
                  className="text-center font-poppins md:text-[12px] text-[10px] sm:w-[80%] w-[50%] mx-auto"
                >
                  {content.desc}
                </motion.p>
              </div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
