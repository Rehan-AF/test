import React from "react";

import useStyles from "./SlothStyle";
import SlothData from "./slothData";
function SlothMint() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.slothMint}>
        <div className={classes.slothMint_details}>
          <h1>
            Who let the SLOTHz
            <br /> out!?
          </h1>
          <h3>Join the SLOTHz Gang!</h3>
        </div>
        <div className={classes.slothMint_img_con}>
          {SlothData.map((val) => {
            return (
              <div className={classes.slothMint_imgDiv_}>
                <img src={val.img} alt={val.alt} />
              </div>
            );
          })}
        </div>
        <div className={classes.sloth_mintButton}>
          <button>MINT NOW</button>
        </div>
      </div>
    </>
  );
}

export default SlothMint;
