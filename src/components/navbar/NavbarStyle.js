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
    padding: "10px 7.500em",
    fontFamily: "'Roboto', sans-serif",
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
    width: "80%",
    display: "flex",
    justifyContent: "flex-end",
    "& ul": {
      display: "flex",
      listStyle: "none",
    },
    "& li": {
      margin: "0 10px",
      fontFamily: "'Roboto', sans-serif",
      "& a": {
        textDecoration: "none",
        color: "#fff",
        textShadow: " 0 0 7px rgb(218 112 214 / 50%)",
        fontSize: "16px",
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
    "&:hover": {
      transition: "all 1s ease-in",
      borderRadius: "20px",
      backgroundColor: "orchid",
      border: "1px solid #f5c2f3",
      color: "#f3f3f3",
    },
  },
}));
export default useStyles;
