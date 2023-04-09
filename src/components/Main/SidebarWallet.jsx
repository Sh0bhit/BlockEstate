import React, { useEffect, useState } from "react";

export default function SidebarWallet({ balance }) {
  const [gas, setGas] = useState({
    safe: "",
    standard: "",
    fast: "",
  });

  const [price, setPrice] = useState("");

  async function getGas() {
    const gasData = await fetch(
      `https://api.etherscan.io/api?module=gastracker&action=gasoracle&apikey=${process.env.REACT_APP_ETHERSCAN_API_KEY}`
    );
    console.log(process.env.REACT_APP_ETHERSCAN_API_KEY);
    const safeGas = await gasData.json();
    setGas({
      safe: safeGas["result"]["SafeGasPrice"],
      standard: safeGas["result"]["ProposeGasPrice"],
      fast: safeGas["result"]["FastGasPrice"],
    });
  }

  async function getPrice() {
    const getData = await fetch(
      ` https://api.etherscan.io/api?module=stats&action=ethprice&apikey=${process.env.REACT_APP_ETHERSCAN_API_KEY}`
    );
    const priceData = await getData.json();

    setPrice(priceData["result"]["ethusd"]);
  }

  useEffect(() => {
    getGas();
    getPrice();
    const interval = setInterval(() => {
      getGas();
      getPrice();
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="glass-gradient pb-5">
      <h1 className="text-primary font-orbitron font-semibold text-center mt-5">
        <span className="font-poppins font-normal text-[13px]">Your</span>{" "}
        Balance
      </h1>
      <h1 className="text-primary font-orbitron font-semibold w-[40%] mx-auto mt-3 text-[12px] text-center">
        <span className="text-[20px]">{parseFloat(balance).toFixed(3)}</span>{" "}
        ETH
        <hr className="opacity-70" />
      </h1>
      <div className="flex flex-col justify-around">
        <div className="flex flex-col items-center gap-2">
          <div className="mt-7 flex justify-center">
            <img
              src="/images/sidebar/ethereum.svg"
              alt="ethereum"
              className="w-7 h-7"
            />
            <h1 className="text-primary font-orbitron font-semibold my-auto text-[11px]">
              ETH / Usd
            </h1>
          </div>
          <h1 className="text-primary font-poppins text-[17px] font-normal">
            ${price}
          </h1>{" "}
        </div>

        <div className="flex flex-col items-center gap-2">
          <div className="mt-3 flex justify-center">
            <img
              src="/images/sidebar/gas.svg"
              alt="ethereum"
              className=" w-7 h-7"
            />
            <h1 className="text-primary font-orbitron font-semibold my-auto text-[11px]">
              Gas price
            </h1>
          </div>
          <div className="text-[13px] mx-auto text-center">
            <h1 className="text-primary font-poppins ]">
              Safe - {gas.safe} gwei
            </h1>{" "}
            <h1 className="text-primary font-poppins ">
              Standard - {gas.standard} gwei
            </h1>{" "}
            <h1 className="text-primary font-poppins ">
              Fast - {gas.fast} gwei
            </h1>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
