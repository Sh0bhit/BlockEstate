import React from "react";
import { Navbar } from "../components";
import { navAboutLinks, aboutContent, techStack } from "../constants/constants";
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
        <div className="flex sm:flex-row flex-col-reverse w-[80%] mx-auto mt-24 items-center gap-10">
          <motion.p
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.2,
              duration: 0.5,
              type: "spring",
              stiffness: 40,
            }}
            className="text-primary font-poppins mx-auto md:text-[15px] ss:text-[13px] text-[11px] ss:leading-5 leading-4 w-full"
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

          <motion.img
            initial={{ opacity: 0, filter: "blur(30px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            transition={{
              delay: 0.5,
              duration: 0.5,
              type: "spring",
              damping: 10,
              stiffness: 50,
            }}
            src="/images/about/about1.png"
            alt="about1"
            className="object-cover md:w-[400px] w-[300px] md:h-[400px] h-[300px] features-gradient p-5"
          />
        </div>
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
                <div>
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
      </section>
    </div>
  );
}
