import { useState } from 'react';
import './index.css';

// Dados das questões (fora do componente para não recriar a cada render)
const questoes = [
  { pergunta: "De qual desses albuns de Charlie Brown JR é a música: Dona do meu Pensamento ?", opcoes: ["Imunidade Musical", "Bocas Ordinarias", "Camisa 10 Joga Bola Até na Chuva", "Tamo Ai na Atividade"], resposta: "Camisa 10 Joga Bola Até na Chuva" },
  {
    pergunta:"De qual desses albuns de Charlie Brown JR é a música: Senhor do Tempo  ?",
    opcoes: ["Chegou Quem Faltava", "Ritmo, Ritual e Responsa", "Acustica MTV", "Imunidade Musical"],
    resposta: "Imunidade Musical"
  },
  {
    pergunta:"De qual desses albuns de Charlie Brown JR é a música: Meu Novo Mundo ?",
    opcoes: ["Chegou Quem Faltava", "La Familia 013", "Acustica MTV", "Imunidade Musical"],
    resposta: "La Familia 013"
  },
  {
    pergunta:"De qual desses albuns de Charlie Brown JR é a música: O Preço ?",
    opcoes: ["Chegou Quem Faltava", "Ritmo, Ritual e Responsa", "Acustica MTV", "Preço Curto... Prazo Longo"],
    resposta: "Preço Curto... Prazo Longo"
  },
  {
    pergunta:"De qual desses albuns de Charlie Brown JR é a música: Tudo Mudar ?",
    opcoes: ["Nadando com os Tubarões", "Ritmo, Ritual e Responsa", "Acustica MTV", "Imunidade Musical"],
    resposta: "Nadando com os Tubarões"
  },
  {
    pergunta:"De qual desses albuns de Charlie Brown JR é a música: Uma Criança com o seu Olhar ?",
    opcoes: ["Chegou Quem Faltava", "Ritmo, Ritual e Responsa", "Tamo Ai na Atividade", "Imunidade Musical"],
    resposta: "Ritmo, Ritual e Responsa"
  },
  {
    pergunta:"De qual desses albuns de Charlie Brown JR é a música: Longe de Você ?",
    opcoes: ["Chegou Quem Faltava", "Ritmo, Ritual e Responsa", "Acustica MTV", "Tamo Ai na Atividade"],
    resposta: "Tamo Ai na Atividade"
  },
  {
    pergunta:"De qual desses albuns de Charlie Brown JR é a música: Quinta Feira ?",
    opcoes: ["Transpiração Continua Prolongada", "Ritmo, Ritual e Responsa", "Acustica MTV", "Imunidade Musical"],
    resposta: "Transpiração Continua Prolongada"
  },
  {
    pergunta:"De qual desses albuns de Charlie Brown JR é a música: Céu Azul ?",
    opcoes: ["Chegou Quem Faltava", "Ritmo, Ritual e Responsa", "Música Popular Caiçara", "Imunidade Musical"],
    resposta: "Música Popular Caiçara"
  }
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
      <div className="final-screen">
  <h2>Quiz Concluído! 🎉</h2>

  <p>
    Sua pontuação final: {pontuacao} de {questoes.length}
  </p>

  <button
    onClick={reiniciarQuiz}
    className="restart-button"
  >
    Reiniciar Quiz
  </button>
</div>
    );
  }

  return (
   <div className="quiz-container">
  <h1 className="quiz-title">Quiz Charlie Brown Jr</h1>

  <p className="score">Pontuação: {pontuacao}</p>

  <hr />

  <div id="quiz-container">
    <h2 className="question">{questaoAtual.pergunta}</h2>

    <div className="options">
      {questaoAtual.opcoes.map((opcao, index) => (
        <button
          key={index}
          onClick={() => verificarResposta(opcao)}
          className="option-button"
        >
          {opcao}
        </button>
      ))}
    </div>

    <p className="feedback">{feedback}</p>
  </div>
</div>
  );
}