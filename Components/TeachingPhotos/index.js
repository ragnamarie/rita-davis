import { useRef } from "react";
import styled from "styled-components";

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 2rem 0;
`;

const GalleryWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const GalleryContainer = styled.div`
  width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  scroll-behavior: smooth;
  display: flex;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const GalleryTrack = styled.div`
  display: flex;
  padding: 0rem 2rem;
`;

const Photo = styled.img`
  height: 375px;
  width: auto;
  padding: 1rem;
  object-fit: cover;
  flex-shrink: 0;
`;

const TriangleButton = styled.button`
  all: unset;
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  width: 0;
  height: 0;

  border-top: 25px solid transparent;
  border-bottom: 25px solid transparent;

  ${({ direction, color }) =>
    direction === "left"
      ? `
        border-right: 35px solid ${color};
        left: 10px;
      `
      : `
        border-left: 35px solid ${color};
        right: 10px;
      `}

  transition: filter 0.2s ease;
`;

export default function TeachingPhotos({ language }) {
  const isEN = language === "EN";

  const arrowColor = isEN ? "#ff9e33" : "#003db2";

  const photosOne = Array.from(
    { length: 7 },
    (_, i) => `/teaching${i + 1}.jpeg`
  );
  const photosTwo = Array.from(
    { length: 7 },
    (_, i) => `/teaching${i + 8}.jpeg`
  );
  const photosThree = Array.from(
    { length: 7 },
    (_, i) => `/teaching${i + 15}.jpeg`
  );
  const photosFour = Array.from(
    { length: 7 },
    (_, i) => `/teaching${i + 22}.jpeg`
  );

  const photoSets = [photosOne, photosTwo, photosThree, photosFour];
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const galleries = photoSets.map(() => useRef(null));

  const scrollGallery = (ref, direction) => {
    if (ref.current) {
      const scrollAmount = window.innerWidth * 0.8;
      ref.current.scrollBy({
        left: direction === "right" ? scrollAmount : -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <PageWrapper>
      {photoSets.map((photoSet, index) => (
        <GalleryWrapper key={index}>
          <GalleryContainer ref={galleries[index]}>
            <GalleryTrack>
              {photoSet.map((src, j) => (
                <Photo key={j} src={src} alt={`Teaching photo ${index}-${j}`} />
              ))}
            </GalleryTrack>
          </GalleryContainer>

          {/* Triangle arrows */}
          <TriangleButton
            direction="left"
            color={arrowColor}
            onClick={() => scrollGallery(galleries[index], "left")}
          />
          <TriangleButton
            direction="right"
            color={arrowColor}
            onClick={() => scrollGallery(galleries[index], "right")}
          />
        </GalleryWrapper>
      ))}
    </PageWrapper>
  );
}
