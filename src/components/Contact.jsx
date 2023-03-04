import React from "react";
import { contactForm } from "../constants/constants";

export default function about() {
  return (
    <section className="about mt-40 mb-[200px] bg-bgColor" id="contact">
      <div className=" flex sm:flex-row flex-col justify-around w-[80%] mx-auto gap-10">
        <div className="contact-img features-gradient m-auto">
          <img
            src="/images/contact/contact.png"
            className="md:w-[500px] w-[400px] md:h-[500px] h-[400px] md:min-w-[200px] xs:min-w-[100px] min-w-[50px] p-5 object-cover"
            alt="contact-img"
            loading="lazy"
          />
        </div>
        <div className="contact-form features-gradient p-10 w-full">
          <h1 className="text-primary font-orbitron xs:text-[40px] text-[25px] font-semibold ">
            Contact Us
          </h1>
          <form className="text-primary font-poppins md:w-[80%] w-[100%] mx-auto mt-5">
            {contactForm.map((form) => {
              return (
                <div key={form.tittle} className="w-full">
                  <label for={`${form.tittle}`} className="text-[15px]">
                    {form.text}
                  </label>
                  <br />
                  <input
                    name={`${form.tittle}`}
                    type={`${form.type}`}
                    placeholder={`${form.placeholder}`}
                    className="block py-3 px-5 bg-input rounded-md w-full  focus:white"
                  />
                  <br />
                </div>
              );
            })}
            <label for="message">Message</label>
            <textarea
              name="message"
              type="textarea"
              placeholder="Leave a comment"
              className="block py-3 px-5 bg-input rounded-md w-full"
            />
            <br />

            <button className="btn-gradient px-[20px] py-[10px] font-poppins">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
