interface TecladoProps {
  onNumeroClick: (numero: number | string) => void;
  reset: () => void;
}

export const Teclado: React.FC<TecladoProps> = ({ onNumeroClick, reset }) => {
  const btnClass = 'bg-gray-300 text-gray-700 font-bold text-3xl p-2 rounded';
  const numeros: Array<number | string> = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];

  // Función para manejar la edición del estado al presionar un número
  const handleClick = (numero: number | string): void => {
    onNumeroClick(
      typeof numero === 'number' || (typeof numero === 'string' && numero === '.')
        ? numero
        : 0
    );
  };

  return (
    <div className='grid grid-cols-3 gap-2'>
      <button
        onClick={reset}
        className='bg-red-400 text-gray-200 font-bold text-3xl p-2 rounded col-span-3'>
        Borrar
      </button>
      {numeros.map((numero, index) => (
        <button key={index} className={btnClass} onClick={() => handleClick(numero)}>
          {numero}
        </button>
      ))}
      <button
        onClick={() => handleClick('.')}
        className='bg-gray-300 text-gray-700 font-bold text-3xl p-2 rounded col-span-2'>
        .
      </button>
    </div>
  );
};