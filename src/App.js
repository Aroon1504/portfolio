import './App.css';
import { Banner } from './components/Banner';
import { Links } from './components/Links';
import { NavBar } from './components/Navbar';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';


const App = () => {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <Skills/>
      <Projects/>
      <Links/>
    </div>
  );
}

export default App