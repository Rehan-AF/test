import React from "react";
import Button from "@material-ui/core/Button";
import useStyles from "./DiscordStyle"

function Discord() {
    const className = useStyles();
  return (
    <>
      <div className={classes.}>
        <h1>Join our Discord Community</h1>
        <p>
          The best community in this space with +2,000 members, with games,
          contests, giveaways, scholarships and more to come!
        </p>
        <Button variant="outlined" size="large">
          Default
        </Button>
      </div>
    </>
  );
}

export default Discord;
