import React from "react";
import {
  SidebarLeft,
  SidebarRight,
  Topbar,
  Cards,
  Banner,
  BottomBar,
} from "../components";
import { ethers } from "ethers";
import { useEffect, useState } from "react";
import config from "../config.json";
import RealEstate from "../abis/RealEstate.json";
import Broker from "../abis/Broker.json";

export default function Main() {
  const [provider, setProvider] = useState(null);
  const [broker, setBroker] = useState(null);
  const [homes, setHomes] = useState([]);
  const [account, setAccount] = useState(null);

  const loadBlockchainData = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    setProvider(provider);
    const network = await provider.getNetwork();

    const realEstate = new ethers.Contract(
      config[network.chainId].contract.address,
      RealEstate,
      provider
    );

    const broker = new ethers.Contract(
      config[network.chainId].brokerContract.address,
      Broker,
      provider
    );
    setBroker(broker);

    const totalSupply = await realEstate.totalSupply();

    const homes = [];

    for (var i = 1; i <= totalSupply; i++) {
      const uri = await realEstate.tokenURI(i);
      const response = await fetch(uri);
      const metadata = await response.json();
      homes.push(metadata);
    }

    setHomes(homes);

    window.ethereum.on("accountsChanged", async () => {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setAccount(accounts[0]);
      console.log(accounts[0]);
    });
  };

  useEffect(() => {
    loadBlockchainData();
  }, []);
  return (
    <div>
      <Topbar account={account} setAccount={setAccount} />
      <SidebarLeft />
      <SidebarRight />
      <BottomBar />
      <section className="sm:mx-[230px] mx-auto sm:w-auto w-[80%]">
        <Banner />
        <Cards homes={homes} />
      </section>
    </div>
  );
}
