import { useRef } from "react";
import styled from "styled-components";
import { ChevronLeft, ChevronRight } from "lucide-react"; // icons for arrows

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
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE/Edge */
  &::-webkit-scrollbar {
    display: none; /* Chrome/Safari */
  }
`;

const GalleryTrack = styled.div`
  display: flex;
  padding: 1rem 2rem;
`;

const Photo = styled.img`
  height: 400px;
  width: auto;
  object-fit: cover;
  flex-shrink: 0;
`;

const ArrowButton = styled.button`
  all: unset;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  border: 2px solid var(--color-surface-white, #fff);
  border-radius: 50%;
  width: 48px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;
  background: transparent;
  z-index: 10;

  &:hover {
    background: var(--color-just-black, #000);
    border-color: var(--color-just-black, #000);
    color: var(--color-surface-white, #fff);
  }

  &.left {
    left: 1rem;
  }

  &.right {
    right: 1rem;
  }
`;

export default function TeachingPhotos() {
  const galleries = [useRef(null), useRef(null)];

  const scrollGallery = (ref, direction) => {
    if (ref.current) {
      const scrollAmount = window.innerWidth * 0.8; // scroll ~80% of viewport
      ref.current.scrollBy({
        left: direction === "right" ? scrollAmount : -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const photosOne = Array.from(
    { length: 5 },
    (_, i) => `/teaching${i + 1}.jpeg`
  );
  const photosTwo = Array.from(
    { length: 5 },
    (_, i) => `/teaching${i + 6}.jpeg`
  );

  return (
    <PageWrapper>
      {[photosOne, photosTwo].map((photoSet, index) => (
        <GalleryWrapper key={index}>
          <ArrowButton
            className="left"
            aria-label="previous"
            onClick={() => scrollGallery(galleries[index], "left")}
          >
            <ChevronLeft size={24} />
          </ArrowButton>

          <GalleryContainer ref={galleries[index]}>
            <GalleryTrack>
              {photoSet.map((src, j) => (
                <Photo key={j} src={src} alt={`Teaching photo ${index}-${j}`} />
              ))}
            </GalleryTrack>
          </GalleryContainer>

          <ArrowButton
            className="right"
            aria-label="next"
            onClick={() => scrollGallery(galleries[index], "right")}
          >
            <ChevronRight size={24} />
          </ArrowButton>
        </GalleryWrapper>
      ))}
    </PageWrapper>
  );
}
