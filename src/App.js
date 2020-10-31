import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home, Faq } from "./routes";


function App() {
  return (
    <div className="text-white bg-navy-900 min-h-screen flex flex-col">
      <Router className="">
        <div className="mt-10 px-4">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/faq" component={Faq} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
