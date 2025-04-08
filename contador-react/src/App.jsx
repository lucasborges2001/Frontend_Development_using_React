import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Contador: ${count}`;
  }, [count]);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div className="root">
      <h1>Contador con React</h1>
      <p>Contador: {count}</p>
      <button onClick={handleIncrement}>Incrementar</button>
    </div>
  );
}

export default App;