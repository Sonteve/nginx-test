import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Switch, useHistory } from "react-router-dom";
import Checkup from "./pages/Checkup";

function App() {
  const history = useHistory();
  useEffect(() => {
    history.push("/checkup");
  }, [history]);
  return (
    <Switch>
      <Route component={Checkup} path="/checkup" />
    </Switch>
  );
}

export default App;
