import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";

function Searchbar() {
  const [counter, setCounter] = useState(true);

  function changeInput(event) {
    const { value } = event.target;
    if (!value) {
      setCounter((prev) => !prev);
    }
  }
  return (
    <div className="relative sm:flex hidden">
      <form className="flex items-center">
        <img
          src="/images/topbar/Search.svg"
          className="absolute left-[15px]"
          alt="search"
        />

        {counter && (
          <motion.label
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0,
              duration: 0.5,
              type: "spring",
              stiffness: 100,
            }}
            className="absolute text-primary font-poppins left-1/2 -translate-x-1/2 text-[12px]"
            htmlFor="search"
          >
            Search By City
          </motion.label>
        )}
        <input
          type="text"
          className="block py-3 px-16 bg-input rounded-2xl font-poppins text-primary md:w-[500px] w-[250px]"
          name="search"
          onFocus={changeInput}
          onBlur={changeInput}
        />
      </form>
    </div>
  );
}

function SearchbarMobile() {
  const [counter, setCounter] = useState(true);

  function changeInput(event) {
    const { value } = event.target;
    if (!value) {
      setCounter((prev) => !prev);
    }
  }
  return (
    <motion.div
      initial={{ opacity: -1, translateY: "-100%" }}
      whileInView={{ opacity: 1, translateY: "0%" }}
      transition={{
        delay: 0.1,
        duration: 0.5,
        type: "spring",
        stiffness: 100,
      }}
      className=" p-6 absolute top-20 left-0 my-2 w-full sidebar"
    >
      <div className="relative mx-auto">
        <form className="flex items-center">
          <img
            src="/images/topbar/Search.svg"
            className="absolute left-[15px]"
            alt="search"
          />

          {counter && (
            <motion.label
              className="absolute text-primary font-poppins left-1/2 -translate-x-1/2 text-[12px]"
              htmlFor="search"
            >
              Search By City
            </motion.label>
          )}
          <input
            type="text"
            className="block py-3 px-16 bg-input rounded-2xl font-poppins text-primary w-[100%]"
            name="search"
            onFocus={changeInput}
            onBlur={changeInput}
          />
        </form>
      </div>
    </motion.div>
  );
}

export { Searchbar, SearchbarMobile };
