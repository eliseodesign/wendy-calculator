/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { Screen, Teclado, Top, SelectType } from './components';

const App: React.FC = () => {
  const [libras, setLibras] = useState<number>(1);
  const [precioPorLibra, setPrecioPorLibra] = useState<number>(1);
  const [total, setTotal] = useState<number>(libras * precioPorLibra);

  // Maneja el cambio en las libras
  const handleLibrasChange = (value: number | string): void => {
    setLibras((prevLibras) => {
      let updatedLibras = prevLibras.toString();
      
      if (value === '.' && !updatedLibras.includes('.')) {
        updatedLibras += '.00001'
      }
      // Si ya hay un punto y el valor es ".", no hacemos nada
      if (value === '.' && updatedLibras.includes('.')) {
        return parseFloat(updatedLibras);
      }
  
      console.log(updatedLibras.endsWith('00001') && updatedLibras.includes('.'))
      // Si el último caracter es "." y el valor no es ".", agrega "00001"
      if (updatedLibras.endsWith('00001') && updatedLibras.includes('.')) {
        updatedLibras = updatedLibras.replace(/\..*$/, '.')
      }
  
      // Agrega el valor al final
      updatedLibras += value.toString();
  
      return parseFloat(updatedLibras);
    });
  
    // Calcula el nuevo total en función de las libras y el precio por libra
    setTotal(libras * precioPorLibra);
  };
  

  // Maneja el cambio en el precio total
  const handleTotalChange = (value: number | string): void => {
    const newValue = parseFloat(value.toString());
    setTotal(isNaN(newValue) ? 0 : newValue);
    setLibras(isNaN(newValue) ? 0 : newValue / precioPorLibra);
  };

  const handleReset = (): void => {
    setLibras(0);
    setTotal(0);
  };

  return (
    <main className='min-h-screen flex flex-col justify-between p-2'>
      <div>
        <Top />
        <SelectType />
        <Screen libras={libras} total={total} />
      </div>
      <Teclado reset={handleReset} onNumeroClick={handleLibrasChange} />
    </main>
  );
};

export default App;