import React from "react";
import { withTheme } from "styled-components";
import { Button } from "./ActionButton.styles";

const ActionButton = ({ children, onClick }) => {
  return <Button onClick={onClick}>{children}</Button>;
};

export default withTheme(ActionButton);
