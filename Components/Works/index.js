"use client";

import { useState, useEffect } from "react";
import styled from "styled-components";
import { imagesWorks } from "@/lib/imagesWorks";

// 🧱 Styled components
const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
  width: 75%; /* desktop-style size */
  object-fit: cover;
  transition: opacity 0.4s ease;
`;

const Title = styled.h2`
  position: absolute;
  bottom: 30px;
  font-size: 21px;
  font-weight: 600;
  color: ${(props) => (props.isEN ? "#ffdbf6" : "#007b1d")};
  text-align: center;
  width: 90vw;
  max-width: 1200px;
  white-space: normal;
  line-height: 1.2;
  text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.3);
`;

// 🧩 Component
export default function Works({ language }) {
  const isEN = language === "EN";

  // Extract unique projects
  const projects = [...new Set(imagesWorks.map((img) => img.project))];

  return (
    <PageWrapper>
      {projects.map((project) => (
        <ProjectGallery key={project} project={project} isEN={isEN} />
      ))}
    </PageWrapper>
  );
}

// 🧩 Project Gallery Component
function ProjectGallery({ project, isEN }) {
  const projectImages = imagesWorks.filter((img) => img.project === project);

  const [index, setIndex] = useState(0);

  // ✅ Automatically cycle every 3 seconds
  useEffect(() => {
    if (projectImages.length <= 1) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % projectImages.length);
    }, 3000); // 3 seconds

    return () => clearInterval(interval); // cleanup
  }, [projectImages.length]);

  // Choose description based on language
  const description = isEN
    ? projectImages[0]?.description
    : projectImages[0]?.description_pt;

  return (
    <GalleryWrapper>
      <Photo src={projectImages[index].url} alt={`${project} ${index + 1}`} />
      {description && <Title isEN={isEN}>{description}</Title>}
    </GalleryWrapper>
  );
}
