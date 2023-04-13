import { Route, Routes, useLocation } from "react-router-dom";
import { Home, About, Main } from "./pages/";
import { useCallback, useEffect, useState } from "react";
import { ethers } from "ethers";
import config from "./config.json";
import Broker from "./abis/Broker.json";
import RealEstate from "./abis/RealEstate.json";

function App() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const [provider, setProvider] = useState(null);
  const [broker, setBroker] = useState(null);
  const [realEstate, setRealEstate] = useState(null);
  const [estates, setEstates] = useState([]);
  const [contractPrice, setContractPrice] = useState([]);
  const [renderLimit, setRenderLimit] = useState(8);
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [isRendered, setIsRendered] = useState(false);
  const [fullRendered, setFullRendered] = useState(false);
  const [totalSupply, setTotalSupply] = useState(0);
  const [uniqueBrokers, setUniqueBrokers] = useState(0);

  const loadBlockchainData = async () => {
    const provider =
      window.ethereum != null
        ? new ethers.providers.Web3Provider(window.ethereum)
        : new ethers.providers.WebSocketProvider(process.env.REACT_APP_RPC_URL);

    setProvider(provider);
    const network = await provider.getNetwork();

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
    setIsDataLoaded(true);
  };

  const loadEstates = useCallback(async () => {
    setIsRendered(false);
    if (isDataLoaded) {
      const totalSupply = await realEstate.totalSupply();
      setTotalSupply(totalSupply.toString());

      const estates = [];

      const uniqueBrokers = new Set();

      for (var i = 1; i <= renderLimit; i++) {
        if (i <= totalSupply) {
          const uri = await realEstate.tokenURI(i);
          const response = await fetch(uri);
          const metadata = await response.json();
          estates.push(metadata);
          uniqueBrokers.add(metadata["wallet"]);
        } else {
          setFullRendered(true);
        }
      }

      setIsRendered(true);

      setEstates(estates);
      setUniqueBrokers(uniqueBrokers.size);

      const contractData = [];

      for (var j = 1; j <= renderLimit; j++) {
        const data = await broker.property(j);
        const price = ethers.utils.formatEther(data["price"]);
        contractData.push(price);
      }

      setContractPrice(contractData);
    }
  }, [isDataLoaded, renderLimit, realEstate, broker]);

  useEffect(() => {
    loadEstates();
  }, [loadEstates]);

  useEffect(() => {
    loadBlockchainData();
  }, []);

  return (
    <div>
      <Routes onUpdate={() => window.scrollTo(0, 0)}>
        <Route
          path="/"
          element={
            <Home totalSupply={totalSupply} uniqueBrokers={uniqueBrokers} />
          }
        />
        <Route path="/about" element={<About />} />
        <Route
          path="/Main/*"
          element={
            <Main
              provider={provider}
              broker={broker}
              realEstate={realEstate}
              estates={estates}
              contractPrice={contractPrice}
              setRenderLimit={setRenderLimit}
              isRendered={isRendered}
              fullRendered={fullRendered}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
