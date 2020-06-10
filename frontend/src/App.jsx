import React from 'react';
import { Router, Route, Switch } from "react-router-dom";
import history from "./history";

// Pages
import Home from "./pages/Home";
import Profile from "./pages/Profile";

// Components
// ---MENUS---
import MenuBar from "./components/Menus/MenuBar";
import BottomMenuBar from "./components/Menus/BottomMenuBar";

const App = () => {
  return (
    <Router history={history}>
      <Route path="/" component={MenuBar}></Route>

      <Switch>
        <Route path="/profile" component={Profile}></Route>
        <Route path="/" component={Home}></Route>
      </Switch>

      <div>
        <Route path="/" component={BottomMenuBar}></Route>
      </div>
    </Router>
  );
};
export default App;