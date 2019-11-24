import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { SignInForm } from "../SignInForm";
import { SignUpForm } from "../SignUpForm";

export const LoginPage = () => {
  const [{ user, isInitialized }] = useAuth();
  const history = useHistory();

  useEffect(() => {
    if (isInitialized && user) {
      history.replace({ pathname: "/" });
    }
  });

  return (
    <div>
      <h1>Login page</h1>
      <SignInForm />
      <SignUpForm />
    </div>
  );
};
