import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { GlobalStyled } from './GlobalStyled';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyled/>
    <App />
  </React.StrictMode>
);


//1- separar pastas (componentes, constants, context(variaveis com contexto global pra trabalhar com elas em todos os arquivos do projeto. Como uma props num componente proprio.), )
//2- fazer com q as páginas se comuniquem--OK
//3-me comunicar com api --OK
//4-trazer as informações da api
//5- lógica
//6- estilização

// endereçar todas as pags e 
// renderizar os pokemons - {context.pokemon && context.pokemon.map((.....}
