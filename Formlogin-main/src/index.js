import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Если вы хотите начать измерять производительность в вашем приложении, передайте функцию
// для вывода результатов (например: reportWebVitals(console.log))
// или отправьте на аналитический сервер. Узнайте больше: https://bit.ly/CRA-vitals
reportWebVitals();
