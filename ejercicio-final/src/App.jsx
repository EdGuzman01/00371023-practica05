import './App.css'
import { getImageUrl } from './utils.js'

function Avatar({ person, size = 100 }) {
  return (
    <img
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

function Cientifico({ cientifico }) {
  return (
    <div className="cientifico-card">
      <Avatar person={cientifico} size={120} />
      <div className="cientifico-info">
        <h3>{cientifico.name}</h3>
        <p><strong>Profesión:</strong> {cientifico.profesion}</p>
        <p><strong>Premios:</strong> {cientifico.premios}</p>
        <p><strong>Descubrió:</strong> {cientifico.descubrimiento}</p>
      </div>
    </div>
  );
}

function App() {
  const cientificos = [
    {
      name: 'Maria Skłodowska-Curie',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/69/Marie_Curie_c._1898.jpg',
      profesion: 'física y química',
      premios: '4 (Premio Nobel de Física, Premio Nobel de Química, Medalla Davy, Medalla Matteucci)',
      descubrimiento: 'polonio (elemento químico)'
    },
    {
      name: 'Katsuko Saruhashi',
      // URL funcional de la foto encontrada para Saruhashi  
      imageUrl: 'https://awis.org/historical-women/katsuko-saruhashi-phd/',
      // ⚠️ Atención: esta no es una URL directa al archivo de imagen (.jpg/.png).
      // Si el “src” no muestra la imagen, debes usar la URL directa al archivo de imagen.
      // Por ahora puede servir como prueba.
      profesion: 'geoquímica',
      premios: '2 (Premio Miyake de geoquímica, Premio Tanaka)',
      descubrimiento: 'método para medir CO₂ en agua de mar'
    }
  ];

  return (
    <div className="app">
      <header className="app-header">
        <h1>Científicos Notables</h1>
      </header>

      <main className="cientificos-container">
        {cientificos.map((cientifico, index) => (
          <Cientifico
            key={index}
            cientifico={cientifico}
          />
        ))}
      </main>

      <footer className="app-footer">
        <p>Desarrollado con React.js - Guía de Laboratorio V</p>
      </footer>
    </div>
  )
}

export default App
