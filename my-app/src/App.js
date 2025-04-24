import React from 'react';
import Componente from './componente'; // Importação do componente

function App() {
  return (
    <div>
      {/* ...existing code... */}
      <Componente count={10} /> {/* Renderiza o componente com uma prop count */}
      {/* ...existing code... */}
    </div>
  );
}

export default App;