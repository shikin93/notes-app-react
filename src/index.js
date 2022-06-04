import React from 'react';
import { createRoot } from 'react-dom/client';

import './styles/style.css';

function App() {
  return (
    <div>
      <h1 className="text-6xl font-bold">Hello World</h1>
    </div>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(<App />);