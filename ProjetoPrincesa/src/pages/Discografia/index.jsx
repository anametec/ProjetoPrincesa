import { useState, useEffect } from 'react';
import './index.css';

function MusicAPIComponent() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Exemplo buscando álbuns do Red Hot Chili Peppers no iTunes
  // O parâmetro 'term' é a busca e 'entity=album' filtra o tipo de resultado
  const searchTerm = encodeURIComponent('charlie brown jr');
  const uri = `https://itunes.apple.com/search?term=${searchTerm}&entity=album&limit=15`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(uri);
        
        if (!response.ok) {
          throw new Error(`Erro na requisição: ${response.status}`);
        }
        
        const result = await response.json();

        // A estrutura do iTunes retorna um objeto com 'results' (array)
        if (result.results) {
          setData(result.results);
        } else {
          setData([]);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [uri]);

  if (loading) return <div>Carregando músicas...</div>;
  if (error) return <div>Erro: {error}</div>;

  return (
 <div className="music-container">
  <h1 className="music-title">
    Discografia do Charlie Brown Jr
  </h1>

  <div className="music-grid">
    {data.map((item) => (
      <div key={item.collectionId} className="music-card">
        <img
          src={item.artworkUrl100}
          alt={item.collectionName}
          className="music-image"
        />

        <p className="album-name">
          {item.collectionName}
        </p>

        <p className="artist-name">
          {item.artistName}
        </p>
      </div>
    ))}
  </div>
</div>
  );
}

export default MusicAPIComponent;