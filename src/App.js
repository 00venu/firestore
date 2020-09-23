import React from "react";
import ItemPage from "./pages/ItemPage";
import { Route, Switch } from "react-router-dom";
import ItemDetails from "./components/ItemDetails";
import ErrorPage from "./pages/ErrorPage";
import Header from "./components/Header";
import ItemForm from "./pages/ItemForm";

function App() {
  return (
    <div>
      <Header />
      <div className="AppParent">
        <Switch>
          <Route path="/itemForm/:id" component={ItemForm} />
          <Route path="/itemForm" component={ItemForm} />
          <Route path="/error" component={ErrorPage} />
          <Route path="/:id" component={ItemDetails} />
          <Route path="/" exact component={ItemPage} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
