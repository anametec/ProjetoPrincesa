import { useState } from 'react';

// Dados das questões (fora do componente para não recriar a cada render)
const questoes = [
  { pergunta: "Qual é a princesa da Disney que tem um cabelo muito longo?", opcoes: ["Cinderela", "Branca de Neve", "Rapunzel", "Ariel"], resposta: "Rapunzel" },
  { pergunta: "Qual é a princesa da Disney que tem uma fada madrinha?", opcoes: ["Cinderela", "Branca de Neve", "Rapunzel", "Ariel"], resposta: "Cinderela" },
  { pergunta: "Qual é a princesa da Disney que tem um príncipe chamado Eric?", opcoes: ["Cinderela", "Branca de Neve", "Rapunzel", "Ariel"], resposta: "Ariel" },
  { pergunta: "Qual é a princesa da Disney que comeu uma maçã envenenada?", opcoes: ["Cinderela", "Branca de Neve", "Rapunzel", "Ariel"], resposta: "Branca de Neve" },
  { pergunta: "Qual é a princesa da Disney que lutou numa guerra contra os vikings?", opcoes: ["Mulan", "Pocahontas", "Tiana", "Merida"], resposta: "Mulan" },
  { pergunta: "Qual é a princesa da Disney que tem um sapo como amigo?", opcoes: ["Mulan", "Pocahontas", "Tiana", "Merida"], resposta: "Tiana" },
  { pergunta: "Qual é a princesa da Disney que tem um espírito animal chamado Meeko?", opcoes: ["Mulan", "Pocahontas", "Tiana", "Merida"], resposta: "Pocahontas" },
  { pergunta: "Qual é a princesa da Disney que tem uma mãe que virou um urso?", opcoes: ["Mulan", "Pocahontas", "Tiana", "Merida"], resposta: "Merida" },
  { pergunta: "Qual é a princesa da Disney que dormiu por 100 anos?", opcoes: ["Aurora", "Pocahontas", "Tiana", "Merida"], resposta: "Aurora" },
  { pergunta: "Qual é a princesa da Disney que tem um amigo chamado Lumière?", opcoes: ["Bela", "Pocahontas", "Tiana", "Merida"], resposta: "Bela" },
  { pergunta: "Qual é a princesa da Disney que atavessou o oceano?", opcoes: ["Moana", "Pocahontas", "Tiana", "Merida"], resposta: "Moana" },
  { pergunta: "Qual é a princesa da Disney que voou num tapete mágico?", opcoes: ["Jasmine", "Pocahontas", "Tiana", "Merida"], resposta: "Jasmine" }
];

export default function Quiz() {
  const [indiceQuestaoAtual, setIndiceQuestaoAtual] = useState(0);
  const [pontuacao, setPontuacao] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [quizConcluido, setQuizConcluido] = useState(false);

  const questaoAtual = questoes[indiceQuestaoAtual];

  const verificarResposta = (respostaSelecionada) => {
    if (respostaSelecionada === questaoAtual.resposta) {
      setPontuacao(pontuacao + 1);
      setFeedback("Resposta correta! ✅");
    } else {
      setFeedback(`Resposta incorreta! ❌ (A correta era: ${questaoAtual.resposta})`);
    }

    // Espera 1 segundo para mostrar a próxima pergunta, permitindo ver o feedback
    setTimeout(() => {
      const proximoIndice = indiceQuestaoAtual + 1;
      if (proximoIndice < questoes.length) {
        setIndiceQuestaoAtual(proximoIndice);
        setFeedback("");
      } else {
        setQuizConcluido(true);
        setFeedback("");
      }
    }, 1000);
  };

  const reiniciarQuiz = () => {
    setIndiceQuestaoAtual(0);
    setPontuacao(0);
    setFeedback("");
    setQuizConcluido(false);
  };

  if (quizConcluido) {
    return (
      <div style={{ padding: '20px', fontFamily: 'Arial' }}>
        <h2>Quiz Concluído! 🎉</h2>
        <p>Sua pontuação final: {pontuacao} de {questoes.length}</p>
        <button onClick={reiniciarQuiz}>Reiniciar Quiz</button>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Quiz Disney</h1>
      <p>Pontuação: {pontuacao}</p>
      <hr />
      
      <div id="quiz-container">
        <h2>{questaoAtual.pergunta}</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '10px' }}>
          {questaoAtual.opcoes.map((opcao, index) => (
            <button 
              key={index} 
              onClick={() => verificarResposta(opcao)}
              style={{ padding: '10px', cursor: 'pointer' }}
            >
              {opcao}
            </button>
          ))}
        </div>
        <p style={{ marginTop: '20px', fontWeight: 'bold' }}>{feedback}</p>
      </div>
    </div>
  );
}