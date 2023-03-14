import React from "react";
import { TimelineData } from "../constants/constants";
import { motion } from "framer-motion";

export default function Timeline() {
  return (
    <div className="ss:w-[50%] w-[80%] mx-auto mt-24 py-5">
      <motion.h1
        initial={{ opacity: 0, translateY: "50%" }}
        whileInView={{ opacity: 1, translateY: "0%" }}
        transition={{
          delay: 0.5,
          duration: 1,
          type: "spring",
          stiffness: 40,
        }}
        className="headTextgradient font-orbitron font-bold text-center sm:text-[40px] xs:text-[30px] text-[20px] my-10"
      >
        Developement Timeline
      </motion.h1>
      <ol className="relative text-primary border-l-[1px] border-primary">
        {TimelineData.map((timeline) => {
          return (
            <li className="mb-10 ml-4" key={timeline.heading}>
              <motion.div
                initial={{ opacity: 0, translateY: "50%" }}
                whileInView={{ opacity: 1, translateY: "0%" }}
                transition={{
                  delay: 0.2,
                  duration: 1,
                  type: "spring",
                  stiffness: 100,
                }}
                className="h-3 w-3 absolute rounded-full -left-1.5 mt-1.5 bg-primary border border-primary"
              ></motion.div>
              <motion.div
                initial={{ opacity: 0, translateY: "50%" }}
                whileInView={{ opacity: 1, translateY: "0%" }}
                transition={{
                  delay: 0.5,
                  duration: 1,
                  type: "spring",
                  stiffness: 100,
                }}
              >
                <p className="text-primary font-orbitron font-semibold text-[15px] my-2">
                  {timeline.date}
                </p>
                <p className="text-primary font-orbitron font-bold my-2 headTextgradient">
                  {timeline.heading}
                </p>

                <p className="text-primary font-poppins sm:text-[15px] text-[12px] sm:leading-normal leading-4">
                  {timeline.desc}
                </p>
              </motion.div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
