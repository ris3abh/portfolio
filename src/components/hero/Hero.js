import React from 'react';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const Hero = () => {
  const classes = useStyles();
  return (
    <Container>
      <div className={classes.root}>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={6}>
            <h1 style={{color: '#fff'}}>Hii,</h1>
            <h1 style={{color: '#fff'}}>My Name Is Rishabh!</h1>
          </Grid>
          <Grid item xs={12} sm={6}>
            <h1 style={{color: '#fff'}}>Sleak Animation Here</h1>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};

export default Hero;