import React from 'react';
import './App.css';
import Hello from './Hello';

const App = () => {
  return (
    <div className="App">
      <Hello name="Tomás" age={30} />
      <Hello name="Vasco" age={27} />
      <Hello name="Madalena" age={26} />
    </div>
  );
}

export default App;
