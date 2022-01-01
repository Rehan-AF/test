import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  slothMint: {
    background:
      "linear-gradient(111.31deg,#090a0b 7.84%,rgba(31,7,82,0) 94.81%),#1c0f1d",

    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  slothMint_details: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    height: "500px",
    margin: "0",
    color: "#FFFFFF",
    textAlign: "center",
    "& h1": {
      margin: "0",
      fontSize: "56px",
      fontWeight: 700,
      lineHeight: "72px",
      color: "#fff",
      textShadow: "3px 3px 4px #891f85",
      fontFamily: "'Roboto', sans-serif",
    },
    "& h3": {
      color: "#fbd725",
      fontFamily: "'Roboto', sans-serif",
      fontSize: "22px",
      textShadow: "0 0 7px #fbd725",
    },
  },
  slothMint_img_con: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
  },
  slothMint_imgDiv_: {
    color: "#891f85",
    borderRadius: "0.25rem",
    border: "1px solid orchid",
    color: "#891f85",
    borderRadius: "0.25rem",
    border: "1px solid orchid",
    height: "300px",
    margin: "15px",
    "& img": {
      maxWidth: "300px",
    },
  },
  sloth_mintButton: {
    height: "200px",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
    "& button": {
      boxShadow: "1px 3px 15px hsl(0deg 0% 100% / 28%)",
      padding: "14px 50px",
      borderRadius: "50px",
      border: "3px solid orchid",
      fontSize: "25px",
      letterSpacing: ".5px",
      margin: "20px",
      backgroundColor: "transparent",
      color: "#fff",
      textShadow: "0 0 7px #fff",
      cursor: "pointer",
    },
  },
}));
export default useStyles;
