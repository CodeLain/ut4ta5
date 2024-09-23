import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [visibule, setTextVisibility] = useState(false);

  const handdleTextVisibility = () => {
    setTextVisibility(!visibule);
  };

  return (
    <div className="App">
      <h1>Con el boton de abajo aparece o desaparece texto.</h1>
      <button onClick={handdleTextVisibility}>
        {visibule ? 'Ocultar' : 'Mostrar'}
      </button>

      {visibule && <p>TEXTO A MOSTRAR O OCULTAR.</p>}
    </div>
  );
}

export default App;
