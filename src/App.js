import './App.css';
import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';

const useStyles = makeStyles((theme) => ({
  container: {
    background: "#eee",
    padding : theme.spacing (8, 0, 6),
  },
  test: {
    backgroundColor: theme.palette.background.paper,
    border: "1px solid black ",
    width: 200,
    height: 100,
  },
  anyfuck: {
    marginRight: "20px"
  },
  buttons: {
    marginTop: "40px"
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <PhotoCameraIcon className={classes.anyfuck} />
          <Typography variant="h6">
            PhotoAlbum
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div className={classes.container}>
          <Container maxWidth="md" style={{ marginTop: '50px' }} >
            <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
              Photo Album
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Something short and leading about the collection below—its contents, the creator, etc.
              Make it short and sweet, but not too short so folks don't simply skip over it entirely.
            </Typography>
            <div className={classes.buttons}>
              <Grid container spacing="2" justify="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    See Photos
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    See Photos
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
      </main>
      <div className={classes.test}>

      </div>
    </React.Fragment>
  );
}

export default App;
