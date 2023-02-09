import './App.css';
import About from './components/about/About';
import Intro from './components/intro/Intro';
import Portfolio from './components/portfolio/Portfolio';
import Service from './components/services/Service';

function App() {
  return (
    <div className="App">
      <Intro/>
      <About/>
      <Service/>
      <Portfolio/>
    </div>
  );
}

export default App;
