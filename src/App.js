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
import "react-flags-select/css/react-flags-select.css";
import "./App.css";

export const App = () => {
  return (
    <UserProvider>
      <AppThemeProvider>
        <Router>
          <Route
            render={({ location }) => (
              <PoseGroup>
                <Container key={location.pathname}>
                  <Switch location={location}>
                    <Route
                      path="/sign-in"
                      component={SignInPage}
                      key="sign-in"
                    />
                    <Route
                      path="/sign-up"
                      component={SignUpPage}
                      key="sign-up"
                    />
                    <Route exact path="/" component={InnerPage} key="main" />
                    <Redirect to="/"></Redirect>
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
