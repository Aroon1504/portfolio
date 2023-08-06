import './App.css';
import { Banner } from './components/Banner';
import { NavBar } from './components/Navbar';
import { Skills } from './components/Skills';


const App = () => {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <Skills/>
    </div>
  );
}

export default App