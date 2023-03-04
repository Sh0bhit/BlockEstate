import React from "react";
import HeroStats from "./HeroStats";

export function Hero() {
  return (
    <div>
      <section
        id="home"
        className="hero md:flex-row flex-col sm:py-16 py-6 bg-bgColor w-full sm:mt-6 mt-10"
      >
        <div className="flex sm:flex-row flex-col">
          {" "}
          <div className="hero-left flex-1 flex  flex-col items-start xl:px-0 sm:px-16 px-6 w-full sm:text-left text-center ss:mt-24 mt-16">
            <h1
              className={`hero-heading text-primary font-orbitron font-semibold md:text-[70px] ss:text-[60px] text-[40px] md:leading-[80px] ss:leading-[70px] leading-[50px] w-full`}
            >
              Explore the future <br className="sm:block hidden" />
              of the{" "}
              <span className="head-gradient headTextgradient">RealEstate</span>
            </h1>
            <p className="hero-desc text-primary font-poppins mt-6 sm:mx-0 mx-auto">
              Revolutionize Real Estate Transactions with BlockEstate
            </p>

            <div className="hero-buttons flex mt-[48px] gap-7 sm:mx-0 mx-auto">
              <button className="get-btn text-primary btn-gradient py-[10px] px-[20px] font-poppins">
                Get Started
              </button>
              <div className="btn-gradient">
                <button className="explore-btn text-primary py-[10px] px-[20px] m-[2px] bg-bgColor font-poppins">
                  Explore now
                </button>
              </div>
            </div>
            <HeroStats />
          </div>
          <div className="hero-image">
            {" "}
            <img
              src="/images/hero/hero.png"
              alt="hero"
              className="hero-img md:w-[600px] w-[500px] md:h-[600px] h-[500px] object-cover relative m-auto"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
