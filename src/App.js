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
  const [palavra, setpalavra] = useState([]);     //palavra chave
  const [resposta, setresposta] = useState(["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]);  //letras selecionadas
  const [tentativa, settentativa] = useState([]); 
  const [letraSelecionada, setletraSelecionada] = useState([]); 
  const [erro, seterro] = useState([]);
  const [erroindice, seterroindice] = useState([0]);
  const [contvitoria, setcontvitoria] = useState([false]);
  erro[0]=inicio;
  erro[1]=erro1;
  erro[2]=erro2;
  erro[3]=erro3;
  erro[4]=erro4;
  erro[5]=erro5;
  erro[6]=erro6;


  /*
  function verifica(palavra){
    if(palavra == tentativa){
      //mensagem de vitoria
    }
  }

  function letraFinalizada(i){
    setfinalizado([...alfabeto]);
    novoArrey.push(i);
    setFinalizado (novoArrey);
  }*/
  
  return (
  <div className= 'container'>
    <div className= 'topo'>
      <div className = 'imagem'>
        <img data-test="game-image" src={erro[erroindice]}/>
      </div>
      <Jogo settentativa={settentativa} tentativa={tentativa}
        setpalavra={setpalavra} palavra= {palavra}
        erroindice={erroindice} seterroindice={seterroindice}
        setresposta={setresposta} resposta={resposta}
        setcontvitoria={setcontvitoria} contvitoria={contvitoria}/>
    </div>
    <Letras setresposta={setresposta} resposta={resposta}
    settentativa={settentativa} tentativa={tentativa}
    setpalavra={setpalavra} palavra= {palavra}
    erroindice={erroindice} seterroindice={seterroindice}
    setcontvitoria={setcontvitoria} contvitoria={contvitoria}/>
  </div>
);}





