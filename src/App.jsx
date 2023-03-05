import { Route, Routes } from "react-router-dom";
import { Navbar, Footer, Progress } from "./components/export";
import { Home, About } from "./pages/export";

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
