import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom/client';
import './index.css';

import Square from './App';

// const root = ReactDOM.createRoot(document.getElementById('root'));
const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <Square />
  </StrictMode>
);
