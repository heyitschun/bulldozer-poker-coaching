import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home, Faq, Contact, Coaching } from "./routes";
import Nav from "./components/Nav";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="text-gray-900 min-h-screen flex flex-col">
      <Router>
        <Nav className="w-full" />
        <div className="flex flex-1 justify-center">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/faq" component={Faq} />
            <Route path="/contact" component={Contact} />
            <Route path="/coaching" component={Coaching} />
          </Switch>
        </div>
        <Footer className="flex-shrink" />
      </Router>
    </div>
  );
}

export default App;
