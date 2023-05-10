import { Route, Routes } from "react-router-dom";
import Header from "./layout/Header";
import Basket from "./pages/basket/Index";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route element={<Basket />} path="/basket" />
      </Routes>
    </>
  );
};

export default App;
