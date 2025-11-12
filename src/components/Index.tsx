import * as React from "react";
import styled from "styled-components";
import NavBar from "./NavBar";

const Index: React.FC = () => {
  return (
    <StyledContainer>
      <NavBar />
      <StyledContent>
        <StyledContentText>
          mindful, is a <i>bookmarking</i> tool.. that was built so I have a
          place to store my <i>inspiration</i>, and my <i>hyperlinks</i>.
        </StyledContentText>
      </StyledContent>
    </StyledContainer>
  );
};

export default Index;

const StyledContainer = styled.div`
  max-width: 550px;
  margin: 50px auto;
`;

const StyledContent = styled.div`
  padding-top: 15px;
  padding-bottom: 15px;
`;

const StyledContentText = styled.div`
  font-size: var(--fs-40);
  font-weight: 450;
  letter-spacing: -0.2px;
  line-height: 55px;

  i {
    font-family: var(--secondaryFont);
  }
`;
