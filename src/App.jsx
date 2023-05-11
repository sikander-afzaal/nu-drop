import { Route, Routes } from "react-router-dom";
import Header from "./layout/Header";
import Basket from "./pages/basket/Index";
import Footer from "./layout/Footer";
import Contact from "./pages/contact/Index";
import About from "./pages/about/Index";
import Shipping from "./pages/shop/Shipping";
import Product from "./pages/shop/Product";
import Shop from "./pages/shop/Index";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
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
