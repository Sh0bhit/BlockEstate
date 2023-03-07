import { Route, Routes } from "react-router-dom";
// import { Navbar, Footer, Progress } from "./components/export";
import { Footer } from "./components/";
import { Home, About } from "./pages/";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
