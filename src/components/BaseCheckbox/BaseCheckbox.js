import React from "react";
import { withTheme } from "styled-components";
import { Input, Label } from "./BaseCheckbox.styles";

const BaseCheckbox = ({ checked, disabled, hidden, color, onChange }) => {
  return (
    <Label active={checked} disabled={disabled} hidden={hidden} color={color}>
      <Input
        type="checkbox"
        checked={checked}
        onChange={e => onChange && onChange(e.target.checked)}
      />
    </Label>
  );
};

export default withTheme(BaseCheckbox);
