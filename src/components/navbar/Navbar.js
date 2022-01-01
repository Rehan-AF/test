import React from "react";
import useStyles from "./NavbarStyle";
import logo from "../../assets/logo.14c52e78.png";
import NavData from "./NavData";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";

function Navbar() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.navbar_container}>
        <div className={classes.nav_logo_con}>
          <div className={classes.nav_logo}>
            <img src={logo} alt="logo" />
          </div>
          <div className={classes.nav_logo_details}>
            <h3>SOLTHZ</h3>
            <h5>Aka Datusing</h5>
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
      </div>
    </>
  );
}

export default Navbar;
