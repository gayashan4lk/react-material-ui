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
import useStyles from "./app.styles";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

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
        <Container className={classes.cardGrid} maxWidth="lg">
          <Grid container spacing={4} >
            {cards.map( (card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="random image"
                  />
                  <CardContent className={classes.cardContent} >
                    <Typography gutterBottom variant="h5">
                      This image is awesome.
                    </Typography>
                    <Typography>
                      This is a Media Card. This is the description of it.
                    </Typography>
                    <CardActions>
                      <Button size="small" color="primary">View</Button>
                      <Button size="small" color="primary">Edit</Button>
                    </CardActions>
                    <div style={{width: '0px', height: '0px'}}> </div>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <footer className={classes.footer} >
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary">
          This is the footer. You can put any info about the site here.
        </Typography>
      </footer>
    </React.Fragment>
  );
}

export default App;
