import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";

function Topbar() {
  const [counter, setCounter] = useState(true);

  const [toggle, setToggle] = useState(false);

  function changeInput(event) {
    const { value } = event.target;
    if (!value) {
      setCounter((prev) => !prev);
    }
  }

  return (
    <div className="justify-center flex">
      <nav className="navbar w-[95%] flex py-3 justify-between items-center features-gradient fixed top-0 z-[1]">
        <div className="flex justify-between items-center mx-5">
          <img
            className="w-16 h-16"
            src="/images/logo/BlockEstateLogo.png"
            alt="logo"
            loading="lazy"
          />
          <h1 className="text-primary font-orbitron font-semibold md:text-[20px] text-[15px]">
            BlockEstate
          </h1>
        </div>
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
        <div className="sm:flex hidden mx-10">
          <img
            className="w-11 h-11 rounded-full"
            src="/images/profile/pf.png"
            alt="profile"
          />
          <div className="flex flex-col px-2">
            <h1 className="text-primary font-orbitron font-semibold md:text-[15px] text-[13px]">
              Shobhitexe
            </h1>
            <p className="text-primary font-poppins text-[10px]">Logged In</p>
          </div>
        </div>

        <div className="sm:hidden flex-col justify-between  items-center">
          <img
            src={
              toggle ? "/images/navicons/x.png" : "/images/topbar/Search.svg"
            }
            className="w-[28px] h-[28px] cursor-pointer object-contain mx-5"
            alt="menu"
            onClick={() => setToggle((prev) => !prev)}
          />
          <div
            className={`mobile-menu ${
              toggle ? "flex" : "hidden"
            } p-6 absolute top-20 left-0 -z-[3] my-2 w-full bg-bgColor sidebar`}
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
                  className="block py-3 px-16 bg-input rounded-2xl font-poppins text-primary w-[100%]"
                  name="search"
                  onFocus={changeInput}
                  onBlur={changeInput}
                />
              </form>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Topbar;
