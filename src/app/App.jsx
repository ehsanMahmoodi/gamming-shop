import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import AllGames from "../pages/AllGames/AllGames";
import Cart from "../pages/Cart/Cart";
import Layout from "../Layout/Layout";
import Error404 from "../components/Error404/Error404";


const App = () => {
  return (
    <Routes>
      <Route path={"/"} element={<Home />} />
      <Route path={"/all-games"} element={<AllGames />} />
      <Route path={"/cart"} element={<Cart />} />
      <Route path={"*"} element={<Layout><Error404/></Layout>} />
    </Routes>
  );
};
export default App;
