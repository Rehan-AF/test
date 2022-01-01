import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Mint from "../pages/Mint";
import Stats from "../pages/Stats";
import Roadmap from "../pages/Roadmap";
import Team from "../pages/Team";
import Faq from "../pages/Faq";

const Routers = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/mint" element={<Mint />} />
        <Route exact path="/stats" element={<Stats />} />
        <Route exact path="/roadmap" element={<Roadmap />} />
        <Route exact path="/team" element={<Team />} />
        <Route exact path="/faq" element={<Faq />} />
      </Routes>
    </>
  );
};

export default Routers;
