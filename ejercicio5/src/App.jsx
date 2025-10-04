import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// Componente MyButton mejorado
function MyButton(props) {
  return (
    <button onClick={props.Fn}>
      Soy un botón custom y mi cuenta es: {props.count}
    </button>
  );
}

// Componente Avatar con URL real
function Avatar({ person, size }) {
  return (
    <img 
      className="avatar" 
      src={person.imageUrl} 
      alt={person.name} 
      width={size} 
      height={size} 
      style={{ borderRadius: '50%', objectFit: 'cover' }}
    />
  );
}

// Componente Profile con imágenes reales
function Profile() {
  return (
    <div>
      <h2>Perfiles de Científicos</h2>
      <Avatar 
        size={100} 
        person={{ 
          name: 'Katsuko Saruhashi', 
          imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/5f/Katsuko_Saruhashi.jpg'
        }} 
      />
      <Avatar 
        size={80} 
        person={{ 
          name: 'Aklilu Lemma', 
          imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/0b/Aklilu_Lemma.jpg'
        }} 
      />
      <Avatar 
        size={50} 
        person={{ 
          name: 'Lin Lanying', 
          imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/6c/Lin_Lanying.jpg'
        }} 
      />
    </div>
  );
}

function App() {
  const [count, setCount] = useState(0);

  const increment = () => setCount((count) => count + 1);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <MyButton count={count} Fn={increment} />
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <Profile />
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
