import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    borderTop: "1px solid #6c757d",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    maxWidth: "1000px",
    color: "#343a40",
    height: "100vh",
    fontSize: "20px",
  },
  title: {
    fontSize: "45px",
    textTransform: "uppercase",
    fontWeight: "bold",
    marginBottom: "40px",
    "& #firstName": {
      color: "#343a40",
      paddingRight: "20px",
    },
    "& #lastName": {
      color: "#3A506B",
    },
  },
  school: {
    fontSize: "23px",
    padding: "20px 0px",
    "&:nth-child(2)": {
      padding: "0px"
    },
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    "& .schoolInfo": {
      display: "flex",
      flexDirection: "column",
    },
    "& .schoolInfo #name": {
      color: "#3A506B",
      fontWeight: "bold",
      textTransform: "uppercase",
    },
    "& ul": {
      paddingLeft: "45px"
    },
    "& .schoolInfo #relevant-courses": {
      cursor: "pointer",
      paddingBottom: "10px",
      paddingLeft: "20px",
      fontWeight: "bold",
      display: "flex",
      alignItems: "center",
      WebkitTouchCallout: "none",
      WebkitUserSelect: "none",
      KhtmlUserSelect: "none",
      MozUserSelect: "none",
      MsUserSelect: "none",
      userSelect: "none",
    }
  },
  bio: {
    padding: "40px 0px",
    fontStyle: "italic",
  },
}));
