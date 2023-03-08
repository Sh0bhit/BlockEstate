import React from "react";
import { socials } from "../constants/constants";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <section className="footer" id="footer">
      <motion.div
        initial={{ opacity: 0, translateY: "50%" }}
        whileInView={{ opacity: 1, translateY: "0%" }}
        transition={{
          delay: 0.1,
          duration: 0.5,
        }}
        className="bg-footerBg flex ss:px-20 px-5 py-5"
      >
        <div className="footer-logo flex flex-col gap-3 w-full">
          <img
            src="/images/logo/BlockEstateLogo.png"
            alt="logo"
            className="w-20 h-20 mx-auto"
            loading="lazy"
          ></img>
          <p className="text-primary font-poppins text-[13px] mx-auto md:w-[40%] sm:w-[50%] w-[100%] text-center">
            Revolutionize real estate with BlockEstate. <br />
            Secure, efficient, and transparent transactions on a
            blockchain-based platform.
          </p>
          <div className="features-gradient flex flex-col gap-5 px-10 py-5 md:w-[50%] sm:w-[60%] w-[80%] mx-auto mt-5">
            <h1 className="text-primary font-orbitron justify-center text-center mx-auto">
              Follow Us
            </h1>
            <div className=" xs:gap-5 gap-2 flex flex-wrap justify-around mx-auto">
              {socials.map((icon) => {
                return (
                  <img
                    key={icon.name}
                    src={`${icon.link}`}
                    alt={`${icon.name}`}
                    className="cursor-pointer h-10 w-10"
                    loading="lazy"
                  ></img>
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
      </motion.div>
    </section>
  );
}
