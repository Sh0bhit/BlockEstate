import React from "react";
import { motion } from "framer-motion";
import { techStack } from "../constants/constants";

export default function Stack() {
  return (
    <div className="w-[80%] features-gradient mx-auto mt-24 py-5">
      <motion.h1
        initial={{ opacity: 0, translateY: "50%" }}
        whileInView={{ opacity: 1, translateY: "0%" }}
        transition={{
          delay: 0.1,
          duration: 0.5,
          type: "spring",
          stiffness: 40,
        }}
        className="text-primary font-orbitron font-semibold text-center xs:text-[40px] text-[30px]"
      >
        Tech Stack
      </motion.h1>
      <div className="flex flex-wrap justify-around py-5">
        {techStack.map((tech) => {
          return (
            <div key={tech.name}>
              <motion.img
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{
                  delay: tech.delay,
                  duration: 0.5,
                  type: "spring",
                  stiffness: 40,
                }}
                whileHover={{ scale: 1.3, transition: { duration: 0.3 } }}
                drag
                dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                dragTransition={{ bounceStiffness: 500, bounceDamping: 10 }}
                dragElastic={0.3}
                src={`${tech.image}`}
                alt={`${tech.name}`}
                className="w-[100px] h-[100px] mx-3 my-5 cursor-pointer"
              />
              <motion.p
                initial={{ opacity: 0, translateY: "100%" }}
                whileInView={{ opacity: 1, translateY: "0%" }}
                transition={{
                  delay: 0.8,
                  duration: 0.5,
                  type: "spring",
                  stiffness: 60,
                }}
                className="text-primary font-poppins text-[15px] text-center"
              >
                {tech.name}
              </motion.p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
