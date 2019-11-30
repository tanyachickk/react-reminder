import React from "react";
import { withTheme } from "styled-components";
import { Container, Icon, User } from "./ProfileInfo.styles";

const ProfileInfo = () => {
  return (
    <Container>
      <Icon>TK</Icon>
      <User>Tatiana Kurochkina</User>
    </Container>
  );
};

export default withTheme(ProfileInfo);
