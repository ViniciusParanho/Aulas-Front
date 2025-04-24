import { useState } from 'react';

function Componente({ count }) {
  const [animal, setAnimal] = useState('');
  const [contador, setContador] = useState(count);
  const animais = ['Cachorro', 'Gato', 'Pássaro', 'Peixe', 'Coelho'];

  const handleAnimalClick = () => {
    const randomAnimal = animais[Math.floor(Math.random() * animais.length)];
    setAnimal(randomAnimal);
  };

  const handleContadorClick = () => {
    setContador(contador + 1);
  };

  const valorSomado = contador + 50;

  return (
    <div>
      <h1>Aula 1 Front</h1>
      <p>O valor do contador, mais 50, é {valorSomado}</p>
      <button onClick={handleAnimalClick}>Clique para ver um animal</button>
      {animal && <p>Animal: {animal}</p>}
      <button onClick={handleContadorClick}>Incrementar Contador</button>
    </div>
  );
}

export default Componente;