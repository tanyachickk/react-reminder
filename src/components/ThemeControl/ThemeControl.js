import React, { useEffect, useState } from "react";
import { withTheme } from "styled-components";
import Switch from "react-switch";
import { useTheme } from "../../context/ThemeContext.js";
import { blueColor, grayColor } from "../../constants/theme.js";

export const ThemeControl = withTheme(({ theme }) => {
  const themeToggle = useTheme();

  return (
    <Switch
      checked={theme.mode === "dark"}
      onColor={blueColor}
      offColor={grayColor}
      activeBoxShadow=""
      checkedIcon={false}
      uncheckedIcon={false}
      height={18}
      width={36}
      onChange={() => themeToggle.toggle()}
    />
  );
});
