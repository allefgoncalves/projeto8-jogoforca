import { useState } from 'react';
import Jogo from './jogo';
import Letras from './Letras';


export default function App() {
  
  
  //const [finalizado, setFinalizado] = useState([]);
  const [palavra, setpalavra] = useState([]);
  const [resposta, setresposta] = useState([]);
  const [tentativa, settentativa] = useState([]);

  function verifica(palavra){
    if(palavra == tentativa){
      //mensagem de vitoria
    }
  }


  /*
  function letraFinalizada(i){
    setfinalizado([...alfabeto]);
    novoArrey.push(i);
    setFinalizado (novoArrey);
  }*/
  

  return (
  <div class= 'container'>
    <div class = 'topo'>
      <div class = 'imagem'></div>
      <Jogo settentativa={settentativa} tentativa={tentativa}
      setpalavra={setpalavra} palavra= {palavra}/>
    </div>
    <Letras setresposta={setresposta} resposta={resposta}/>
  </div>
);}



