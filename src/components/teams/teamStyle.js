import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  team_main: {
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background:
      "linear-gradient(111.31deg,#50204d 7.84%,rgba(141,28,141,0) 94.81%),#8c2487",
    padding: "80px 0",
  },
  team_details: {
    width: "80%",
    marginBottom: "50px",
    "& h1": {
      fontSize: "32px",
      fontWeight: "700",
      textTransform: " uppercase",
      marginBottom: "20px",
      color: "#fbd728",
      fontFamily: "'Roboto', sans-serif",
    },
    "& h3": {
      letterSpacing: "1px",
      fontSize: "1.25rem",
      color: "white",
      fontFamily: "'Roboto', sans-serif",
    },
  },
}));
export default useStyles;
