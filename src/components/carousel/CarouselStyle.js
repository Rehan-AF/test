import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  carousel_container: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  carousel_card: {
    "& img": {
      width: "280.6px",
      boxShadow: "0 0 15px rgb(216 98 212 / 53%)",
      borderTopLeftRadius: "5px",
      borderTopRightRadius: "5px",
      margin: "5px",
      marginBottom: "0",
    },
    "& h3": {
      backgroundColor: "#331f32",
      padding: "1px",
      fontWeight: "700",
      borderBottomLeftRadius: "5px",
      borderBottomRightRadius: "5px",
      fontSize: "16px",
      color: "#fbd725",
      margin: "0 5px 5px 5px",
      padding: "17px 5px",
      fontFamily: "'Roboto', sans-serif",
    },
  },
}));
export default useStyles;
