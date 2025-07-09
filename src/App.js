import './App.css';
import Navbar from './Navbar/Navbar.jsx';
import Hero from './Hero/Hero.jsx';
import About from './About/About.jsx';
import Contact from './Contact/Contact.jsx';
import Footer from './Footer/Footer.jsx';
import DynamicTile from './DynamicTile/DynamicTile.jsx';


function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Contact />
      <Footer />
      <DynamicTile />
    </div>
  );
}

export default App;
