import styled from "styled-components";

const List = styled.ul`
  display: flex;
  gap: 1rem;
  list-style: none;
  padding: 0.5rem 1rem;
  font-weight: 700;

  position: fixed;
  top: 20px;
  right: 20px;
  padding: 1rem;
  z-index: 9999;
`;

const BoxEN = styled.span`
  padding: 0.5rem 1rem;
  cursor: pointer;
  background-color: #ffdbf6;
  color: #007b1d;
`;

const BoxPT = styled.span`
  padding: 0.5rem 1rem;
  cursor: pointer;
  background-color: #007b1d;
  color: #ffdbf6;
`;

export default function Language({ onSelect, language }) {
  // Choose the component dynamically based on current language
  const CurrentBox = language === "EN" ? BoxEN : BoxPT;

  return (
    <List>
      <li>
        <CurrentBox onClick={() => onSelect("EN")}>EN</CurrentBox>
      </li>
      <li>
        <CurrentBox onClick={() => onSelect("PT")}>PT</CurrentBox>
      </li>
    </List>
  );
}
