import React, { useEffect, useState } from "react";
import {
  SidebarLeft,
  SidebarRight,
  Topbar,
  Cards,
  Banner,
  BottomBar,
  Product,
  Upload,
  Loading,
} from "../components";
import { ethers } from "ethers";
import { Route, Routes } from "react-router-dom";

export default function Main({
  provider,
  broker,
  realEstate,
  estates,
  contractPrice,
  setRenderLimit,
  isRendered,
  fullRendered,
}) {
  const [balance, setBalance] = useState(0);
  const [account, setAccount] = useState(null);
  const [loaded, setLoaded] = useState(false);

  function pull_bal(data) {
    setBalance(data);
  }

  function getWallet() {
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
  }
  getWallet();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {loaded ? (
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
                      estates={estates}
                      contractPrice={contractPrice}
                      setRenderLimit={setRenderLimit}
                      isRendered={isRendered}
                      fullRendered={fullRendered}
                    />
                  </div>
                }
              />
              <Route
                path="property/:id"
                element={
                  <div>
                    <Product
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
          </section>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
}
