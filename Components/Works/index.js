"use client";

import { useState } from "react";
import styled from "styled-components";
import { imagesWorks } from "@/lib/imagesWorks";

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

  width: 90vw;
  max-width: 1200px;
  white-space: normal;
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

  // Extract unique projects
  const projects = [...new Set(imagesWorks.map((img) => img.project))];

  return (
    <PageWrapper>
      {projects.map((project) => (
        <ProjectGallery
          key={project}
          project={project}
          isEN={isEN}
          buttonColor={buttonColor}
        />
      ))}
    </PageWrapper>
  );
}

// 🧩 Project Gallery Component
// 🧩 Project Gallery Component
function ProjectGallery({ project, isEN, buttonColor }) {
  const projectImages = imagesWorks.filter((img) => img.project === project);
  const description = projectImages[0]?.description || "";

  const [index, setIndex] = useState(0);

  const nextImage = () => setIndex((prev) => (prev + 1) % projectImages.length);
  const prevImage = () =>
    setIndex(
      (prev) => (prev - 1 + projectImages.length) % projectImages.length
    );

  const hasMultipleImages = projectImages.length > 1;

  return (
    <GalleryWrapper>
      {hasMultipleImages && (
        <TriangleButton
          color={buttonColor}
          direction="left"
          onClick={prevImage}
        />
      )}
      <Photo src={projectImages[index].url} alt={`${project} ${index + 1}`} />
      {hasMultipleImages && (
        <TriangleButton
          color={buttonColor}
          direction="right"
          onClick={nextImage}
        />
      )}
      {description && <Title isEN={isEN}>{description}</Title>}
    </GalleryWrapper>
  );
}
