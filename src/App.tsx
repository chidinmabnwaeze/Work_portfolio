import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Skills from "./pages/Skills";

function App() {
  return (
    <>
    <Header name="My Portfolio" />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<div>About Page</div>} />
          <Route path="/contact" element={<div>Contact Page</div>} />
          <Route path="/skills" element={<Skills/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
