import React from "react";
import useStyles from "./FooterStyle";
import TwitterIcon from "@material-ui/icons/Twitter";
import Discord from "../../assets/discord.png";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";

function Footer() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.footer_container}>
        <div className={classes.footer_details}>
          <h3>© 2021 SLOTHz</h3>
          <h4>Made with love by the SLOTHz team!</h4>
        </div>
        <div className={classes.iconButtons}>
          <div size="small">
            <TwitterIcon />
          </div>
          <div size="small">
            <img src={Discord} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
