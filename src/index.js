import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Iniciando from './components/iniciando';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Iniciando></Iniciando>
  </React.StrictMode>
);

reportWebVitals();


// // combinar duas listas
// const valoresA =  [1, 2, 3, 4,];
// const valoresB =  [8, 9, 10, 11, 24];

// let valoresTotal = [];

// valoresTotal = [...valoresA, ...valoresB];
// // or -> valoresTotal = valoresA.concat(valoresB); <-
// console.log(valoresTotal); //exibir no console

// // combinar duas listas
// const professor = {nome : "Luciano"};
// const disciplina = {disciplina : "PWFE", turma : "2DES-MB"};

// const aulaHoje = {...professor, ...disciplina};
// console.log(aulaHoje);