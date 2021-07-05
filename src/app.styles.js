import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  container: {
    background: "#eee",
    padding : theme.spacing (8, 0, 6),
  },
  anyfuck: {
    marginRight: "20px"
  },
  buttons: {
    marginTop: "40px"
  },
  cardGrid: {
    padding: "20px 0"
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  cardMedia: {
    paddingTop: "52.25%" // 16:9
  },
  cardContent: {
    flexGrow: "1"
  },
  footer: {
    backgroundColor: "gray",
    padding: "50px 0"
  }
}));

export default useStyles;