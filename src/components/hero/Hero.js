import React from 'react';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { useSpring, animated } from 'react-spring';
import { makeStyles } from '@material-ui/core/styles';
import './style.css' 

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`
const trans4 = (x, y) => `translate3d(${x / 3.5}px,${y / 3.5}px,0)`

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  rightGrid:{ 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center' ,
    marginTop:100
  },
}));

const Hero = () => {
  const classes = useStyles();
  const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }))
  return (
    <Container>
      <div className={classes.root}>
        <Grid container spacing={10}>
          <Grid item xs={12} sm={6}>
            <h1 style={{color: '#fff'}}>Hii,</h1>
            <h1 style={{color: '#fff'}}>My Name Is Rishabh!</h1>
          </Grid>
          <Grid item xs={12} sm={6} className={classes.rightGrid}>
            <div class="container" onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
              <animated.div class="card1" style={{ transform: props.xy.interpolate(trans1) }} />
              <animated.div class="card4" style={{ transform: props.xy.interpolate(trans4) }} />
            </div>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};

export default Hero;