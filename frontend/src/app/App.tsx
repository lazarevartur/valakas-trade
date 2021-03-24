import React from "react";
import "./App.css";
import { Header } from "../component/header";
import { Route, Switch } from "react-router-dom";
import { routesConfig } from "../routes/routesConfig";

interface LocationState {
  pathname: string;
  search?: string;
  key?: string;
}

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        {routesConfig.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            exact={route.exact}
            component={route.component}
          />
        ))}
      </Switch>
    </div>
  );
}

export default App;
