import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  footer_container: {
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "#1e1f25",
    padding: "30px 7.500em",
    boxShadow: "0 0 6px rgb(255 255 255 / 33%)",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      padding: "30px",
    },
  },
  footer_details: {
    "& h3": {
      fontFamily: "'Roboto', sans-serif",
      color: "#f9d528",
      fontSize: "16px",
    },
    "& h4": {
      fontSize: "16px",
      fontWeight: 700,
      color: "orchid",
      paddingBottom: "12px",
      fontFamily: "'Roboto', sans-serif",
    },
  },
  iconButtons: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    "& div": {
      backgroundColor: "#da73d6",
      marginRight: "4px",
      width: "30px",
      padding: "5px",
      textAlign: "center",
      borderRadius: "5px",
      cursor: "pointer",

      "&:hover": {
        backgroundColor: "#da73d6",
      },
    },
    "& svg": {
      fontSize: "25px",
      color: "#FFFFFF",
    },
    "& img": {
      width: "25px",
    },
    [theme.breakpoints.down("sm")]: {
      justifyContent: "flex-start",
    },
  },
}));
export default useStyles;
