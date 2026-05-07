import { useState, useEffect } from 'react';

const uri = ` https://api.disneyapi.dev/character`;

export default function App() {
  const [personagens, setPersonagens] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Função para buscar os dados
    fetch(uri)
      .then((response) => response.json())
      .then((data) => {
        // A API da Disney retorna os dados dentro de uma propriedade 'data'
        setPersonagens(data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Erro ao buscar personagens:", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Carregando personagens mágicos...</p>;

  return (
    <div style={{ padding: '20px' }}>
      <h1>Personagens Disney</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '20px' }}>
        {personagens.map((char) => (
          <div key={char._id} style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '10px', textAlign: 'center' }}>
            <img src={char.imageUrl} alt={char.name} style={{ width: '100%', borderRadius: '5px' }} />
            <h3>{char.name}</h3>
            { }
            {char.films.length > 0 && <p>🎥 {char.films[0]}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}
