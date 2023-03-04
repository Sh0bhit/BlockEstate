import React from "react";

export default function Need() {
  return (
    <section className="need ss:mt-40 mt-20 bg-bgColor">
      <div className="flex sm:flex-row flex-col w-[60%] mx-auto sm:gap-10 gap-5 justify-around">
        <div className="flex-col md:min-w-[450px] sm:min-w-[350px] xs:min-w-[250px] min-w[150px] m-auto">
          <img
            src="/images/need/need-img-1.png"
            className="ss:h-[150px] h-[100px] w-[450px] object-cover rounded-lg my-5"
            alt="need-img"
            loading="lazy"
          />
          <img
            src="/images/need/need-img-2.png"
            className="ss:h-[150px] h-[100px] w-[450px] object-cover rounded-lg mt-5"
            alt="need-img2"
            loading="lazy"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h className="text-primary font-orbitron font-semibold md:text-[40px] text-[30px]">
            Why <span className="headTextgradient">BlockEstate?</span>
          </h>
          <p className="text-primary font-poppins sm:mt-5 mt-1 md:text-[15px] text-[13px]">
            BlockEstate can provide a more secure, transparent, and efficient
            way to buy and sell real estate properties. With its
            blockchain-based platform, buyers and sellers can have a streamlined
            and trustworthy process for transactions. This can save time,
            minimize risk, and ultimately provide a better experience for all
            parties involved.
          </p>
        </div>
      </div>
    </section>
  );
}
