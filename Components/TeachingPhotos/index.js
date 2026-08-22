import { useRef, useState, useEffect } from "react";
import styled from "styled-components";

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const GalleryWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const ArrowRow = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px 10px 10px;
`;

const GalleryContainer = styled.div`
  width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  scroll-behavior: smooth;
  display: flex;
  scrollbar-width: none;
  padding: 0 1rem 1rem 1rem;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const GalleryTrack = styled.div`
  display: flex;
  gap: 1rem;
`;

const Photo = styled.img`
  height: 600px;
  width: auto;
  object-fit: cover;
  flex-shrink: 0;
`;

const TriangleButton = styled.button`
  all: unset;
  cursor: pointer;
  width: 0;
  height: 0;

  border-top: 18px solid transparent;
  border-bottom: 18px solid transparent;

  ${({ direction, color }) =>
    direction === "left"
      ? `
        border-right: 28px solid ${color};
      `
      : `
        border-left: 28px solid ${color};
      `}
`;

export default function TeachingPhotos({ language }) {
  const isEN = language === "EN";

  const arrowColor = isEN ? "#ff9e33" : "#003db2";

  const photos = Array.from({ length: 28 }, (_, i) => `/teaching${i + 1}.jpeg`);

  const galleryRef = useRef(null);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Check whether there is content available
  // to the left or right
  const checkScrollPosition = () => {
    if (!galleryRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = galleryRef.current;

    setCanScrollLeft(scrollLeft > 0);

    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 1);
  };

  // Check initial position and listen for scrolling
  useEffect(() => {
    checkScrollPosition();

    const gallery = galleryRef.current;

    if (!gallery) return;

    gallery.addEventListener("scroll", checkScrollPosition);

    return () => {
      gallery.removeEventListener("scroll", checkScrollPosition);
    };
  }, []);

  const scrollGallery = (direction) => {
    if (galleryRef.current) {
      const scrollAmount = window.innerWidth * 0.8;

      galleryRef.current.scrollBy({
        left: direction === "right" ? scrollAmount : -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <PageWrapper>
      <GalleryWrapper>
        {/* Arrow row */}
        <ArrowRow>
          <div>
            {canScrollLeft && (
              <TriangleButton
                direction="left"
                color={arrowColor}
                onClick={() => scrollGallery("left")}
                aria-label="Scroll left"
              />
            )}
          </div>

          <div>
            {canScrollRight && (
              <TriangleButton
                direction="right"
                color={arrowColor}
                onClick={() => scrollGallery("right")}
                aria-label="Scroll right"
              />
            )}
          </div>
        </ArrowRow>

        {/* Photo gallery */}
        <GalleryContainer ref={galleryRef}>
          <GalleryTrack>
            {photos.map((src, index) => (
              <Photo
                key={index}
                src={src}
                alt={`Teaching photo ${index + 1}`}
              />
            ))}
          </GalleryTrack>
        </GalleryContainer>
      </GalleryWrapper>
    </PageWrapper>
  );
}
