import React from "react";
import { Switch, Route } from "react-router-dom";

//components
import Main from "./components/Main";
import Contact from "./components/Contact";
import Thanks from "./components/Thanks";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/webappsolution/" component={Main} />
      <Route exact path="/webappsolution/contact" component={Contact} />
      <Route exact path="/webappsolution/thanks/:name" component={Thanks} />
    </Switch>
  )
};

export default Routes;