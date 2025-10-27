import styled from "styled-components";

const Paragraph = styled.div`
  gap: 1rem;
  padding: 1rem;
`;

const Column = styled.div`
  display: grid;
  gap: 1rem;
`;

export default function HomePage({ language }) {
  const isEN = language === "EN";

  const styles = {
    height: "100vh",
    backgroundColor: isEN ? "#007b1d" : "#ffdbf6",
    color: isEN ? "#ffdbf6" : "#007b1d",
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr", // two columns
    gap: "2rem", // space between columns and rows
    padding: "2rem",
    alignItems: "start",
    justifyContent: "center",
    overflowY: "auto", // scroll if content is too tall
  };

  return (
    <div style={styles}>
      <Column>
        <div>
          Rita Davis (b. 1994) is a graphic designer from Belo Horizonte,
          Brazil. She searches for unexpected encounters via printing with
          different methods, drawing with different tools, and bringing people
          together over different excuses.
        </div>
        <divh>
          Currently based in Tallinn, Estonia, she teaches Graphic Design to
          Bachelor&apos;s and Master&apos;s students at the Estonian Academy of
          Arts (EKA). ({language})
        </divh>
        <div>more about teaching</div>
        <div>
          Education: <br></br>BA in Graphic Design (Federal University of Minas
          Gerais, Brazil 2013–2018) BA in Graphic Design (Budapest Metropolitan
          University of Applied Sciences, Hungary 2016) MA in Graphic Design
          (Estonian Academy of Arts, Estonia 2021–2023)
        </div>
        <div>e-mail + instagram + are.na</div>
      </Column>
      <Column>
        <div>
          Her collaborators include the Estonian Academy of Arts (EE), Royal
          Institute of British Architects (UK), Estonian Museum of Applied Art
          and Design (EE), Garbage Kids collective (EE/GE), Hea Uus Graafika
          (EE), Stoodio Santiago da Silva (DE), Center for Maine Contemporary
          Art (US), Katarina Weslien (US), and Colorama (DE).
        </div>
        <div>
          In Brazil, she has been collaborating with Grupo Galpão, CCBB-BH, A
          Macaco, Agentz Produções Culturais, Aventura Produtora, Chão da Feira
          Editora, Cine Cidade, Editora Âyiné, Editora Impressões de Minas,
          Festival Música Mundo, Par Cenografia, Relicário Edições, and Ventura
          Produtora—as well as with other designers such as Felipe Lampejo, João
          Emediato, and Luísa Rabello.
        </div>
      </Column>
    </div>
  );
}

// Optional: tag to indicate which theme to use
HomePage.pageTheme = "greenPink";
