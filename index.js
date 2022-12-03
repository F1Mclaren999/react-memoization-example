import React, { useState, useEffect, StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

function Movie({ name, cast, isMemo }) {
  console.log(isMemo ? 'memoized' : 'movie');
  return (
    <div>
      <div>Movie Name: {name}</div>
      <div>Cast: {cast}</div>
    </div>
  );
}

const MemoizedMovie = React.memo(Movie);

function App() {
  const [toggle, setToggle] = useState(true);
  useEffect(() => {
    const id = setInterval(() => {
      setToggle((toggle) => !toggle);
    }, 3000);
    return () => clearInterval(id);
  }, []);
  return (
    <div id="main">
      <h3>List</h3>
      <div>
        <MemoizedMovie name={'PingPong'} cast={'Pingu'} isMemo={true} />
        <Movie name={'PingPong'} cast={'Pingu'} isMemo={false} />
      </div>
    </div>
  );
}

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
