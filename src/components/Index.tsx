import * as React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import NavBar from "./NavBar";
import ImageTransition from "./ImageTransition";

const Index: React.FC = () => {
  const text =
    "mindful, is a <i>bookmarking</i> tool.. that was built so I have a place to store my <i>inspiration</i>, and my <i>hyperlinks</i>.";

  const words = text.split(/(\s+)/).filter(Boolean);

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.06,
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

  const iconVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  const getIconForWord = (word: string): string | null => {
    const lower = word.toLowerCase();
    if (lower.includes("bookmark")) return "/bookmark.svg";
    if (lower.includes("inspiration")) return "/inspiration.svg";
    if (lower.includes("hyperlink")) return "/hyperlinks.svg";
    return null;
  };

  const [loading, setLoading] = React.useState(true);

  return (
    <div style={{ width: "100%", height: "100%" }}>
      {loading ? (
        <ImageTransition onFinished={() => setLoading(false)} />
      ) : (
        <StyledContainer
          as={motion.div}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <NavBar />

          <StyledContent>
            <StyledContentText>
              {words.map((word, i) => {
                const isItalic = word.includes("<i>");
                if (isItalic) {
                  const inner = word.replace(/<\/?i>/g, "");
                  const iconSrc = getIconForWord(inner);

                  return (
                    <motion.i key={i} variants={wordVariants}>
                      {iconSrc && (
                        <motion.span
                          className="icon-wrapper"
                          variants={iconVariants}
                        >
                          <img src={iconSrc} alt={`${inner} icon`} />
                        </motion.span>
                      )}
                      {inner}
                    </motion.i>
                  );
                }

                return (
                  <motion.span key={i} variants={wordVariants}>
                    {word}
                  </motion.span>
                );
              })}
            </StyledContentText>
          </StyledContent>
        </StyledContainer>
      )}
    </div>
  );
};

export default Index;

const StyledContainer = styled.div`
  max-width: 650px;
  margin: 0 auto;
  padding-inline: clamp(1rem, 5vw, 3rem);
  padding-top: 4rem;
  padding-bottom: 2rem;
  box-sizing: border-box;

  @media (min-width: 768px) {
    padding-top: 6rem;
  }
`;

const StyledContent = styled.div`
  padding-top: 2.5rem;
  padding-bottom: 1.5rem;
`;

const StyledContentText = styled(motion.div)`
  font-size: clamp(1.25rem, 2vw + 0.5rem, 2.5rem);
  font-weight: 450;
  letter-spacing: -0.2px;
  line-height: clamp(1.8rem, 3vw + 0.5rem, 3.4rem);
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  color: var(--textColor, #222);
  text-align: left;

  i {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-family: var(--secondaryFont, "Georgia", serif);
    font-style: italic;
    color: var(--accent, #5a5a5a);

    .icon-wrapper {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 20px;
      height: 20px;
      flex-shrink: 0;

      img {
        height: 20px;
        object-fit: contain;
      }
    }
  }
`;
