import React from "react";
import { motion } from "framer-motion";
import { aboutContent } from "../constants/constants";

export default function AboutDesc() {
  return (
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
        className="text-primary font-poppins mx-auto md:text-[16px] ss:text-[13px] text-[11px] ss:leading-6 leading-4 w-full"
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
          className="headTextgradient ss:text-[40px] text-[35px] font-bold"
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
  );
}
