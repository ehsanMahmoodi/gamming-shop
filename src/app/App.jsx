import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import AllGames from "../pages/AllGames/AllGames";


const App = () => {
  return (
    <Routes>
      <Route path={"/"} element={<Home />} />
      <Route path={"/all-games"} element={<AllGames />} />
    </Routes>
  );
};
export default App;
