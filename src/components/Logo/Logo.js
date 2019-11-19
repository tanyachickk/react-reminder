import React from "react";
import { withTheme } from "styled-components";
import { Container, Text, Image } from "./Logo.styled";
import * as LogoImage from "../../assets/images/reminders-logo.png";

const Logo = () => {
  return (
    <Container>
      <Image src={LogoImage} />
      <Text>React Reminders</Text>
    </Container>
  );
};

export default withTheme(Logo);
