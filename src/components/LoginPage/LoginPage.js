import React, { useEffect } from "react";
import Loader from "react-loader";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import * as LogoImage from "../../assets/images/reminders-logo.png";
import {
  Container,
  Content,
  AppLogo,
  LoadingOverlay
} from "./LoginPage.styles";

export const LoginPage = ({ children, loading }) => {
  const [{ user, isInitialized }] = useAuth();
  const history = useHistory();

  useEffect(() => {
    if (isInitialized && user) {
      history.replace({ pathname: "/" });
    }
  }, [isInitialized, user]);

  return (
    <Container>
      <AppLogo src={LogoImage} />
      <Content>{children}</Content>
      {loading && (
        <LoadingOverlay>
          <Loader width={2} lines={14} length={10} radius={8}></Loader>
        </LoadingOverlay>
      )}
    </Container>
  );
};
