import { Route, Routes } from "react-router-dom";
import Header from "./layout/Header";
import Basket from "./pages/basket/Index";
import Footer from "./layout/Footer";
import Contact from "./pages/contact/Index";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route element={<Contact />} path="/contact" />
        <Route element={<Basket />} path="/basket" />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
