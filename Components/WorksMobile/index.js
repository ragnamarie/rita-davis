"use client";

import { useState } from "react";
import styled from "styled-components";
import { imagesWorks } from "@/lib/imagesWorks";

/* ─────────── styled components ─────────── */

const PageWrapper = styled.div`
  width: 100%;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const GalleryWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 95%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Photo = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  display: block;
`;

const TitleRow = styled.div`
  width: 95%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 8px 0 8px 0;
`;

const Arrow = styled.button`
  background: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
  flex-shrink: 0;

  width: 28px;
  height: 28px;

  background-color: ${(props) => (props.isEN ? "#ffdbf6" : "#007b1d")};

  mask-image: url(${(props) => props.arrowSrc});
  mask-size: contain;
  mask-repeat: no-repeat;
  mask-position: center;

  -webkit-mask-image: url(${(props) => props.arrowSrc});
  -webkit-mask-size: contain;
  -webkit-mask-repeat: no-repeat;
  -webkit-mask-position: center;
`;

const LeftArrow = styled(Arrow)`
  transform: scaleX(-1);
`;

const RightArrow = styled(Arrow)``;

const Title = styled.h2`
  margin: 0 2px;
  font-size: 18px;
  font-weight: 600;
  padding-bottom: 18px;
  text-align: center;
  line-height: 1.2;

  color: ${({ isEN }) => (isEN ? "#ffdbf6" : "#007b1d")};
`;

/* ─────────── component ─────────── */

export default function WorksMobile({ language }) {
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
        <ProjectGalleryMobile
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

/* ─────────── project gallery ─────────── */

function ProjectGalleryMobile({ project, projectImages, isEN, galleryIndex }) {
  const [index, setIndex] = useState(0);

  // Cycle through arrow1.svg → arrow13.svg → arrow1.svg...
  const arrowNumber = (galleryIndex % 13) + 1;
  const arrowSrc = `/arrows/arrow${arrowNumber}.svg`;

  const description = isEN
    ? projectImages[0]?.description
    : projectImages[0]?.description_pt;

  return (
    <GalleryWrapper>
      {/* Current image */}
      <ImageContainer>
        <Photo
          src={projectImages[index].url}
          alt={`${project} ${index + 1}`}
          draggable={false}
        />
      </ImageContainer>

      {/* Title with arrows */}
      {description && (
        <TitleRow>
          {index > 0 && (
            <LeftArrow
              isEN={isEN}
              arrowSrc={arrowSrc}
              onClick={() => setIndex((prev) => prev - 1)}
              aria-label={`Previous image in ${project}`}
            />
          )}

          <Title isEN={isEN}>{description}</Title>

          {index < projectImages.length - 1 && (
            <RightArrow
              isEN={isEN}
              arrowSrc={arrowSrc}
              onClick={() => setIndex((prev) => prev + 1)}
              aria-label={`Next image in ${project}`}
            />
          )}
        </TitleRow>
      )}
    </GalleryWrapper>
  );
}
