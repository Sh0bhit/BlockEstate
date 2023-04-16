import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ethers } from "ethers";
import { motion } from "framer-motion";

export default function Product({
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
  const [showModal, setShowModal] = useState({
    visiblity: false,
    closeBtn: false,
    text: "",
  });

  const tokens = (n) => {
    return ethers.utils.parseUnits(n.toString(), "ether");
  };

  const { id } = useParams();

  async function getOwner() {
    const brokerData = await broker.property(id + 1);

    const listed = await brokerData["listed"];
    const isSold = await brokerData["reSold"];

    setIsListed(listed);
    setIsSold(isSold);

    setEstateOwner(brokerData["seller"]);
  }
  async function buy() {
    const signer = await provider.getSigner();
    const brokerData = await broker.property(id + 1);

    try {
      setShowModal({
        visiblity: true,
        text: "Transaction in progress",
      });

      if (isSold) {
        const transaction = await broker
          .connect(signer)
          .buyProperties(id + 1, broker.address, {
            value: brokerData["price"],
          });

        await transaction.wait();
        setShowModal({
          visiblity: false,
        });
      } else {
        const transaction = await broker
          .connect(signer)
          .buyProperties(id + 1, realEstate.address, {
            value: brokerData["price"],
          });

        await transaction.wait();
        setShowModal({
          visiblity: false,
        });
      }
    } catch (error) {
      console.log(error);
      setShowModal({
        visiblity: true,
        closeBtn: true,
        text: "Transaction Failed",
      });
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
          value: tokens(0.01),
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
            <motion.img
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{
                delay: 0.1,
                duration: 1,
                type: "spring",
                stiffness: 40,
              }}
              src={estates[id]["image"]}
              className="lg:min-w-[300px] min-w-[200px] md:h-[400px] h-[300px] object-cover rounded-xl mx-auto"
              alt="property"
              loading="lazy"
            />
            <div className="border-l-2 opacity-50 md:block hidden" />
          </div>
          <div className="flex flex-col ">
            <div className="flex flex-col">
              <motion.h1
                className="text-primary font-orbitron font-semibold lg:text-[35px] md:text-[30px] text-[25px] headTextgradient lg:leading-10 leading-9"
                initial={{ scale: 0.5 }}
                whileInView={{ scale: 1 }}
                transition={{
                  delay: 0.1,
                  duration: 1,
                  type: "spring",
                  stiffness: 50,
                }}
              >
                {estates[id].tittle}
              </motion.h1>
              <motion.p
                className="text-primary font-poppins opacity-70 lg:text-[15px] text-[13px]"
                initial={{ opacity: 0, translateY: "100%" }}
                whileInView={{ opacity: 1, translateY: "0%" }}
                transition={{
                  delay: 0.3,
                  duration: 1,
                  type: "spring",
                  stiffness: 100,
                }}
              >
                {estates[id].address}
              </motion.p>
            </div>
            <motion.h1
              className="text-primary font-orbitron font-semibold lg:text-[25px] text-[20px] mt-5"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                delay: 0.5,
                duration: 1,
                type: "spring",
                stiffness: 70,
              }}
            >
              Price :-{" "}
              <span className="font-poppins lg:text-[20px] text-[17px] opacity-90">
                {contractPrice[id]} ETH
              </span>
            </motion.h1>
            <motion.p
              className="font-poppins text-primary text-[13px] w-[80%] mt-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                delay: 0.8,
                duration: 1,
                type: "spring",
                stiffness: 100,
              }}
            >
              {estates[id].description}
            </motion.p>
            <div className="border-b-2 mt-5 opacity-40" />
            <motion.div
              initial={{ opacity: 0, rotateX: 180 }}
              whileInView={{ opacity: 1, rotateX: 0 }}
              transition={{
                delay: 0.5,
                duration: 1,
                type: "spring",
                stiffness: 50,
              }}
            >
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
            </motion.div>
            {!account && (
              <motion.div
                className="text-primary font-poppins  my-1"
                initial={{ opacity: 0, rotateX: 180 }}
                whileInView={{ opacity: 1, rotateX: 0 }}
                transition={{
                  delay: 0.9,
                  duration: 1,
                  type: "spring",
                  stiffness: 50,
                }}
              >
                ⚠️ Connect a wallet to make a transaction
              </motion.div>
            )}
            {account && (
              <div>
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
              </div>
            )}

            <div className="border-b-2 mt-2 opacity-40" />
            <ul className="flex flex-col text-primary mt-5 text-[15px]">
              <li className="font-orbitron">
                <motion.div
                  initial={{ opacity: 0, translateY: "50%" }}
                  whileInView={{ opacity: 1, translateY: "0%" }}
                  transition={{
                    delay: 0.3,
                    duration: 1,
                    type: "spring",
                    stiffness: 50,
                  }}
                >
                  Type of residence:-
                  <span className="font-poppins">
                    {" "}
                    {estates[id].residence}{" "}
                  </span>
                </motion.div>
              </li>
              <li className="font-orbitron">
                <motion.div
                  initial={{ opacity: 0, translateY: "50%" }}
                  whileInView={{ opacity: 1, translateY: "0%" }}
                  transition={{
                    delay: 0.4,
                    duration: 1,
                    type: "spring",
                    stiffness: 50,
                  }}
                >
                  Bedrooms:-
                  <span className="font-poppins"> {estates[id].bedrooms} </span>
                </motion.div>
              </li>
              <li className="font-orbitron">
                <motion.div
                  initial={{ opacity: 0, translateY: "50%" }}
                  whileInView={{ opacity: 1, translateY: "0%" }}
                  transition={{
                    delay: 0.5,
                    duration: 1,
                    type: "spring",
                    stiffness: 50,
                  }}
                >
                  Bathrooms:-
                  <span className="font-poppins">
                    {" "}
                    {estates[id].bathrooms}{" "}
                  </span>
                </motion.div>
              </li>
              <li className="font-orbitron">
                <motion.div
                  initial={{ opacity: 0, translateY: "50%" }}
                  whileInView={{ opacity: 1, translateY: "0%" }}
                  transition={{
                    delay: 0.6,
                    duration: 1,
                    type: "spring",
                    stiffness: 50,
                  }}
                >
                  Year Built:-
                  <span className="font-poppins">
                    {" "}
                    {estates[id].yearbuilt}{" "}
                  </span>
                </motion.div>
              </li>
            </ul>
          </div>
        </div>
      )}
      {showModal.visiblity && (
        <div className="glass-gradient p-5 flex flex-col gap-5 fixed font-orbitron text-primary left-[50%] translate-x-[-50%] top-[50%] z-50">
          <img
            src="/images/logo/loading.gif"
            alt="loading"
            className="w-20 h-20 mx-auto"
          />
          {showModal.closeBtn && (
            <img
              src="/images/navicons/x.png"
              alt="close"
              className="w-5 h-5 absolute right-2 top-2 cursor-pointer"
              onClick={() =>
                setShowModal({
                  visiblity: false,
                })
              }
            />
          )}
          {showModal.text}
        </div>
      )}
    </div>
  );
}
