import React from "react";
import SlothMint from "../components/slothsMint/SlothMint";
import CardNumber from "../components/saleNumbers/CardNumber";
import MintCounter from "../components/mintCounter/MintCounter";
function Home() {
  return (
    <div>
      <SlothMint />
      <CardNumber />
      <MintCounter />
    </div>
  );
}

export default Home;
