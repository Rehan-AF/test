import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  accordion_main: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1e1e24",
    padding: "50px",
    "& .MuiSvgIcon-root": {
      color: "#FFFFFF",
    },

    "& .MuiAccordion-root": {
      backgroundColor: "#1e1e24",
      color: "white",
      boxShadow: "0 0 6px rgb(255 255 255 / 33%)",
      display: "flex",
      flexDirection: "column",

      flex: "1",
    },
  },
}));
export default useStyles;
