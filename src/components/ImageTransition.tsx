import * as React from "react";
import styled from "styled-components";
import { motion, useAnimationControls } from "framer-motion";

interface Props {
  onFinished: () => void;
}

const ImageTransition: React.FC<Props> = ({ onFinished }) => {
  const images = [
    "image #01",
    "image #02",
    "image #03",
    "image #04",
    "image #05",
  ];

  // Single controls for the container
  const containerControls = useAnimationControls();

  React.useEffect(() => {
    const sequence = async () => {
      // Start entrance
      await containerControls.start("show");

      // Wait 0.5s after entrance
      await new Promise((res) => setTimeout(res, 500));

      // Start exit
      await containerControls.start("exit");

      // Animation fully done
      onFinished();
    };

    sequence();
  }, [containerControls, onFinished]);

  return (
    <Container
      variants={containerVariants}
      initial="hidden"
      animate={containerControls} // single controls handle both entrance & exit
    >
      {images.map((text, i) => (
        <Image key={i} variants={imageVariants}>
          {text}
        </Image>
      ))}
    </Container>
  );
};

export default ImageTransition;

/* -------------------- STYLED -------------------- */

const Container = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
  perspective: 900px;
`;

const Image = styled(motion.div)`
  background-color: #ccc;
  width: 170px;
  height: 200px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  transform-style: preserve-3d;
`;

/* -------------------- VARIANTS -------------------- */

const containerVariants = {
  hidden: { opacity: 1, scale: 1 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      staggerChildren: 0.2, // stagger each image by 0.2s
      delayChildren: 0.1,
    },
  },
  exit: {
    scale: 0.5,
    opacity: 0,
    transition: {
      duration: 0.8,
      ease: "easeInOut",
    },
  },
};

const imageVariants = {
  hidden: {
    opacity: 0,
    filter: "blur(12px)",
    y: 40,
    rotateX: -20,
  },
  show: {
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.55,
      ease: "easeOut",
    },
  },
};
