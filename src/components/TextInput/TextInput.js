import React, { useEffect, useRef } from "react";
import { withTheme } from "styled-components";
import { ReactPageClick } from "react-page-click";
import { Input, Container } from "./TextInput.styled";

const isSaveAction = key => key === "Enter" || key === "Escape";

const TextInput = ({ value, underline = true, onChange, onSave }) => {
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
    inputRef.current.select();
  }, []);

  return (
    <Container>
      <ReactPageClick notify={onSave}>
        <Input
          ref={inputRef}
          value={value}
          underline={underline}
          onChange={e => onChange(e.target.value)}
          onKeyDown={e => isSaveAction(e.key) && onSave()}
        />
      </ReactPageClick>
    </Container>
  );
};

export default withTheme(TextInput);
