import Header from "./component/Header";
import About from "./component/About";
import Contact from "./component/Contact";
import Works from "./component/Works";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Header />
      <About />
      <Works />
      <Contact />
    </div>
  );
};

export default App;
