import React from "react";
import { withTheme } from "styled-components";
import { Button } from "./ActionButton.styles";

const ActionButton = ({ children, color, withPadding = true, onClick }) => {
  return (
    <Button color={color} withPadding={withPadding} onClick={onClick}>
      {children}
    </Button>
  );
};

export default withTheme(ActionButton);
