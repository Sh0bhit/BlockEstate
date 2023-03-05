import React from "react";
import { motion } from "framer-motion";

export default function Aim() {
  return (
    <section className="mt-[20px] justify-between bg-bgColor">
      <div className="Aim-container flex sm:flex-row flex-col w-[80%] mx-auto sm:gap-24 ss:gap-12 gap-10">
        <div className="Aim-img lg:min-w-[500px] md:min-w-[400px] xs:min-w-[300px] min-w-[50%] m-auto">
          <motion.img
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2 }}
            src="/images/Aim/Aim-img.png"
            alt="aim"
            loading="lazy"
          ></motion.img>
        </div>
        <div className="aim-txt flex flex-col justify-center">
          <motion.h1
            initial={{ opacity: 0, translateY: "50%" }}
            whileInView={{ opacity: 1, translateY: "0%" }}
            transition={{
              delay: 0.1,
              duration: 0.5,
              type: "spring",
              stiffness: 100,
            }}
            className="text-primary font-orbitron font-semibold md:text-[40px] text-[30px] leading-10"
          >
            Our aim with <span className="headTextgradient">BlockEstate</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, translateY: "50%" }}
            whileInView={{ opacity: 1, translateY: "0%" }}
            transition={{
              delay: 0.3,
              duration: 0.5,
              type: "spring",
              stiffness: 100,
            }}
            className="text-primary font-poppins sm:mt-5 mt-2 md:text-[15px] text-[13px] mx-auto leading-5"
          >
            Our objective with BlockEstate is to establish a blockchain-based
            platform that enhances the efficiency and transparency of real
            estate transactions, providing a higher level of trust and
            convenience for both buyers and sellers.
          </motion.p>
          <button className="btn-gradient py-[10px] px-[20px] w-[150px]  sm:mt-10 mt-5  text-primary font-poppins">
            Know More
          </button>
        </div>
      </div>
    </section>
  );
}
