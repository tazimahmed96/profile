import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles(theme =>({
    container: {
        display: "flex",
        flexDirection: "row"
    },
    pageContainer: {
        // marginLeft: "calc(20% + 20px)",
        marginLeft: "300px",
        marginRight: "20px",
        width: "100%"
    }
}))