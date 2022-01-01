import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  discord: {
    backgroundColor: "#1e1f25",
    color: "#FFFFFF",
    textAlign: "center",
    padding: "60px 0",
    fontFamily: "'Roboto', sans-serif",

    "& h1": {
      marginTop: "0",
    },
    " & Button": {
      borderColor: "white",
      color: "white",
      fontSize: "14px",
      marginTop: "20px",
      "& img": {
        width: "20px",
        marginRight: "10px",
      },
    },
  },
}));
export default useStyles;
