import React from "react";
import SlothMint from "../components/slothsMint/SlothMint";
import CardNumber from "../components/saleNumbers/CardNumber";
import MintCounter from "../components/mintCounter/MintCounter";
import Discord from "../components/discord/Discord";
import Team from "../components/teams/Team";
import Accord from "../components/accordion/Accordion";
function Home() {
  return (
    <div>
      <SlothMint />
      <CardNumber />
      <MintCounter />
      <Discord />
      <Team />
      <Accord />
    </div>
  );
}

export default Home;
