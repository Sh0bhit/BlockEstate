import React from "react";
import { motion } from "framer-motion";

export default function Need() {
  return (
    <section className="need ss:mt-40 mt-20 bg-bgColor">
      <div className="flex sm:flex-row flex-col w-[60%] mx-auto sm:gap-10 gap-5 justify-around">
        <div className="flex-col md:min-w-[450px] sm:min-w-[350px] xs:min-w-[250px] min-w[150px] m-auto">
          <motion.img
            initial={{ opacity: 0, translateY: "50%" }}
            whileInView={{ opacity: 1, translateY: "0%" }}
            transition={{
              duration: 0.5,
              delay: 0.1,
              type: "spring",
              stiffness: 100,
            }}
            src="/images/need/need-img-1.png"
            className="ss:h-[150px] h-[100px] w-[450px] object-cover rounded-lg my-5"
            alt="need-img"
            loading="lazy"
          />
          <motion.img
            initial={{ opacity: 0, translateY: "-50%" }}
            whileInView={{ opacity: 1, translateY: "0%" }}
            transition={{
              duration: 0.5,
              delay: 0.1,
              type: "spring",
              stiffness: 100,
            }}
            src="/images/need/need-img-2.png"
            className="ss:h-[150px] h-[100px] w-[450px] object-cover rounded-lg mt-5"
            alt="need-img2"
            loading="lazy"
          />
        </div>
        <div className="flex flex-col justify-center">
          <motion.h1
            initial={{ opacity: 0, translateY: "50%" }}
            whileInView={{ opacity: 1, translateY: "0%" }}
            transition={{
              duration: 0.5,
              delay: 0.1,
              type: "spring",
              stiffness: 100,
            }}
            className="text-primary font-orbitron font-semibold md:text-[40px] text-[30px]"
          >
            Why <span className="headTextgradient">BlockEstate?</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, translateY: "-50%" }}
            whileInView={{ opacity: 1, translateY: "0%" }}
            transition={{
              duration: 0.5,
              delay: 0.1,
              type: "spring",
              stiffness: 100,
            }}
            className="text-primary font-poppins sm:mt-5 mt-1 md:text-[15px] text-[13px]"
          >
            BlockEstate can provide a more secure, transparent, and efficient
            way to buy and sell real estate properties. With its
            blockchain-based platform, buyers and sellers can have a streamlined
            and trustworthy process for transactions. This can save time,
            minimize risk, and ultimately provide a better experience for all
            parties involved.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
