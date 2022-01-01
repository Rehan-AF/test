import React from "react";
import useStyles from "./teamStyle";
import Carousel from "../carousel/CarouselCard";
function Team() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.team_main}>
        <div className={classes.team_details}>
          <h1>TEAM</h1>
          <h3>
            This is the group of crazy nerds that made SLOTHz a reality! Each of
            us is a key component in order to give you guys the NFT art you
            deserve. Each of us is here for the long run, we’re aiming to bring
            SLOTHz to the next level.
          </h3>
        </div>
        <Carousel legth={4} />
      </div>
    </>
  );
}

export default Team;
