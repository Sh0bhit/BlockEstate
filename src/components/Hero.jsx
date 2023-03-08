import React from "react";
import HeroStats from "./HeroStats";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export function Hero() {
  return (
    <div>
      <section
        id="home"
        className="hero md:flex-row flex-col sm:py-16 py-6 bg-bgColor w-full sm:mt-16 mt-10"
      >
        <div className="flex sm:flex-row flex-col">
          {" "}
          <div className="hero-left flex-1 flex  flex-col items-start xl:px-0 sm:px-16 px-6 w-full sm:text-left text-center ss:mt-24 mt-16">
            <motion.h1
              initial={{ opacity: 0, translateY: "50%" }}
              whileInView={{ opacity: 1, translateY: "0%" }}
              transition={{
                delay: 0.1,
                duration: 1,
                type: "spring",
                stiffness: 40,
              }}
              className={`hero-heading text-primary font-orbitron font-semibold md:text-[70px] ss:text-[60px] text-[40px] md:leading-[80px] ss:leading-[70px] leading-[50px] w-full`}
            >
              Explore the future <br className="sm:block hidden" />
              of the{" "}
              <span className="head-gradient headTextgradient">RealEstate</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, translateY: "50%" }}
              whileInView={{ opacity: 1, translateY: "0%" }}
              transition={{
                delay: 0.5,
                duration: 1,
                type: "spring",
                stiffness: 40,
              }}
              className="hero-desc text-primary font-poppins mt-6 sm:mx-0 mx-auto"
            >
              Revolutionize Real Estate Transactions with BlockEstate
            </motion.p>

            <div className="hero-buttons flex mt-[48px] gap-7 sm:mx-0 mx-auto">
              <button className="get-btn text-primary btn-gradient py-[10px] px-[20px] font-poppins">
                Get Started
              </button>
              <div className="btn-gradient items-center flex">
                <Link
                  className="explore-btn text-primary py-[10px] px-[20px] m-[2px] bg-bgColor font-poppins"
                  to="about"
                >
                  Know More
                </Link>
              </div>
            </div>
            <HeroStats />
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.5,
              duration: 0.5,
              type: "spring",
              damping: 10,
              stiffness: 50,
            }}
            className="hero-image"
          >
            <img
              src="/images/hero/hero.png"
              alt="hero"
              className="hero-img md:w-[600px] w-[500px] md:h-[600px] h-[500px] object-cover relative m-auto"
              loading="lazy"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
