import React from "react";
import ItemPage from "./pages/ItemPage";
import { Route, Switch } from "react-router-dom";
import ItemDetails from "./components/ItemDetails";

function App() {
  return (
    <div className="AppParent">
      <Switch>
        <Route path="/:id" component={ItemDetails} />
        <Route path="/" exact component={ItemPage} />
      </Switch>
    </div>
  );
}

export default App;
