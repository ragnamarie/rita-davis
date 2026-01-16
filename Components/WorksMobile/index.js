"use client";

import { useState, useEffect } from "react";
import styled from "styled-components";
import { imagesWorks } from "@/lib/imagesWorks";

/* ─────────── styled components ─────────── */

const PageWrapper = styled.div`
  width: 100%;
  overflow-x: hidden;
`;

const GalleryWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center; /* centers image */
`;

const Photo = styled.img`
  width: 95%; /* same as desktop */
  height: auto;
  object-fit: cover;
  display: block;
`;

const Title = styled.h2`
  position: absolute;
  bottom: 20px;
  width: 100%;
  padding: 0 16px;
  font-size: 21px;
  font-weight: 600;
  text-align: center;
  line-height: 1.2;

  color: ${({ isEN }) => (isEN ? "#ffdbf6" : "#007b1d")};
  text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.3);
`;

/* ─────────── component ─────────── */

export default function WorksMobile({ language }) {
  const isEN = language === "EN";

  const projects = [...new Set(imagesWorks.map((img) => img.project))];

  return (
    <PageWrapper>
      {projects.map((project) => (
        <ProjectGalleryMobile key={project} project={project} isEN={isEN} />
      ))}
    </PageWrapper>
  );
}

/* ─────────── project gallery ─────────── */

function ProjectGalleryMobile({ project, isEN }) {
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

  const description = isEN
    ? projectImages[0]?.description
    : projectImages[0]?.description_pt;

  return (
    <GalleryWrapper>
      <Photo
        src={projectImages[index].url}
        alt={`${project} ${index + 1}`}
        draggable={false}
      />

      {description && <Title isEN={isEN}>{description}</Title>}
    </GalleryWrapper>
  );
}
