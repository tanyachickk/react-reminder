import React, { useEffect, useRef } from "react";
import { withTheme } from "styled-components";
import { ReactPageClick } from "react-page-click";
import { Input, Container } from "./TextInput.styled";

const TextInput = ({
  value,
  isReadOnly = false,
  isEditMode = false,
  showBackgroundOnFocus = true,
  onChange,
  onEnter,
  onEscape,
  onClickAway
}) => {
  const inputRef = useRef();

  useEffect(() => {
    if (isEditMode) {
      inputRef.current.focus();
    } else {
      inputRef.current.blur();
    }
  }, [isEditMode]);

  const onKeyDown = e => {
    switch (e.key) {
      case "Enter":
        onEnter && onEnter();
        return;
      case "Escape":
        onEscape && onEscape();
        return;
      default:
        return;
    }
  };

  return (
    <Container>
      <ReactPageClick notify={() => onClickAway && onClickAway()}>
        <Input
          ref={inputRef}
          value={value}
          readOnly={isReadOnly}
          isEditMode={isEditMode}
          showBackgroundOnFocus={showBackgroundOnFocus}
          onKeyDown={onKeyDown}
          onChange={e => onChange && onChange(e.target.value)}
        />
      </ReactPageClick>
    </Container>
  );
};

export default withTheme(TextInput);
