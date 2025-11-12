import * as React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import NavBar from "./NavBar";

const Index: React.FC = () => {
  const text =
    "mindful, is a <i>bookmarking</i> tool.. that was built so I have a place to store my <i>inspiration</i>, and my <i>hyperlinks</i>.";

  // Split into words while preserving <i> tags
  const words = text.split(/(\s+)/).filter(Boolean);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.07,
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <StyledContainer>
      <NavBar />
      <StyledContent>
        <StyledContentText
          as={motion.div}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {words.map((word, i) => {
            // Detect <i> tags and render correctly
            const isItalic = word.includes("<i>");
            if (isItalic) {
              const inner = word.replace(/<\/?i>/g, "");
              return (
                <motion.i
                  key={i}
                  variants={wordVariants}
                  dangerouslySetInnerHTML={{ __html: inner }}
                />
              );
            }

            // Otherwise render normal text
            return (
              <motion.span key={i} variants={wordVariants}>
                {word}
              </motion.span>
            );
          })}
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

const StyledContentText = styled(motion.div)`
  font-size: var(--fs-40);
  font-weight: 450;
  letter-spacing: -0.2px;
  line-height: 55px;
  display: flex;
  flex-wrap: wrap;
  gap: 4px;

  i {
    font-family: var(--secondaryFont);
  }
`;
