"use client";

import styled from "styled-components";
import TeachingPhotos from "@/Components/TeachingPhotos";

const PageGrid = styled.div`
  min-height: 65vh;
  display: grid;
  grid-template-columns: 1.5fr 1.5fr 0.5fr;
  gap: 2rem;
  padding: 2rem;
  align-items: start;
  justify-content: center;
  overflow-y: auto;

  background-color: ${({ isEN }) => (isEN ? "#003db2" : "#ff9e33")};
  color: ${({ isEN }) => (isEN ? "#ff9e33" : "#003db2")};

  /* optional: make mobile responsive */
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 6rem 1rem;
  }
`;

const Column = styled.div`
  display: grid;
  gap: 1rem;
`;

const CircleLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 3rem;
  border: 3px solid ${({ isEN }) => (isEN ? "#ff9e33" : "#003db2")};
  border-radius: 50%;
  color: ${({ isEN }) => (isEN ? "#ff9e33" : "#003db2")};
  text-decoration: none;
  text-align: center;
`;

export default function TeachingPage({ language }) {
  const isEN = language === "EN";

  return (
    <>
      <PageGrid isEN={isEN}>
        <Column>
          <div>
            {isEN ? (
              <>
                A Gigantic Human Printing Press workshop with Oliver Long and
                Patrick Zavadskis. For EKA GD Bachelor. Tallinn, March 2023.
                <br />
                <br />
                Calendar workshop with Cecilia Breña. EKA GD Bachelor. Tallinn,
                January 2024.
                <br />
                <br />
                Gift-making workshop. At the Stand-in School for Graphic Design
                (runned by EKA GD MA). Berlin, February 2024.
                <br />
                <br />
                Messy wishes for a murky belonging, with Cecilia Breña. At the
                Stand-in School for Graphic Design (runned by EKA GD MA).
                Berlin, February 2024.
              </>
            ) : (
              <>
                A Gigantic Human Printing Press workshop com Oliver Long e
                Patrick Zavadskis. Bacharelado EKA Design gráfico. Tallinn,
                Março, 2023.
                <br />
                <br />
                Workshop Calendário com Cecília Breña. Bacharelado EKA Design
                gráfico. Tallinn, Janeiro, 2024. Workshop “Fazer presentes”.
                <br />
                <br />
                Durante a Stand-in School for Graphic Design. Berlim, Fevereiro,
                2024.
                <br />
                <br />
                Workshop Messy Wishes for a Murky Belonging, com Cecilia Breña.
                Durante a Stand-in School for Graphic Design. Berlim, Fevereiro,
                2024.
              </>
            )}
          </div>
          <CircleLink href="/" isEN={isEN}>
            {isEN ? "back" : "voltar"}
          </CircleLink>
        </Column>

        <Column>
          <div>
            {isEN ? (
              <>
                Gift-making workshop. Online for Purchase Anthropology & Media
                Studies Club. New York, April 2024.
                <br />
                <br />
                Image 1: Experimental riso course. EKA GD Bachelor. Tallinn,
                September 2024.
                <br />
                <br />
                Dinner series class. EKA GD Master. Tallinn, September-December
                2024.
                <br />
                <br />
                On HOSTING workshop. EKA GD Bachelor. Tallinn, January 2025.
                <br />
                <br />
                Stand-in School of Graphic Design. EKA GD Master. Lisbon, March
                2025.
              </>
            ) : (
              <>
                Workshop “Fazer presentes”. Para estudantes da Purchase
                Anthropology & Media Studies Club. Nova Iorque, Abril, 2024.
                <br />
                <br />
                Imagem 1: Curso de risografia. Bacharelado EKA Design Gráfico.
                Tallinn, Setembro, 2024.
                <br />
                <br />
                Workshop de jantares. Mestrado EKA Design Gráfico. Tallinn,
                Setembro-Dezembro 2024.
                <br />
                <br />
                Workshop “On HOSTING”. Bacharelado EKA Design gráfico. Tallinn,
                Janeiro, 2025.
                <br />
                <br />
                Stand-in School of Graphic Design. Mestrado EKA Design Gráfico.
                Lisboa, Março 2025.
              </>
            )}
          </div>
        </Column>
      </PageGrid>

      <TeachingPhotos language={language} />
    </>
  );
}

// Optional: tag to indicate which theme to use
TeachingPage.pageTheme = "blueOrange";
