import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ethers } from "ethers";

export default function Product({
  id,
  broker,
  provider,
  account,
  estates,
  realEstate,
  contractPrice,
}) {
  const [estateOwner, setEstateOwner] = useState("");

  const [isListed, setIsListed] = useState(true);

  const [isSold, setIsSold] = useState(false);

  const [resellPrice, setResellPrice] = useState(0);

  const tokens = (n) => {
    return ethers.utils.parseUnits(n.toString(), "ether");
  };

  async function getOwner() {
    const brokerData = await broker.property(id + 1);

    const listed = await brokerData["listed"];
    const isSold = await brokerData["reSold"];

    const owner = await realEstate.connect(provider).ownerOf(id + 1);

    setIsListed(listed);
    setIsSold(isSold);

    listed
      ? isSold
        ? setEstateOwner(owner)
        : setEstateOwner(brokerData["seller"])
      : setEstateOwner(brokerData["owner"]);
  }
  async function buy() {
    const signer = await provider.getSigner();
    const brokerData = await broker.property(id + 1);

    try {
      if (isSold) {
        const transaction = await broker
          .connect(signer)
          .buyProperties(id + 1, broker.address, {
            value: brokerData["price"],
          });

        await transaction.wait();
      } else {
        const transaction = await broker
          .connect(signer)
          .buyProperties(id + 1, realEstate.address, {
            value: brokerData["price"],
          });

        await transaction.wait();
      }
    } catch {
      console.log("Transaction Failed");
    }

    setEstateOwner(brokerData["owner"]);
    const listed = await brokerData["listed"];
    setIsListed(listed);
  }

  async function resell() {
    const signer = await provider.getSigner();

    try {
      const transaction = await broker
        .connect(signer)
        .resellProperties(tokens(resellPrice), id + 1, broker.address, {
          value: tokens(0.001),
        });

      await transaction.wait();

      const owner = await realEstate.connect(signer).ownerOf(id + 1);

      setEstateOwner(owner);
      console.log("Reselling");
    } catch {
      console.log("Transaction Failed");
    }
  }

  useEffect(() => {
    getOwner();
  });

  return (
    <div className="glass-gradient w-[95%] md:mt-[220px] mt-[150px] sm:mb-[20px] mb-[150px] mx-auto">
      {estates[id] && (
        <div className="flex md:flex-row flex-col p-10 gap-14">
          <div className="flex gap-10">
            <Link
              className="absolute top-2 text-primary left-11 cursor-pointer"
              to="/Main"
            >
              {"<--"} Back
            </Link>
            <img
              src={estates[id]["image"]}
              className="w-[300px] md:h-[400px] h-[300px] object-cover rounded-xl mx-auto"
              alt="property"
              loading="lazy"
            />
            <div className="border-l-2 opacity-50 md:block hidden" />
          </div>
          <div className="flex flex-col ">
            <div className="flex flex-col">
              <h1 className="text-primary font-orbitron font-semibold lg:text-[35px] md:text-[30px] text-[25px] headTextgradient lg:leading-10 leading-9">
                {estates[id].tittle}
              </h1>
              <p className="text-primary font-poppins opacity-70 lg:text-[15px] text-[13px]">
                {estates[id].address}
              </p>
            </div>
            <h1 className="text-primary font-orbitron font-semibold lg:text-[25px] text-[20px] mt-5">
              Price :-{" "}
              <span className="font-poppins lg:text-[20px] text-[17px] opacity-90">
                {contractPrice[id]} ETH
              </span>
            </h1>
            <p className="font-poppins text-primary text-[13px] w-[80%] mt-3">
              {estates[id].description}
            </p>
            <div className="border-b-2 mt-5 opacity-40" />
            {estateOwner.toLowerCase() === account ? (
              <div className="font-orbitron text-primary">
                owned By :- You {"("}{" "}
                {estateOwner.slice(0, 6) + "...." + estateOwner.slice(38, 42)}{" "}
                {")"}
              </div>
            ) : (
              <div className="font-orbitron text-primary">
                owned By :-{" "}
                {estateOwner.slice(0, 6) + "...." + estateOwner.slice(38, 42)}
              </div>
            )}
            {!account && (
              <div className="text-primary font-poppins  my-1">
                ⚠️ Connect a wallet to make a transaction
              </div>
            )}
            {isListed ? (
              <button
                className="btn-gradient mt-2 w-[100px] text-center px-2 py-2 text-primary font-orbitron font-semibold cursor-pointer"
                onClick={buy}
                disabled={!account}
              >
                Buy
              </button>
            ) : estateOwner.toLowerCase() === account ? (
              <div>
                <input
                  type="Number"
                  className="block py-3 px-5 bg-input text-primary rounded-md w-full my-3"
                  placeholder="Resell Price"
                  step="0.01"
                  onChange={(event) => {
                    setResellPrice(event.target.value);
                  }}
                  value={resellPrice}
                  required
                />
                <button
                  className="btn-gradient mt-2 w-[100px] text-center px-2 py-2 text-primary font-orbitron font-semibold cursor-pointer"
                  onClick={resell}
                  disabled={!account}
                >
                  Resell
                </button>
              </div>
            ) : (
              <button className="btn-gradient mt-2 w-[100px] text-center px-2 py-2 text-primary font-orbitron font-semibold cursor-pointer">
                Sold Out
              </button>
            )}

            <div className="border-b-2 mt-2 opacity-40" />
            <ul className="flex flex-col text-primary mt-5 text-[15px]">
              <li className="font-orbitron">
                <div>
                  Type of residence:-
                  <span className="font-poppins">
                    {" "}
                    {estates[id].residence}{" "}
                  </span>
                </div>
              </li>
              <li className="font-orbitron">
                <div>
                  Bedrooms:-
                  <span className="font-poppins"> {estates[id].bedrooms} </span>
                </div>
              </li>
              <li className="font-orbitron">
                <div>
                  Bathrooms:-
                  <span className="font-poppins">
                    {" "}
                    {estates[id].bathrooms}{" "}
                  </span>
                </div>
              </li>
              <li className="font-orbitron">
                <div>
                  Year Built:-
                  <span className="font-poppins">
                    {" "}
                    {estates[id].yearbuilt}{" "}
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
