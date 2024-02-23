import "./App.css";
import { About } from "./components/About";
import { Banner } from "./components/Banner";
import { Footer } from "./components/Footer";
import { NavBar } from "./components/NavBar";
import { Projects } from "./components/Projects";
import { Research } from "./components/Research";
import { Skills } from "./components/Skills";
import { Values } from "./components/Values";
import { Vision } from "./components/Vision";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <About />
      <Skills />
      <Projects />
      <Research />
      <Vision />
      <Values />
      <Footer />
    </div>
  );
}

export default App;
