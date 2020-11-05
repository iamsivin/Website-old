import Header from "./component/Header";
import About from "./component/About";
import Works from "./component/Works";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Route path="/" exact component={About} />
      <Route path="/Work" component={Works} />
    </Router>
  );
}

export default App;
