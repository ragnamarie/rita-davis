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

const GalleryWrapper = styled.div`
  width: 100%;
  max-width: 900px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 75%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Photo = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

const Arrow = styled.button`
  position: absolute;
  top: 50%;
  border: none;
  padding: 0;
  cursor: pointer;
  z-index: 2;

  width: 84px;
  height: 36px;

  background-color: ${(props) => (props.isEN ? "#ffdbf6" : "#007b1d")};

  mask-image: url(${(props) => props.arrowSrc});
  mask-size: contain;
  mask-repeat: no-repeat;
  mask-position: center;

  -webkit-mask-image: url(${(props) => props.arrowSrc});
  -webkit-mask-size: contain;
  -webkit-mask-repeat: no-repeat;
  -webkit-mask-position: center;

  transform: translateY(-50%);
`;

const LeftArrow = styled(Arrow)`
  left: -100px;
  transform: translateY(-50%) scaleX(-1);
`;

const RightArrow = styled(Arrow)`
  right: -100px;
`;

const Title = styled.h2`
  font-size: 21px;
  font-weight: 600;
  padding-bottom: 21px;
  color: ${(props) => (props.isEN ? "#ffdbf6" : "#007b1d")};
  text-align: center;
  width: 75%;
  line-height: 1.2;
`;

// 🧩 Main Component
export default function Works({ language }) {
  const isEN = language === "EN";

  // Group images by project
  const projects = imagesWorks.reduce((groups, image) => {
    if (!groups[image.project]) {
      groups[image.project] = [];
    }

    groups[image.project].push(image);

    return groups;
  }, {});

  return (
    <PageWrapper>
      {Object.entries(projects).map(([project, projectImages], index) => (
        <ProjectGallery
          key={project}
          project={project}
          projectImages={projectImages}
          isEN={isEN}
          galleryIndex={index}
        />
      ))}
    </PageWrapper>
  );
}

// 🧩 Individual Project Gallery
function ProjectGallery({ project, projectImages, isEN, galleryIndex }) {
  const [index, setIndex] = useState(0);

  // Cycle through arrow1.svg → arrow13.svg → arrow1.svg...
  const arrowNumber = (galleryIndex % 13) + 1;
  const arrowSrc = `/Arrows/arrow${arrowNumber}.svg`;

  const description = isEN
    ? projectImages[0]?.description
    : projectImages[0]?.description_pt;

  return (
    <GalleryWrapper>
      <ImageContainer>
        {/* Previous arrow */}
        {index > 0 && (
          <LeftArrow
            isEN={isEN}
            arrowSrc={arrowSrc}
            onClick={() => setIndex((prev) => prev - 1)}
            aria-label={`Previous image in ${project}`}
          />
        )}

        {/* Current image */}
        <Photo src={projectImages[index].url} alt={`${project} ${index + 1}`} />

        {/* Next arrow */}
        {index < projectImages.length - 1 && (
          <RightArrow
            isEN={isEN}
            arrowSrc={arrowSrc}
            onClick={() => setIndex((prev) => prev + 1)}
            aria-label={`Next image in ${project}`}
          />
        )}
      </ImageContainer>

      {/* Project title/description */}
      {description && <Title isEN={isEN}>{description}</Title>}
    </GalleryWrapper>
  );
}
