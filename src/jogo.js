import palavras from './palavras';

export default function Jogo(props) {
    let x;
    
    function iniciajogo(){
        props.settentativa([props.tentativa,""]);
        props.seterroindice([0]);
        props.setresposta([""]);
        criapalavra(props);
        props.setcontvitoria([false]);
    } 
 
    function criapalavra(props){
        x = palavras.sort(()=>Math.random()-0.5);
        let y=[];
        //console.log(x[0].length);
        for(let i=0;i<x[0].length;i++){
            y[i]=x[0][i];
        }
        props.setpalavra(y);
        // console.log(x[0]);
        // console.log(props.tentativa);
        const espaco = [];

        for(let i=0; i<x[0].length; i++){
            espaco[i]="_ ";
        }
       // props.settentativa([espaco]);
      
        // console.log(espaco);
        //console.log(props);
        // console.log(props.tentativa);
    }

    return (
    <div className = 'jogo'>
        <button data-test="choose-word" className = 'botão' onClick={()=>iniciajogo()}>escolher palavra</button>
        <div className = 'palavra' >
            <lu data-test="word">{props.palavra.map((letra)=>
                <li className={`${(props.erroindice<6&&props.contvitoria==true)?"green":""} ${props.erroindice>=6?"red":""}`}>
                    {props.resposta.includes(letra)?`${letra} `:`_`}
                    {console.log(props.resposta.includes(letra))}
                </li>
            )}
            </lu>
            <br></br>
            {props.resposta.length>10?"":props.resposta}
        </div>
    </div>  

    );}