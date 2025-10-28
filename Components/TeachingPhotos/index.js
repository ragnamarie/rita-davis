import { useRef } from "react";
import styled from "styled-components";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
  height: 350px;
  width: auto;
  object-fit: cover;
  flex-shrink: 0;
`;

const ArrowLine = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  height: 48px;
  transform: translateY(-50%);
  pointer-events: none; /* only buttons should capture clicks */
`;

const ArrowButton = styled.button`
  all: unset;
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 3px solid ${(props) => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  z-index: 10;
  pointer-events: auto;
  color: ${(props) => props.color};

  &.left {
    left: 0;
  }

  &.right {
    right: 0;
  }
`;

const ArrowConnector = styled.div`
  position: absolute;
  top: 50%;
  left: 25px; /* space for arrow buttons */
  right: 25px;
  height: 3px;
  background: ${(props) => props.color};
  transform: translateY(-50%);
`;

export default function TeachingPhotos({ language }) {
  const isEN = language === "EN";

  const lineColor = isEN ? "#ff9e33" : "#003db2";
  const arrowColor = isEN ? "#ff9e33" : "#003db2";
  const arrowHoverColor = isEN ? "#003db2" : "#ff9e33";

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

  // Create a ref for each gallery dynamically
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

          {/* Single line with arrows */}
          <ArrowLine>
            <ArrowConnector color={lineColor} />
            <ArrowButton
              className="left"
              color={arrowColor}
              hoverColor={arrowHoverColor}
              onClick={() => scrollGallery(galleries[index], "left")}
            >
              <ChevronLeft size={36} color="currentColor" />
            </ArrowButton>
            <ArrowButton
              className="right"
              color={arrowColor}
              hoverColor={arrowHoverColor}
              onClick={() => scrollGallery(galleries[index], "right")}
            >
              <ChevronRight size={36} color="currentColor" />
            </ArrowButton>
          </ArrowLine>
        </GalleryWrapper>
      ))}
    </PageWrapper>
  );
}
