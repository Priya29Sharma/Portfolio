
import './App.css';
import Navbar from './components/Navbar/Navbar.js';
import Hero from './components/hero/hero.js';
import About from './components/About/About.js';
import Experience from './components/Experience/Experience.js';
import Projects from './components/Projects/.Projects.js';
import Contacts from './components/Contact/Contact.js';

function App() {
  return (
    <div className="main">
      <Navbar/>
      <Hero/>
      <About/>
      <Experience/>
      <Projects/>
      <Contacts/>
      
      
    </div>
  );
}

export default App;
