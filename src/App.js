import './App.css';
import { Banner } from './components/Banner';
import { NavBar } from './components/Navbar';


const App = () => {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
    </div>
  );
}

export default App