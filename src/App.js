import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';
import Triangular from './images/triangular.svg';

const url = (name, wrap = false) => `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`
const Pink = ({ children }) => <span style={{ color: '#FF6AC1' }}>{children}</span>
const Yellow = ({ children }) => <span style={{ color: '#EFF59B' }}>{children}</span>
const Lightblue = ({ children }) => <span style={{ color: '#9AEDFE' }}>{children}</span>
const Green = ({ children }) => <span style={{ color: '#57EE89' }}>{children}</span>
const Blue = ({ children }) => <span style={{ color: '#57C7FF' }}>{children}</span>
const Gray = ({ children }) => <span style={{ color: '#909090' }}>{children}</span>

function App() {
  return (
    <Parallax pages={4}>
        <ParallaxLayer offset={1} speed={1} style={{ backgroundColor: '#131313' }} />
        <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: '#131313' }} />
        <ParallaxLayer offset={3} speed={1} style={{ backgroundColor: '#131313' }} />
        <ParallaxLayer offset={0} speed={0} factor={4} style={{ backgroundColor: '#131313' }} />
        <ParallaxLayer offset={1.3} speed={-0.3} style={{ pointerEvents: 'none' }}>
          <h1 style={{ width: '30%', marginLeft: '70%', color:"#fff"}}>some image website</h1>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
          <img src={Triangular} style={{ display: 'block', width: '20%', marginLeft: '55%' }} />
          <img src={Triangular} style={{ display: 'block', width: '10%', marginLeft: '15%' }} />
        </ParallaxLayer>
        <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
          <img src={Triangular} style={{ display: 'block', width: '400%', marginLeft: '70%' }} />
          <img src={Triangular} style={{ display: 'block', width: '30%', marginLeft: '40%' }} />
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
          <img src={Triangular} style={{ display: 'block', width: '20%', marginLeft: '10%' }} />
          <img src={Triangular} style={{ display: 'block', width: '30%', marginLeft: '75%' }} />
        </ParallaxLayer>
        <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>
          <img src={Triangular} style={{ display: 'block', width: '20%', marginLeft: '60%' }} />
          <img src={Triangular} style={{ display: 'block', width: '35%', marginLeft: '30%' }} />
          <img src={Triangular} style={{ display: 'block', width: '40%', marginLeft: '80%' }} />
        </ParallaxLayer>
        <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>
          <img src={Triangular} style={{ display: 'block', width: '20%', marginLeft: '5%' }} />
          <img src={Triangular} style={{ display: 'block', width: '15%', marginLeft: '75%' }} />
        </ParallaxLayer>
        <ParallaxLayer offset={2.5} speed={-0.4} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}>
          <h1 style={{color: "#fff"}}>some image here</h1>
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
          onClick={() => this.parallax.scrollTo(1)}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <h1 style={{color: "#fff"}}>Hello1</h1>
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={0.1}
          onClick={() => this.parallax.scrollTo(2)}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <h1 style={{color: "#fff"}}>Hello2</h1>
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={-0}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          onClick={() => this.parallax.scrollTo(0)}>
          <h1 style={{color: "#fff"}}>Hello3</h1>
        </ParallaxLayer>

        <ParallaxLayer
          offset={3}
          speed={-0}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          onClick={() => this.parallax.scrollTo(3)}>
          <h1 style={{color: "#fff"}}>Hello4</h1>
        </ParallaxLayer>
      </Parallax>

  );
}

export default App;
