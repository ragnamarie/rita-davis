"use client";

import { useState } from "react";
import styled from "styled-components";

// 🧱 Styled components
const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  position: absolute;
  bottom: 30px;
  font-size: 16px;
  font-weight: 600;
  color: ${(props) => (props.isEN ? "#ffdbf6" : "#007b1d")};
  text-align: center;

  /* Allow wrapping based on viewport width, not photo width */
  width: 90vw; /* max width relative to screen */
  max-width: 1200px; /* optional max width */
  white-space: normal; /* allow wrapping */
  line-height: 1.4;
`;

const GalleryWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 900px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Photo = styled.img`
  height: auto;
  width: 75%;
  object-fit: cover;
  transition: opacity 0.4s ease;
`;

const TriangleButton = styled.button`
  all: unset;
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  transition: transform 0.2s ease;
  width: 0;
  height: 0;

  border-top: 25px solid transparent;
  border-bottom: 25px solid transparent;

  ${({ direction, color }) =>
    direction === "left"
      ? `
      border-right: 35px solid ${color};
      left: -60px;
    `
      : `
      border-left: 35px solid ${color};
      right: -60px;
    `}
`;

// 🧩 Component
export default function Works({ language }) {
  const isEN = language === "EN";
  const buttonColor = isEN ? "#ffdbf6" : "#007b1d";

  const images = [
    "/Works/ada-01.jpg",
    "/Works/ada-02.jpg",
    "/Works/ada-03.jpg",
    "/Works/ada-04.jpg",
    "/Works/ada-05.jpg",
  ];

  const [index, setIndex] = useState(0);

  const nextImage = () => setIndex((prev) => (prev + 1) % images.length);
  const prevImage = () =>
    setIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <PageWrapper>
      <GalleryWrapper>
        <TriangleButton
          color={buttonColor}
          direction="left"
          onClick={prevImage}
        />
        <Photo src={images[index]} alt={`Work ${index + 1}`} />
        <TriangleButton
          color={buttonColor}
          direction="right"
          onClick={nextImage}
        />
        <Title isEN={isEN}>
          {isEN
            ? "Visuals for “Ada-Kaleh” play by DieOrdnung DerDinge and Franziska Seeberg. Designed with Stoodio Santiago da Silva and Sofia Clement. Germany, 2024."
            : "Identidade visual para a peça “Ada-Kaleh” de DieOrdnung DerDinge e Franziska Seeberg. Em colaboração com Stoodio Santiago da Silva e Sofia Clement. Alemanha, 2024."}
        </Title>
      </GalleryWrapper>
    </PageWrapper>
  );
}
