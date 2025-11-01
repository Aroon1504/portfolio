import { Banner } from "./components/Banner/Banner";
import { Links } from "./components/Links/Links";
import { NavBar } from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects/Projects";
import { Skills } from "./components/Skills/Skills";

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Links />
    </div>
  );
};

export default App;
