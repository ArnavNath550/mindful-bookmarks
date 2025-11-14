import * as React from "react";
import Input from "../components/styled/Input";
import styled from "styled-components";

const LoginPage: React.FC = () => {
  return (
    <StyledLoginContainer>
      <Input />
      <Input />
    </StyledLoginContainer>
  );
};

export default LoginPage;
const StyledLoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
