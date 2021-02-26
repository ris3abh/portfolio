import React from 'react';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';
import Cube from '../images/cube.svg';
import Triangular from '../images/triangular.svg';
import Hero from './Hero'

const Pink = ({ children }) => <span style={{ color: '#FF6AC1' }}>{children}</span>
const Yellow = ({ children }) => <span style={{ color: '#EFF59B' }}>{children}</span>
const Lightblue = ({ children }) => <span style={{ color: '#9AEDFE' }}>{children}</span>
const Green = ({ children }) => <span style={{ color: '#57EE89' }}>{children}</span>
const Blue = ({ children }) => <span style={{ color: '#57C7FF' }}>{children}</span>
const Gray = ({ children }) => <span style={{ color: '#909090' }}>{children}</span>

const ParallaxCont = () => {
  return (
    <Parallax pages={4}>
        <ParallaxLayer offset={1} speed={1} style={{ backgroundColor: '#131313' }} />
        <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: '#131313' }} />
        <ParallaxLayer offset={3} speed={1} style={{ backgroundColor: '#131313' }} />
        <ParallaxLayer offset={4} speed={1} style={{ backgroundColor: '#131313' }} />
        <ParallaxLayer offset={0} speed={0} factor={5} style={{ backgroundColor: '#131313'}} />

        <ParallaxLayer offset={1.4} speed={-0.2} style={{ pointerEvents: 'none' }}>
          <h1 style={{color:'#fff' ,width: '15%', marginLeft: '70%' }}>Insert some other component here</h1>
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
          <img src={Triangular} style={{ display: 'block', width: '20%', marginLeft: '55%' }} />
          <img src={Triangular} style={{ display: 'block', width: '10%', marginLeft: '15%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
          <img src={Triangular} style={{ display: 'block', width: '20%', marginLeft: '70%' }} />
          <img src={Triangular} style={{ display: 'block', width: '20%', marginLeft: '40%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
          <img src={Triangular} style={{ display: 'block', width: '10%', marginLeft: '10%' }} />
          <img src={Triangular} style={{ display: 'block', width: '20%', marginLeft: '75%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>
          <img src={Triangular} style={{ display: 'block', width: '20%', marginLeft: '60%' }} />
          <img src={Triangular} style={{ display: 'block', width: '25%', marginLeft: '30%' }} />
          <img src={Triangular} style={{ display: 'block', width: '10%', marginLeft: '80%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>
          <img src={Triangular} style={{ display: 'block', width: '20%', marginLeft: '5%' }} />
          <img src={Triangular} style={{ display: 'block', width: '15%', marginLeft: '75%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={2.2} speed={-0.4} style={{opacity: 0.7 ,display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}>
          <img src={Cube} style={{ width: '30%' }} />
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={-0.3}
          style={{
            backgroundSize: '80%',
            backgroundPosition: 'center',
          }}
        />

        <ParallaxLayer
          offset={0}
          speed={0.1}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Hero />
        </ParallaxLayer>

        <ParallaxLayer
          offset={0.7}
          speed={0.1}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <h1 style={{color: '#fff'}}>Education Timeline</h1>
        </ParallaxLayer>

        <ParallaxLayer
          offset={1.4}
          speed={-0}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <h1 style={{color: '#fff'}}>Skills Animation</h1>
        </ParallaxLayer>

        <ParallaxLayer
          offset={2.1}
          speed={-0}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <h1 style={{color: '#fff'}}>Work Experiences Timeline</h1>
        </ParallaxLayer>

        <ParallaxLayer
          offset={2.8}
          speed={-0}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <h1 style={{color: '#fff'}}>Work Projects Carousel</h1>
        </ParallaxLayer>

        <ParallaxLayer
          offset={3.4}
          speed={-0}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <h1 style={{color: '#fff'}}>Social Media Icons and Email address</h1>
        </ParallaxLayer>
      </Parallax>
  );
};

export default ParallaxCont;