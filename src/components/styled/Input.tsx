import * as React from "react";
import styled from "styled-components";

const Input: React.FC = () => {
  return (
    <StyledInputContainer>
      <StyledInput placeholder="Email" />
    </StyledInputContainer>
  );
};

export default Input;

const StyledInput = styled.input`
  width: 100%;
  height: 100%;
  padding-right: 16px;
  padding-left: 16px;
  font-size: 15.5px;
  border-radius: inherit;
  outline: none;
  border: 1px solid #e1e0e0;
  caret: var(--accent);
  line-height: 40px;
  font-family: var(--font);
`;

const StyledInputContainer = styled.div`
  height: 40px;
  width: 250px;
  position: relative;
  background: #ccc;
  border-radius: 6px;
  outline: 0px;
  box-shadow:
    rgb(255, 255, 255) 0px 0px 0px 0px,
    rgba(0, 0, 0, 0) 0px 0px 0px 2px,
    rgba(0, 0, 0, 0.05) 0px 3px 6px -3px,
    rgba(0, 0, 0, 0.05) 0px 2px 4px -2px,
    rgba(0, 0, 0, 0.05) 0px 1px 2px -1px,
    rgba(0, 0, 0, 0.05) 0px 1px 1px -1px,
    rgba(0, 0, 0, 0.05) 0px 1px 0px -1px;
`;
