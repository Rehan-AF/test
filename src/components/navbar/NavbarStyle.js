import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  navbar_container: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    background:
      "linear-gradient(111.31deg,#090a0b 7.84%,rgba(31,7,82,0) 94.81%),#41153f",
    boxShadow: "0 2px 15px #891f85",
    color: "white",
    height: "50px",
    padding: "10px 0",
    fontFamily: "'Roboto', sans-serif",
    position: "fixed",
    width: "100%",
    zIndex: 1000,
  },
  nav_logo_con: {
    display: "flex",
    justifyContent: "flex start",

    "& img": {
      width: "50px",
      padding: "2px",
      margin: "2px",
      height: "40px",
    },
  },
  nav_logo_details: {
    textAlign: "start",
    marginLeft: "10px",
    "& a": {
      textDecoration: "none",
      color: "white",
    },
    "& h3": {
      margin: 0,
      fontSize: "24px",
      fontWeight: 800,
      textShadow: "0 0 7px orchid",
      fontFamily: "'Roboto', sans-serif",
    },
    "& h5": {
      margin: 0,
      lineHeight: 1,
      fontWeight: 300,
      letterSpacing: 4,
      fontSize: 12,
      fontFamily: "'Roboto', sans-serif",
    },
  },
  nav_navLinks: {
    width: "50%",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
    "& ul": {
      display: "flex",
      listStyle: "none",
      [theme.breakpoints.down("sm")]: {
        flexDirection: "column",
      },
    },
    "& li": {
      fontFamily: "'Roboto', sans-serif",
      padding: "10px",
      marginLeft: "5px",

      "& a": {
        textDecoration: "none",
        color: "#fff",
        textShadow: " 0 0 7px rgb(218 112 214 / 50%)",
        fontSize: "17px",
        "&:hover": {
          transition: "all .5s ease-in",
          marginLeft: "5px",
          color: "orchid",
        },
      },
    },
  },

  navbar_button: {
    arginLeft: "30px",
    width: "150px",
    letterSpacing: "1px",
    marginTop: " 3px",
    height: "40px",
    paddingLeft: "12px",
    paddingRight: "12px",
    cursor: "pointer",
    fontWeight: 500,
    textShadow: "0 0 7px rgb(218 112 214 / 50%)",
    backgroundColor: "transparent",
    border: "1px solid orchid",
    color: "orchid",
    borderRadius: "50px",
    boxShadow: "0 0 15px rgb(218 112 214 / 30%)",
    marginLeft: "20px",
    "&:hover": {
      transition: "all 1s ease-in",
      borderRadius: "20px",
      backgroundColor: "orchid",
      border: "1px solid #f5c2f3",
      color: "#f3f3f3",
    },
  },
  nav_mobile: {
    width: "200px",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background:
      "linear-gradient(111.31deg,#090a0b 7.84%,rgba(31,7,82,0) 94.81%),#41153f",
    boxShadow: "0 2px 15px #891f85",
    color: "white",

    "& ul": {
      display: "flex",
      listStyle: "none",
      [theme.breakpoints.down("sm")]: {
        flexDirection: "column",
        display: "block",
      },
    },
    "& li": {
      fontFamily: "'Roboto', sans-serif",
      padding: "10px",
      // marginLeft: "5px",
      display: "flex",

      "& a": {
        textDecoration: "none",
        color: "#fff",
        textShadow: " 0 0 7px rgb(218 112 214 / 50%)",
        fontSize: "17px",
        "&:hover": {
          transition: "all .5s ease-in",
          marginLeft: "5px",
          color: "orchid",
        },
      },
    },
  },
  navbar_button_mobile: {
    arginLeft: "30px",
    width: "50px",
    letterSpacing: "1px",
    marginTop: " 3px",
    height: "40px",
    paddingLeft: "12px",
    paddingRight: "12px",
    cursor: "pointer",
    fontWeight: 500,
    textShadow: "0 0 7px rgb(218 112 214 / 50%)",
    backgroundColor: "transparent",
    border: "1px solid orchid",
    color: "orchid",
    borderRadius: "50px",
    boxShadow: "0 0 15px rgb(218 112 214 / 30%)",
    marginLeft: "20px",
    "&:hover": {
      transition: "all 1s ease-in",
      borderRadius: "20px",
      backgroundColor: "orchid",
      border: "1px solid #f5c2f3",
      color: "#f3f3f3",
    },
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));
export default useStyles;
