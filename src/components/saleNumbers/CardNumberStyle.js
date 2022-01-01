import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  CardNumber_main_div: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-evenly",

    background: "#1e1f25",
    boxShadow: "0 2px 15px hsl( 0% 100% / 18%)",
  },
  cardNumber: {
    fontFamily: "'Roboto', sans-serif",

    height: "150px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    "& h1": {
      fontWeight: "700",
      margin: "30px",
      textAlign: "center",
      color: "#fbd725",
      textShadow: "0 0 7px #fbd725",
      fontSize: "48px",
      lineHeight: " 48px",
      marginBottom: "0",
    },
    "& h3": {
      fontWeight: "500",
      lineHeight: "1.2",
      color: "#fff",
    },
  },
}));
export default useStyles;
