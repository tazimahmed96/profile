import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    maxWidth: "1000px",
    color: "#343a40",
    height: "100vh",
    fontSize: "20px"
  },
  title: {
    fontSize: "70px",
    textTransform: "uppercase",
    fontWeight: "bold",
    "& #firstName": {
      color: "#343a40",
      paddingRight: "20px",
    },
    "& #lastName": {
      color: "#3A506B",
    },
  },
  contactInfo: {
    fontSize: "18px",
    textTransform: "uppercase",
    padding: "10px 0px",
    "& #email": {
      color: "#3A506B",
      fontWeight: "bold",
    },
    "& span": {
      padding: "0px 15px 0px 0px",
    },
  },
  bio: {
    padding: "40px 0px",
  },
  contactFooter: {
    display: "flex",
    "& .MuiSvgIcon-root": {
      cursor: "pointer",
      fontSize: "30px",
      borderRadius: "999999px",
      color: "white",
      backgroundColor: "#3A506B",
      padding: "5px",
      margin: "0px 10px",
      transition: "all 0.3s linear",
      "&:hover": {
        transform: "scale(1.05)"
      }
    }
  }
}));
