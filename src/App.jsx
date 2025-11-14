import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';
import Hero from './components/sections/Hero';
import Capability from './components/sections/Capability';
import Product from './components/sections/Product';
import Highlight from './components/sections/Highlight';
import About from './components/sections/About';
import Contact from './components/sections/Contact';
import ReactLenis from 'lenis/react';

function App() {

  return (
    <>
      <ReactLenis
        root
        options={{
          lerp: 0.1,
          duration: 1.2,
          orientation: 'vertical',
          gestureOrientation: 'vertical',
          smoothWheel: true,
          wheelMultiplier: 1,
          smoothTouch: false,
          touchMultiplier: 2
        }}

      >
        <Navbar />
        <Hero />
        <Capability />
        <Product />
        <Highlight />
        <About />
        <Contact />
        <Footer />
      </ReactLenis>
    </>
  )
}

export default App
