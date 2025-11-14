import * as React from "react";
import styled from "styled-components";

type Props = {
  setPageContext: () => void;
  pageContext: string;
};

const NavBar: React.FC = (props: Props) => {
  return (
    <StyledNavBar>
      <StyledNavItem onClick={() => props.setPageContext("LOGIN")}>
        Login/Sign up
      </StyledNavItem>
      <StyledNavItem onClick={() => props.setPageContext("INDEX")}>
        About
      </StyledNavItem>
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
