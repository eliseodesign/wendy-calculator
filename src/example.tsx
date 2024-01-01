import React, { useState } from 'react';

const CalculadoraPrecio: React.FC = () => {
  const [libras, setLibras] = useState<number>(1);
  const [precioPorLibra, setPrecioPorLibra] = useState<number>(1.75);
  const [total, setTotal] = useState<number>(libras * precioPorLibra);

  // Calcula el precio total en función de las libras y el precio por libra
  const calcularPrecioTotal = (): string => {
    return (libras * precioPorLibra).toFixed(2);
  };

  // Calcula las libras en función del total y el precio por libra
  const calcularLibras = (): number => {
    return total / precioPorLibra;
  };

  // Maneja el cambio en las libras
  const handleLibrasChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const nuevasLibras = parseFloat(event.target.value);
    setLibras(isNaN(nuevasLibras) ? 0 : nuevasLibras);
    setTotal(isNaN(nuevasLibras) ? 0 : nuevasLibras * precioPorLibra);
  };

  // Maneja el cambio en el precio total
  const handleTotalChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const nuevoTotal = parseFloat(event.target.value);
    setTotal(isNaN(nuevoTotal) ? 0 : nuevoTotal);
    setLibras(isNaN(nuevoTotal) ? 0 : nuevoTotal / precioPorLibra);
  };

  return (
    <div>
      <h2>Precio de la Pechuga de Pollo</h2>
      <label>
        Libras:
        <input type="number" value={libras} onChange={handleLibrasChange} />
      </label>
      <br />
      <label>
        Precio por Libra (USD):
        <input type="number" step="0.01" value={precioPorLibra} readOnly />
      </label>
      <br />
      <label>
        Total (USD):
        <input type="number" step="0.01" value={total} onChange={handleTotalChange} />
      </label>
      <br />
      <p>Total: {calcularPrecioTotal()} USD</p>
    </div>
  );
};

export default CalculadoraPrecio;
