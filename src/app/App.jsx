import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import AllGames from "../pages/AllGames/AllGames";
import Cart from "../pages/Cart/Cart";


const App = () => {
  return (
    <Routes>
      <Route path={"/"} element={<Home />} />
      <Route path={"/all-games"} element={<AllGames />} />
      <Route path={"/cart"} element={<Cart />} />
    </Routes>
  );
};
export default App;
