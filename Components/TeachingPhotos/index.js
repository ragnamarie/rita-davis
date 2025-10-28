import styled from "styled-components";

const PhotoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Photo = styled.img`
  width: 100%;
  max-width: 600px;
  height: auto;
`;

export default function TeachingPhotos() {
  return (
    <PhotoContainer>
      <Photo src="/teaching2.jpeg" alt="Teaching photo" />
    </PhotoContainer>
  );
}
