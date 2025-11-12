import * as React from "react";
import styled from "styled-components";

const NavBar: React.FC = () => {
  return (
    <StyledNavBar>
      <StyledNavItem>Login/Sign up</StyledNavItem>
      <StyledNavItem>About</StyledNavItem>
    </StyledNavBar>
  );
};

export default NavBar;

const StyledNavBar = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 15px;
  padding-bottom: 15px;
  gap: 15px;
`;

const StyledNavItem = styled.div`
  font-size: var(--fs-14);
  cursor: default;
  color: var(--text);
  transition: ease 0.1s opacity;
  font-weight: 450;
  &:hover {
    opacity: 0.8;
  }
`;
