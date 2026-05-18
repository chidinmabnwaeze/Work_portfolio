import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import { useEffect } from "react";
import initReveal from "./utils/reveal";

function App() {
  useEffect(() => {
    initReveal();
  }, []);
  return (
    <>
      <Header name="My Portfolio" />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/skills" element={<Skills />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
