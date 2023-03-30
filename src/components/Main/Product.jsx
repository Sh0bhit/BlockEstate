import React, { useEffect, useState } from "react";

export default function Product({ id, homes, setCardToggle, broker, account }) {
  const [HasBought, setHasBought] = useState(false);
  const [HasSold, setHasSold] = useState(false);
  const [HasInspected, setHasInspected] = useState(false);
  const [HasLended, setHasLended] = useState(false);

  const [buyer, setBuyer] = useState(null);
  const [seller, setSeller] = useState(null);
  const [lender, setLender] = useState(null);
  const [inspector, setInspector] = useState(null);

  const [owner, setOwner] = useState(null);

  const fetchDetails = async () => {
    const Buyer = await broker.buyer(homes[id].id);
    setBuyer(Buyer);

    const Seller = await broker.seller();
    setSeller(Seller);

    const Lender = await broker.lender();
    setLender(Lender);

    const Inspector = await broker.inspector();
    setInspector(Inspector);
  };

  const fetchOwner = async () => {
    if (await broker.isListed(homes[id].id)) {
      const Owner = await broker.buyer(homes[id].id);
      setOwner(Owner);
    }
  };

  useEffect(() => {
    fetchDetails();
    fetchOwner();
  }, [HasSold]);

  return (
    <div className="glass-gradient w-[95%] md:mt-[220px] mt-[150px] sm:mb-[20px] mb-[150px] mx-auto">
      {homes[id] && (
        <div className="flex md:flex-row flex-col p-10 gap-14">
          <div className="flex gap-10">
            <button
              className="absolute top-2 text-primary left-11 cursor-pointer"
              onClick={() => {
                setCardToggle(false);
              }}
            >
              {"<--"} Back
            </button>
            <img
              src={homes[id].image}
              className="w-[300px] md:h-[400px] h-[300px] object-cover rounded-xl mx-auto"
              alt="property"
            />
            <div className="border-l-2 opacity-50 md:block hidden" />
          </div>
          <div className="flex flex-col ">
            <div className="flex flex-col">
              <h1 className="text-primary font-orbitron font-semibold lg:text-[35px] md:text-[30px] text-[25px] headTextgradient lg:leading-10 leading-9">
                {homes[id].name}
              </h1>
              <p className="text-primary font-poppins opacity-70 lg:text-[15px] text-[13px]">
                {homes[id].address}
              </p>
            </div>
            <h1 className="text-primary font-orbitron font-semibold lg:text-[25px] text-[20px] mt-5">
              Price :-{" "}
              <span className="font-poppins lg:text-[20px] text-[17px] opacity-90">
                {homes[id].attributes[0].value} ETH
              </span>
            </h1>
            <p className="font-poppins text-primary text-[13px] w-[80%] mt-3">
              {homes[id].description}
            </p>
            <div className="border-b-2 mt-5 opacity-40" />
            {owner ? (
              <div className="font-orbitron text-primary">
                owned By :- {owner.slice(0, 6) + "...." + owner.slice(38, 42)}
              </div>
            ) : (
              <div>
                {account === inspector ? (
                  <button className="btn-gradient mt-2 w-[100px] text-center px-2 py-2 text-primary font-orbitron font-semibold cursor-pointer">
                    Approve inspection
                  </button>
                ) : account === lender ? (
                  <button className="btn-gradient mt-2 w-[100px] text-center px-2 py-2 text-primary font-orbitron font-semibold cursor-pointer">
                    Approve & Lend
                  </button>
                ) : account === seller ? (
                  <button className="btn-gradient mt-2 w-[100px] text-center px-2 py-2 text-primary font-orbitron font-semibold cursor-pointer">
                    Approve & Sell
                  </button>
                ) : (
                  <button className="btn-gradient mt-2 w-[100px] text-center px-2 py-2 text-primary font-orbitron font-semibold cursor-pointer">
                    Buy
                  </button>
                )}
              </div>
            )}

            <div className="border-b-2 mt-2 opacity-40" />
            <ul className="flex flex-col text-primary mt-5 text-[15px]">
              {homes[id].attributes.map((props, index) => {
                return (
                  <li className="font-orbitron" key={index}>
                    {props.trait_type === "Purchase Price" ? (
                      ""
                    ) : (
                      <div>
                        {props.trait_type} :-{" "}
                        <span className="font-poppins">{props.value} </span>
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
