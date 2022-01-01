import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  navbar_container: {
    display: "flex",
    background:
      "linear-gradient(111.31deg,#090a0b 7.84%,rgba(31,7,82,0) 94.81%),#41153f",
    boxShadow: "0 2px 15px #891f85",
    color: "white",
  },
  nav_logo_con: {
    display: "flex",
    "& img": {
      width: "50px",
      padding: "2px",
      margin: "2px",
      height: "40px",
    },
  },
  nav_logo_details: {
    textAlign: "start",
    "& h3": {
      margin: 0,
      fontSize: "24px",
      fontWeight: 800,
      textShadow: "0 0 7px orchid",
    },
    "& h5": {
      margin: 0,
      lineHeight: 1,
      fontWeight: 300,
      letterSpacing: 4,
      fontSize: 12,
    },
  },
  nav_navLinks: {
    "& ul": {
      display: "flex",
      listStyle: "none",
    },
  },
}));
export default useStyles;
