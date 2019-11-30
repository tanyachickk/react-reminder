import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { PoseGroup } from "react-pose";
import { UserProvider } from "./context/UserContext";
import { AppThemeProvider } from "./context/ThemeContext";
import { SignInPage } from "./components/SignInPage";
import { SignUpPage } from "./components/SignUpPage";
import { InnerPage } from "./components/InnerPage";
import { Container } from "./App.styles";
import "react-datepicker/dist/react-datepicker.css";
import "./App.css";

export const App = () => {
  return (
    <UserProvider>
      <AppThemeProvider>
        <Router>
          <Route
            render={({ location }) => (
              <PoseGroup>
                <Container key={location.key}>
                  <Switch location={location}>
                    <Route path="/sign-in">
                      <SignInPage />
                    </Route>
                    <Route path="/sign-up">
                      <SignUpPage />
                    </Route>
                    <Route exact path="/">
                      <InnerPage />
                    </Route>
                    <Redirect to={{ pathname: "/" }}></Redirect>
                  </Switch>
                </Container>
              </PoseGroup>
            )}
          ></Route>
        </Router>
      </AppThemeProvider>
    </UserProvider>
  );
};

export default App;
