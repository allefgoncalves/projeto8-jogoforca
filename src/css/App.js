import { useState } from 'react';
import Jogo from './jogo';

export default function App() {
  
  /*const [alfabeto, setAlfabeto] =  useState (['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','x','z']);
  const [finalizado, setFinalizado] = useState([]);

  function finalizado(i){
    setfinalizado([...alfabeto]);
    novoArrey.push(i);
    setFinalizado (novoArrey);
  }*/

  return (
  <div class= 'container'>
    <div class = 'topo'>
      <div class = 'imagem'></div>
      <Jogo />
    </div>
    <div class= 'botoes'>
      <div class= 'botaoletra'></div>
    </div>
  </div>
);}



