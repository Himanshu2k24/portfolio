import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import LeetCodeStats from './components/LeetCodeStats';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      <Projects />
      <Skills />
      <LeetCodeStats />
      <Contact />
    </div>
  );
}

export default App;
