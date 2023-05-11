import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./layout/Header";
import Basket from "./pages/basket/Index";
import Footer from "./layout/Footer";
import Contact from "./pages/contact/Index";
import About from "./pages/about/Index";
import Shipping from "./pages/shop/Shipping";
import Product from "./pages/shop/Product";
import Shop from "./pages/shop/Index";
import Home from "./pages/home/Index";
import AgeModal from "./components/AgeModal";
import { useState } from "react";

const App = () => {
  const { pathname } = useLocation();
  const [ageModal, setAgeModal] = useState(true);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      {ageModal && <AgeModal setModal={setAgeModal} />}
      <Header />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route path="/shop">
          <Route element={<Shop />} path="" />
          <Route element={<Shipping />} path="shipping" />
          <Route element={<Product />} path="product" />
        </Route>
        <Route element={<About />} path="/about" />
        <Route element={<Contact />} path="/contact" />
        <Route element={<Basket />} path="/basket" />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
