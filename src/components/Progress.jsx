import React from "react";
import { useScroll, useMotionValueEvent, motion } from "framer-motion";

export default function Progress() {
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => {
    console.log("Page scroll: ", latest);
  });
  const { scrollYProgress } = useScroll();
  return <motion.div style={{ scaleX: scrollYProgress }} />;
}
