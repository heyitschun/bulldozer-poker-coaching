import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home, Faq, Contact } from "./routes";
import Nav from "./components/Nav";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="font-sans text-gray-900 min-h-screen flex flex-col">
      <Router>
        <Nav className="w-full" />
        <div className="mt-10 px-4 flex flex-1 justify-center">
          <div className="w-4/5 md:w-2/5">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/faq" component={Faq} />
            <Route path="/contact" component={Contact} />
          </Switch>
          </div>
        </div>
        <Footer className="flex-shrink" />
      </Router>
    </div>
  );
}

export default App;
