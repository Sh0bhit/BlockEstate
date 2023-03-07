import React from "react";
import { Navbar } from "../components";
import { navAboutLinks, aboutContent } from "../constants/constants";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div>
      <Navbar link={navAboutLinks} page="about" />
      <section className="about sm:mt-28 mt-10 sm:py-20 py-8">
        <motion.h1
          initial={{ opacity: 0, translateY: "50%" }}
          whileInView={{ opacity: 1, translateY: "0%" }}
          transition={{
            delay: 0.5,
            duration: 1,
            type: "spring",
            stiffness: 40,
          }}
          className="text-primary font-orbitron text-[40px] font-semibold text-center"
        >
          About this <span className="headTextgradient">project</span>
        </motion.h1>
        <div className="flex w-[80%] mx-auto mt-24 items-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              delay: 0.5,
              duration: 0.5,
              type: "spring",
              damping: 10,
              stiffness: 50,
            }}
            className="text-primary font-poppins w-[50%] mx-auto text-[18px] leading-8"
          >
            <motion.span
              initial={{ opacity: 0, translateY: "50%" }}
              whileInView={{ opacity: 1, translateY: "0%" }}
              transition={{
                delay: 1,
                duration: 1,
                type: "spring",
                stiffness: 40,
              }}
              className="headTextgradient text-[40px] font-bold"
            >
              BlockEstate{" "}
            </motion.span>
            {aboutContent[0]["content"]}
          </motion.p>
          <img
            src="/images/about/about1.png"
            alt="about1"
            className="object-contain w-[500px] features-gradient p-5"
          />
        </div>
      </section>
    </div>
  );
}
