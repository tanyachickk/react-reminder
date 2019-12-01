import React, { useEffect } from "react";
import Loader from "react-loader";
import { useHistory } from "react-router-dom";
import * as LogoImage from "../../assets/images/reminders-logo.png";
import {
  Container,
  Content,
  AppLogo,
  LoadingOverlay,
  LanguageContainer
} from "./LoginPage.styles";
import { useSession } from "../../context/UserContext";
import { LanguageControl } from "../LanguageControl";

export const LoginPage = ({ children, loading }) => {
  const { user, isInitialized } = useSession();
  const history = useHistory();

  useEffect(() => {
    if (isInitialized && user) {
      history.replace({ pathname: "/" });
    }
  }, [isInitialized, user]);

  return (
    <Container>
      <LanguageContainer>
        <LanguageControl />
      </LanguageContainer>
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
