import './App.css';
import About from './components/About/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home/Home';
import Portfolio from './components/Portfolio/Portfolio';
import Skill from './components/Skill/Skill';

function App() {
  return (
    <div className="App" style={{position: 'relative'}}>
      <Header />
      <Home />
      <About />
      <Skill />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
