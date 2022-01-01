import React from "react";
import Button from "@material-ui/core/Button";
import useStyles from "./DiscordStyle";
import img1 from "../../assets/discord.png";

function Discord() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.discord}>
        <h1>Join our Discord Community</h1>
        <p>
          The best community in this space with +2,000 members, with games,
          contests, giveaways, scholarships and more to come!
        </p>
        <Button variant="outlined" size="large">
          <img src={img1} />
          join Now!
        </Button>
      </div>
    </>
  );
}

export default Discord;
