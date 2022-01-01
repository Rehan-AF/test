import React from "react";
import SlothMint from "../components/slothsMint/SlothMint";
import CardNumber from "../components/saleNumbers/CardNumber";
import MintCounter from "../components/mintCounter/MintCounter";
import Discord from "../components/discord/Discord";
function Home() {
  return (
    <div>
      <SlothMint />
      <CardNumber />
      <MintCounter />
      <Discord />
    </div>
  );
}

export default Home;
