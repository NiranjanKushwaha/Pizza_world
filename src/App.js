import "./App.css";
import Home from "./Component/Home";
import Header from "./Component/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Component/Footer";
import Cart from "./Component/Cart";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
