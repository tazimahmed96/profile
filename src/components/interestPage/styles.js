import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    borderTop: "1px solid #6c757d"
  },
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
    textTransform: "uppercase",
    padding: "10px 0px",
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
    },
  },
  bio: {
    padding: "40px 0px",
    fontStyle: "italic"
  },
}));
