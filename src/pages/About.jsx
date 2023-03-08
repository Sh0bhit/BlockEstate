import React from "react";
import { Navbar, Stack, AboutDesc, Timeline, Conclusion } from "../components";
import { navAboutLinks } from "../constants/constants";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div>
      <Navbar link={navAboutLinks} page="about" />
      <section className="about mt-28 sm:py-20 py-8">
        <motion.h1
          initial={{ opacity: 0, translateY: "50%" }}
          whileInView={{ opacity: 1, translateY: "0%" }}
          transition={{
            delay: 0.5,
            duration: 1,
            type: "spring",
            stiffness: 40,
          }}
          className="text-primary font-orbitron text-[40px] font-semibold text-center leading-10"
        >
          About this <span className="headTextgradient">project</span>
        </motion.h1>
        <AboutDesc />
        <Stack />
        <Timeline />
        <Conclusion />
      </section>
    </div>
  );
}
