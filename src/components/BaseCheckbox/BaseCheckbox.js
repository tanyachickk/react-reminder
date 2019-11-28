import React, { useEffect, useRef } from "react";
import { withTheme } from "styled-components";
import { Input, Label } from "./BaseCheckbox.styles";

const BaseCheckbox = ({ checked, color, onChange }) => {
  return (
    <Label active={checked} color={color}>
      <Input
        type="checkbox"
        checked={checked}
        onChange={e => onChange && onChange(e.target.checked)}
      />
    </Label>
  );
};

export default withTheme(BaseCheckbox);
