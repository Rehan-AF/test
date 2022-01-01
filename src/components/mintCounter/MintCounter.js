import React, { useState } from "react";
import useStyles from "./MintStyle";
import astro from "../../assets/mint/astro.png";

function MintCounter() {
  const classes = useStyles();
  const [tcounter, setTcounter] = useState();
  return (
    <>
      <div className={classes.mint_head}>
        <div className={classes.mint_details}>
          <h1>MINT</h1>
          <h3>
            YOU'RE JUST ONE TRANSACTION AWAY FROM JOINING THE SLOTHZ ARMY!
          </h3>
        </div>
        <div className={classes.mint_counter_main}>
          <div className={classes.mint_counter}>
            <h1>Mint your SLOTHz!</h1>
            <h3>
              You can mint up to 20 SLOTHz at once. The price per SLOTHz is
              0.045 ETH. 4289 / 9999 SLOTHz minted
            </h3>
            <div className={classes.counters}>
              <button>-</button>
              <p>1</p>
              <button>+</button>
            </div>
            <div className={classes.nav_wal_btn}>
              <button className={classes.navbar_button}>
                Connect to Wallet
              </button>
              <p>
                Make sure you are using the Metamask/Coinbase in-app browser or
                have Metamask installed on your browse
              </p>
            </div>
          </div>
          <div className={classes.astro_div}>
            <img src={astro} />
          </div>
        </div>
      </div>
    </>
  );
}

export default MintCounter;
