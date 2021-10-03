import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import AboutUs from "./components/AboutUs/AboutUs";
import Classes from "./components/Classes/Classes";
import NotFound from "./components/NotFound/NotFound";
import Special from "./components/Special/Special";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <h1>Main App</h1>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/about-us">
            <AboutUs></AboutUs>
          </Route>
          <Route path="/classes">
            <Classes></Classes>
          </Route>
          <Route path="/special">
            <Special></Special>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
