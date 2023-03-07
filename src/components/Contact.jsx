import React from "react";
import { contactForm } from "../constants/constants";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="about mt-40 mb-[200px] bg-bgColor" id="contact">
      <div className=" flex sm:flex-row flex-col justify-around w-[80%] mx-auto gap-10">
        <motion.div
          initial={{ opacity: 0, translateY: "-50%" }}
          whileInView={{ opacity: 1, translateY: "0%" }}
          transition={{
            delay: 0.1,
            duration: 0.5,
            type: "spring",
            stiffness: 50,
          }}
          className="contact-img features-gradient m-auto"
        >
          <motion.img
            initial={{ opacity: 0, translateY: "-50%" }}
            whileInView={{ opacity: 1, translateY: "0%" }}
            transition={{
              delay: 0.5,

              type: "spring",
              stiffness: 50,
            }}
            src="/images/contact/contact.png"
            className="md:w-[500px] w-[400px] md:h-[500px] h-[400px] md:min-w-[200px] xs:min-w-[100px] min-w-[50px] p-5 object-cover"
            alt="contact-img"
            loading="lazy"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, translateY: "50%" }}
          whileInView={{ opacity: 1, translateY: "0%" }}
          transition={{
            duration: 0.5,
            delay: 0.1,
            type: "spring",
            stiffness: 50,
          }}
          className="contact-form features-gradient p-10 w-full"
        >
          <h1 className="text-primary font-orbitron xs:text-[40px] text-[25px] font-semibold ">
            Contact Us
          </h1>
          <form className="text-primary font-poppins md:w-[80%] w-[100%] mx-auto mt-5">
            {contactForm.map((form) => {
              return (
                <div key={form.tittle} className="w-full">
                  <motion.label
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{
                      delay: 0.1,
                      duration: 0.5,
                      type: "spring",
                      stiffness: 100,
                    }}
                    htmlFor={`${form.tittle}`}
                    className="text-[15px]"
                  >
                    {form.text}
                  </motion.label>
                  <br />
                  <input
                    name={`${form.tittle}`}
                    type={`${form.type}`}
                    placeholder={`${form.placeholder}`}
                    className="block py-3 px-5 bg-input rounded-md w-full  focus:white"
                    required
                  />
                  <br />
                </div>
              );
            })}
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              type="textarea"
              placeholder="Leave a comment"
              className="block py-3 px-5 bg-input rounded-md w-full"
              required
            />
            <br />

            <button className="btn-gradient px-[20px] py-[10px] font-poppins">
              Submit
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
