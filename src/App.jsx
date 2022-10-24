import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Navbar from "./Components/Navbar";
import { motion, AnimatePresence } from "framer-motion";
import Planet from "./pages/Planet.jsx";
import Home from "./pages/Home";

function App() {


  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main>
        <div>
          <AnimatePresence exitBeforeEnter>
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/:planets" element={<Planet />} />
            </Routes>
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}

export default App;
