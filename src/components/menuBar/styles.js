import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    minWidth: "280px",
    width: "280px",
    backgroundColor: "#0B132B",
    height: "100vh",
    position: "fixed",
    top: "0px",
    left: "0px",
  },
  avatar: {
    cursor: "pointer",
    border: "10px solid #3A506B",
    borderRadius: "999999px",
    width: "150px",
    height: "150px",
    transition: "all 0.2s linear",

    WebkitTouchCallout: "none",
    WebkitUserSelect: "none",
    KhtmlUserSelect: "none",
    MozUserSelect: "none",
    MsUserSelect: "none",
    userSelect: "none",
    "& img": {
      borderRadius: "999999px",
      width: "150px",
      height: "150px",
    },
    "&:hover": {
      transform: "scale(1.05)",
    },
  },
  menuItems: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: "#3A506B",
    padding: "25px 0px",
    cursor: "pointer",
    "& span": {
      padding: "10px 0px",
      fontWeight: "bold",
      fontSize: "20px",
      transition: "all 0.1s linear",
      WebkitTouchCallout: "none",
      WebkitUserSelect: "none",
      KhtmlUserSelect: "none",
      MozUserSelect: "none",
      MsUserSelect: "none",
      userSelect: "none",
    },
  },
}));
