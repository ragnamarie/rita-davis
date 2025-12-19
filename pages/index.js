import styled from "styled-components";
import Works from "@/Components/Works";

const StyledLink = styled.a`
  color: ${({ language }) => (language === "EN" ? "#ffdbf6" : "#007b1d")};
  text-decoration: none;

  &:hover {
    opacity: 0.8;
  }
`;

const CircleLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 3rem;
  border: 3px solid
    ${({ language }) => (language === "EN" ? "#ffdbf6" : "#007b1d")};
  border-radius: 50%;
  color: ${({ language }) => (language === "EN" ? "#ffdbf6" : "#007b1d")};
  text-decoration: none;
  text-align: center;
`;

const PageGrid = styled.div`
  min-height: 80vh;
  display: grid;
  grid-template-columns: 1.5fr 1.5fr 0.5fr;
  gap: 2rem;
  padding: 2rem;
  align-items: start;

  background-color: ${({ isEN }) => (isEN ? "#007b1d" : "#ffdbf6")};
  color: ${({ isEN }) => (isEN ? "#ffdbf6" : "#007b1d")};

  overflow-x: hidden;

  /* 📱 Mobile fix */
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 1rem;
  }
`;

const Column = styled.div`
  display: grid;
  gap: 1rem;
`;

export default function HomePage({ language }) {
  const isEN = language === "EN";

  return (
    <>
      <PageGrid isEN={isEN}>
        <Column>
          <div>
            {isEN ? (
              <>
                Rita Davis (b. 1994) is a graphic designer from Belo Horizonte,
                Brazil. She searches for unexpected encounters via printing with
                different methods, drawing with different tools, and bringing
                people together over different excuses.
              </>
            ) : (
              <>
                Rita Davis (n. 1994) é designer gráfico nascida em Belo
                Horizonte, Brasil. Sua prática busca encontros inesperados — por
                meio de experimentações com diferentes métodos de impressão, da
                criação de imagens a partir de diversas ferramentas e reunindo
                pessoas sob diferentes pretextos.
              </>
            )}
          </div>

          <div>
            {isEN ? (
              <>
                Currently based in Tallinn, Estonia, she teaches Graphic Design
                to Bachelor&apos;s and Master&apos;s students at the Estonian
                Academy of Arts (EKA).
              </>
            ) : (
              <>
                Atualmente vive em Tallinn, onde leciona nos cursos de
                Bacharelado e Mestrado em Design Gráfico na Estonian Academy of
                Arts (EKA).
              </>
            )}
          </div>

          <CircleLink href="/teaching" language={language}>
            {isEN ? "more about teaching" : "mais sobre aulas e workshops"}
          </CircleLink>

          <div>
            {isEN ? (
              <>
                Education:
                <br />
                BA in Graphic Design (Federal University of Minas Gerais, Brazil
                2013–2018)
                <br />
                BA in Graphic Design (Budapest Metropolitan University of
                Applied Sciences, Hungary 2016)
                <br />
                MA in Graphic Design (Estonian Academy of Arts, Estonia
                2021–2023)
              </>
            ) : (
              <>
                Formação:
                <br />
                Bacharel em Design Gráfico (Universidade Federal de Minas
                Gerais, Brasil 2013–2018)
                <br />
                Bacharel em Design Gráfico (Budapest Metropolitan University of
                Applied Sciences, Hungria 2016)
                <br />
                Mestre em Design Gráfico (Estonian Academy of Arts, Estônia
                2021–2023)
              </>
            )}
          </div>

          <div>
            <StyledLink href="mailto:ritadrvc@gmail.com" language={language}>
              e-mail
            </StyledLink>
            &nbsp;+&nbsp;
            <StyledLink
              href="https://www.instagram.com/ritadavis"
              target="_blank"
              language={language}
            >
              instagram
            </StyledLink>
            &nbsp;+&nbsp;
            <StyledLink
              href="https://www.are.na/rita-davis/channels"
              target="_blank"
              language={language}
            >
              are.na
            </StyledLink>
          </div>
        </Column>

        <Column>
          <div>
            {isEN ? (
              <>
                Her collaborators include the Estonian Academy of Arts (EE),
                Royal Institute of British Architects (UK), Estonian Museum of
                Applied Art and Design (EE), Garbage Kids collective (EE/GE),
                Hea Uus Graafika (EE), Stoodio Santiago da Silva (DE), Center
                for Maine Contemporary Art (US), Katarina Weslien (US), and
                Colorama (DE).
              </>
            ) : (
              <>
                Internacionalmente colaborou com: Estonian Academy of Arts (EE),
                Royal Institute of British Architects (UK), Estonian Museum of
                Applied Art and Design (EE), Garbage Kids collective (EE/GE),
                Hea Uus Graafika (EE), Stoodio Santiago da Silva (DE), Center
                for Maine Contemporary Art (US), Katarina Weslien (US) e
                Colorama (DE).
              </>
            )}
          </div>

          <div>
            {isEN ? (
              <>
                In Brazil, she has been collaborating with Grupo Galpão,
                CCBB-BH, A Macaco, Agentz Produções Culturais, Aventura
                Produtora, Chão da Feira Editora, Cine Cidade, Editora Âyiné,
                Editora Impressões de Minas, Festival Música Mundo, Par
                Cenografia, Relicário Edições, and Ventura Produtora—as well as
                with other designers such as Felipe Lampejo, João Emediato, and
                Luísa Rabello.
              </>
            ) : (
              <>
                Entre seus colaboradores estão: Grupo Galpão, CCBB-BH, A Macaco,
                Agentz Produções Culturais, Aventura Produtora, Chão da Feira
                Editora, Cine Cidade, Editora Âyiné, Editora Impressões de
                Minas, Festival Música Mundo, Par Cenografia, Relicário Edições,
                Ventura Produtora—e também outros designers como Felipe Lampejo,
                João Emediato e Luísa Rabello.
              </>
            )}
          </div>
        </Column>
      </PageGrid>

      <Works language={language} />
    </>
  );
}

HomePage.pageTheme = "greenPink";
