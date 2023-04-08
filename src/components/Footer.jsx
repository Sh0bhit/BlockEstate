import React from "react";
import { socials } from "../data/constants";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <section className="footer" id="footer">
      <div className="bg-footerBg flex ss:px-20 px-5 py-5">
        <div className="footer-logo flex flex-col gap-3 w-full">
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
            src="/images/logo/BlockEstateLogo.png"
            alt="logo"
            className="w-20 h-20 mx-auto"
            loading="lazy"
          ></motion.img>
          <motion.p
            initial={{ opacity: 0, translateY: "100%" }}
            whileInView={{ opacity: 1, translateY: "0%" }}
            transition={{
              delay: 0.5,
              duration: 0.5,
              type: "spring",
              stiffness: 100,
            }}
            className="text-primary font-poppins text-[13px] mx-auto md:w-[40%] sm:w-[50%] w-[100%] text-center"
          >
            Revolutionize real estate with BlockEstate. <br />
            Secure, efficient, and transparent transactions on a
            blockchain-based platform.
          </motion.p>
          <div className="glass-gradient flex flex-col gap-5 px-10 py-5 md:w-[50%] sm:w-[60%] w-[80%] mx-auto mt-5">
            <h1 className="text-primary font-orbitron justify-center text-center mx-auto">
              Follow Us
            </h1>
            <div className=" xs:gap-5 gap-2 flex flex-wrap justify-around mx-auto">
              {socials.map((icon) => {
                return (
                  <motion.img
                    initial={{ opacity: -1, translateY: "100%" }}
                    whileInView={{ opacity: 1, translateY: "0%" }}
                    transition={{
                      delay: icon.delay,
                      duration: 0.5,
                      type: "spring",
                      stiffness: 100,
                    }}
                    key={icon.name}
                    src={`${icon.link}`}
                    alt={`${icon.name}`}
                    className="cursor-pointer h-10 w-10"
                    loading="lazy"
                  ></motion.img>
                );
              })}
            </div>
          </div>
          <hr className="mt-5" />
          <h1 className="text-primary font-poppins mx-auto sm:text-[15px] xs:text-[10px] text-[8px] ">
            Made with ❤️ by shobhitexe | Copyright © 2023 BlockEstate. All
            rights reserved.
          </h1>
        </div>
      </div>
    </section>
  );
}
