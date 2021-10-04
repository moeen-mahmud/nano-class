import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import AboutUs from "./components/AboutUs/AboutUs";
import Classes from "./components/Classes/Classes";
import NotFound from "./components/NotFound/NotFound";
import Footer from "./components/Footer/Footer";
import Instructors from "./components/Instructors/Instructors";

function App() {
  return (
    <div>
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
          <Route path="/instructors">
            <Instructors></Instructors>
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
