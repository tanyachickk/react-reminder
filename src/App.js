import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { LoginPage } from "./components/LoginPage";
import { InnerPage } from "./components/InnerPage";
import { UserProvider } from "./context/UserContext";
import "react-datepicker/dist/react-datepicker.css";
import "./App.css";

export const App = () => {
  return (
    <UserProvider>
      <Router>
        <Switch>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route exact path="/">
            <InnerPage />
          </Route>
          <Redirect to={{ pathname: "/" }}></Redirect>
        </Switch>
      </Router>
    </UserProvider>
  );
};

export default App;
