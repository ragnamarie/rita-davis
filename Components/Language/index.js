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

const Box = styled.span`
  padding: 0.5rem 1rem;
  cursor: pointer;
  background-color: ${(props) => props.theme[props.language].bg};
  color: ${(props) => props.theme[props.language].color};
  transition: background-color 0.2s, color 0.2s;
`;

export default function Languages({ onSelect, language, theme }) {
  return (
    <List>
      <li>
        <Box language={language} theme={theme} onClick={() => onSelect("EN")}>
          EN
        </Box>
      </li>
      <li>
        <Box language={language} theme={theme} onClick={() => onSelect("PT")}>
          PT
        </Box>
      </li>
    </List>
  );
}
