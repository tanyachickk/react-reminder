import React from "react";
import { withTheme } from "styled-components";
import { Input, Container } from "./BaseInput.styles";

const TextInput = ({ value, onChange, ...attrs }) => {
  return (
    <Container>
      <Input
        {...attrs}
        value={value}
        onChange={e => onChange && onChange(e.target.value)}
      />
    </Container>
  );
};

export default withTheme(TextInput);
