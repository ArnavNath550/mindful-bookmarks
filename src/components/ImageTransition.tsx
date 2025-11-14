import * as React from "react";
import styled from "styled-components";
import { motion, useAnimationControls } from "framer-motion";

interface Props {
  onFinished: () => void;
}

const ImageTransition: React.FC<Props> = ({ onFinished }) => {
  const images = [
    "/public/images/artwork/artwork-one.jpg",
    "/public/images/artwork/artwork-two.jpg",
    "/public/images/artwork/artwork-three.jpg",
    "/public/images/artwork/artwork-four.jpg",
    "/public/images/artwork/artwork-five.jpg",
  ];

  // Single controls for the container
  const containerControls = useAnimationControls();

  React.useEffect(() => {
    const sequence = async () => {
      // Start entrance
      await containerControls.start("show");

      // Wait 0.5s after entrance
      await new Promise((res) => setTimeout(res, 750)); // wait 1s instead of 0.5s

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
        <Image src={text} key={i} variants={imageVariants} />
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

const Image = styled(motion.img)`
  background-color: #ccc;
  width: 220px;
  height: 280px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  object-fit: cover;
  transform-style: preserve-3d;
`;

const containerVariants = {
  hidden: { opacity: 1, scale: 1 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      staggerChildren: 0.4, // slower stagger
      delayChildren: 0.2, // longer delay before first image
    },
  },
  exit: {
    scale: 0.8,
    opacity: 0,
    transition: {
      duration: 1, // slower exit
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
      duration: 1.1, // slower animation
      ease: "easeOut",
    },
  },
};
