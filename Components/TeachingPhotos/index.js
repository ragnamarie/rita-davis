import styled from "styled-components";

const PhotoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
  padding: 2rem;
  justify-items: center;
  align-items: center;
`;

const Photo = styled.img`
  width: 100%;
  max-width: 300px;
  height: auto;
`;

export default function TeachingPhotos() {
  // assuming you have teaching1.jpg, teaching2.jpg, ... teaching8.jpg in /public
  const photoCount = 8;
  const photos = Array.from(
    { length: photoCount },
    (_, i) => `/teaching${i + 1}.jpg`
  );

  return (
    <PhotoGrid>
      {photos.map((src, i) => (
        <Photo key={i} src={src} alt={`Teaching photo ${i + 1}`} />
      ))}
    </PhotoGrid>
  );
}
