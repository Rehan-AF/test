import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  mint_head: {
    textAlign: "center",
    background:
      "linear-gradient(111.31deg,#090a0b 7.84%,rgba(31,7,82,0) 94.81%),#1c0f1d",
    padding: "30px",
    color: "#fff",
    [theme.breakpoints.down("sm")]: {
      padding: "20px",
    },
  },
  mint_details: {
    "& h1": {
      color: "rgb(251, 215, 37)",
      fontFamily: "'Roboto', sans-serif",
      fontSize: "2em",
    },
    "& h3": {
      color: "white",
      fontFamily: "'Roboto', sans-serif",
      fontSize: "16px",
    },
  },
  mint_counter_main: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    padding: "30px 60px",
    [theme.breakpoints.down("md")]: {
      gridTemplateColumns: "1fr",
      padding: "30px 10px",
    },
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
    },
  },
  mint_counter: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textShadow: " 1px 2px 15px hsl(0deg 0% 100% / 60%)",
    color: "hsla(0,0%,100%,.9)",
    border: "3px solid orchid",
    boxShadow: "2px 2px 4px orchid",
    padding: "30px",
    "& h1": {
      fontFamily: "'Roboto', sans-serif",
    },
    "& h3": {
      fontFamily: "'Roboto', sans-serif",
    },
    [theme.breakpoints.down("md")]: {
      width: "90%",
    },
  },
  counters: {
    display: "flex",
    justifyContent: "center",
    "& button": {
      padding: "10px",
      marginTop: "10px",
      fontSize: " 26px",
      color: "orchid",
      marginBottom: "10px",
      textAlign: "center",
      border: "1px solid black",
    },
    "& p": {
      padding: "10px",
      marginTop: "10px",
      fontSize: "26px",
      color: "orchid",
      marginBottom: "10px",
      textAlign: "center",
      background: "white",
      width: "100px",
      textAlign: "center",
      fontFamily: "'Roboto', sans-serif",
    },
    "& button:first-of-type": {
      borderTopLeftRadius: "50px",
      borderBottomLeftRadius: "50px",
    },
    "& button:last-of-type": {
      borderTopRightRadius: "50px",
      borderBottomRightRadius: "50px",
    },
  },
  navbar_button: {
    arginLeft: "30px",
    width: "150px",
    letterSpacing: "1px",
    marginTop: " 15px",
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
    "& p": {
      color: " white",
      marginTop: "10px",
      textShadow: " 1px 2px 15px hsl(0deg 0% 100% / 60%)",
    },
  },
  astro_div: {
    "& img": {
      marginTop: "100px",
      width: "430px",
      height: "400px",
      [theme.breakpoints.down("sm")]: {
        width: "220px",
        height: "200px",
      },
    },
  },
}));
export default useStyles;
