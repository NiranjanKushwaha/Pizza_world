import "./App.css";
import Home from "./Component/Home/Home";
import Header from "./Component/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Component/Footer/Footer";
import Cart from "./Component/Cart/Cart";
import { GlobalDataContextProvider } from "./Component/globalContext/GlobalContext";

function App() {
  return (
    <BrowserRouter>
      <GlobalDataContextProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </GlobalDataContextProvider>
    </BrowserRouter>
  );
}

export default App;
