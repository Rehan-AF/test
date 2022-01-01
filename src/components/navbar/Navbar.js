import React, { useState } from "react";
import useStyles from "./NavbarStyle";
import logo from "../../assets/logo.14c52e78.png";
import NavData from "./NavData";
import { Link } from "react-router-dom";
import Drawer from "@material-ui/core/Drawer";
import MenuIcon from "@material-ui/icons/Menu";

function Navbar() {
  const classes = useStyles();
  const [burger, setBurger] = useState(false);
  console.log(burger);
  const handleMenuClick = () => {
    setBurger(!burger);
    console.log("clicked");
  };
  return (
    <>
      <div className={classes.navbar_container}>
        <div className={classes.nav_logo_con}>
          <div className={classes.nav_logo}>
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <div className={classes.nav_logo_details}>
            <Link to="/">
              <h3>SOLTHZ</h3>
              <h5>Aka Datusing</h5>
            </Link>
          </div>
        </div>
        <div className={classes.nav_navLinks}>
          <ul>
            {NavData.map((val) => {
              return (
                <li>
                  <Link to={val.path}>{val.name}</Link>
                </li>
              );
            })}
          </ul>
          <div className={classes.nav_wal_btn}>
            <button className={classes.navbar_button}>Connect to Wallet</button>
          </div>
        </div>
        <div>
          <button
            onClick={handleMenuClick}
            className={classes.navbar_button_mobile}
          >
            <MenuIcon />
          </button>
        </div>
        <Drawer open={burger} anchor={"right"} onClose={handleMenuClick}>
          <div className={classes.nav_mobile}>
            <ul>
              {NavData.map((val) => {
                return (
                  <li>
                    <Link to={val.path} onClick={handleMenuClick}>
                      {val.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className={classes.nav_wal_btn}>
              <button className={classes.navbar_button}>
                Connect to Wallet
              </button>
            </div>
          </div>
        </Drawer>
      </div>
    </>
  );
}

export default Navbar;
