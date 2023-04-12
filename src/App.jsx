import React, { Suspense, lazy } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Loading } from "./components";
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Main = lazy(() => import("./pages/Main"));

function App() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div>
      <Suspense fallback={<Loading />}>
        <Routes onUpdate={() => window.scrollTo(0, 0)}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Main/*" element={<Main />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
