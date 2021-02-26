import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

const Project = () => {
  const classes = useStyles();
  return (
    <Container>
      <div className={classes.root}>
        <h1 style={{color: '#fff'}}>I am Projects</h1>
      </div>
    </Container>
  );
};

export default Project;