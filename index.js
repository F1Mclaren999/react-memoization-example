import React, { useState } from 'react';
import { render } from 'react-dom';
import './style.css';

const App = () => {
  const [name] = useState('pingPong');
  return (
    <div id="main">
      <h3>{name}</h3>
    </div>
  );
};

render(<App />, document.getElementById('root'));
