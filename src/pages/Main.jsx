import React from "react";
import {
  SidebarLeft,
  SidebarRight,
  Topbar,
  Cards,
  Banner,
  BottomBar,
  Product,
  Upload,
} from "../components";
import { ethers } from "ethers";
import { useEffect, useState } from "react";
import config from "../config.json";
import Broker from "../abis/Broker.json";
import RealEstate from "../abis/RealEstate.json";
import { Route, Routes } from "react-router-dom";

export default function Main() {
  const [provider, setProvider] = useState(null);
  const [broker, setBroker] = useState(null);
  const [account, setAccount] = useState(null);
  const [balance, setBalance] = useState(0);
  const [cardId, setCardId] = useState(0);
  const [realEstate, setRealEstate] = useState(null);
  const [estates, setEstates] = useState([]);
  const [showModal, setShowModal] = useState(true);

  const [contractPrice, setContractPrice] = useState([]);

  function pull_bal(data) {
    setBalance(data);
  }

  function pull_CardId(id) {
    setCardId(id);
  }

  const loadBlockchainData = async () => {
    // const provider = new ethers.providers.Web3Provider(window.ethereum);

    const provider =
      window.ethereum != null
        ? new ethers.providers.Web3Provider(window.ethereum)
        : new ethers.providers.JsonRpcProvider(
            "https://eth-sepolia.g.alchemy.com/v2/aEEbNSfRHYdNfw6_INth1I-g5ISbXCCe"
          );

    setProvider(provider);
    const network = await provider.getNetwork();

    console.log(provider);

    const realEstate = new ethers.Contract(
      config[network.chainId].realEstateContract.address,
      RealEstate,
      provider
    );
    setRealEstate(realEstate);

    const broker = new ethers.Contract(
      config[network.chainId].brokerContract.address,
      Broker,
      provider
    );
    setBroker(broker);

    const totalSupply = await realEstate.totalSupply();
    console.log(totalSupply.toString());

    const estates = [];

    for (var i = 1; i <= totalSupply; i++) {
      const uri = await realEstate.tokenURI(i);
      const response = await fetch(uri);
      const metadata = await response.json();

      estates.push(metadata);
    }

    setEstates(estates);
    setShowModal(false);

    const contractData = [];

    for (var j = 1; j <= totalSupply; j++) {
      const data = await broker.property(j);
      const price = ethers.utils.formatEther(data["price"]);
      contractData.push(price);
    }

    setContractPrice(contractData);

    if (window.ethereum) {
      window.ethereum.on("accountsChanged", async () => {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setAccount(accounts[0]);
        const balance = await provider.getBalance(accounts[0]);
        const balanceInEth = ethers.utils.formatEther(balance);
        setBalance(balanceInEth);
      });
    }
  };

  useEffect(() => {
    loadBlockchainData();
  }, []);

  return (
    <div>
      <Topbar
        account={account}
        setAccount={setAccount}
        provider={provider}
        bal={pull_bal}
      />
      <SidebarLeft />
      <SidebarRight balance={balance} />
      <BottomBar />

      <section className="sm:mx-[230px] mx-auto sm:w-auto w-[80%]">
        <Routes>
          <Route
            path="upload"
            element={
              <Upload
                broker={broker}
                account={account}
                provider={provider}
                realEstate={realEstate}
              />
            }
          />
          <Route
            path="mobileUpload"
            element={
              <Upload
                broker={broker}
                account={account}
                provider={provider}
                realEstate={realEstate}
              />
            }
          />
          <Route
            path=""
            element={
              <div>
                <Banner />
                <Cards
                  cardId={pull_CardId}
                  estates={estates}
                  contractPrice={contractPrice}
                />
              </div>
            }
          />
          <Route
            path="Estatedetails"
            element={
              <div>
                <Product
                  id={cardId}
                  broker={broker}
                  provider={provider}
                  account={account}
                  estates={estates}
                  realEstate={realEstate}
                  contractPrice={contractPrice}
                />
              </div>
            }
          />
        </Routes>
        {showModal && (
          <div className="glass-gradient p-10 fixed font-orbitron text-primary left-[50%] translate-x-[-50%] top-[50%] z-50">
            Loading Data From IPFS Plz Wait....
          </div>
        )}
      </section>
    </div>
  );
}
