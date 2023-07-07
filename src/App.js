import { useState } from 'react';
import Jogo from './jogo';
import Letras from './Letras';
import inicio from './assets/forca0.png';
import erro1 from './assets/forca1.png';
import erro2 from './assets/forca2.png';
import erro3 from './assets/forca3.png';
import erro4 from './assets/forca4.png';
import erro5 from './assets/forca5.png';
import erro6 from './assets/forca6.png';

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
  <div className= 'container'>
    <div className= 'topo'>
      <div className = 'imagem'>
        <img src={inicio}/>
      </div>
      <Jogo settentativa={settentativa} tentativa={tentativa}
      setpalavra={setpalavra} palavra= {palavra}/>
    </div>
    <Letras setresposta={setresposta} resposta={resposta}/>
  </div>
);}





