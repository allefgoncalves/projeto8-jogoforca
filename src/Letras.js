import { useState } from 'react';

export default function Letras(props) {
    
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    let i;

    function letraFinalizada(letraSelecionada){
        if(!props.resposta.includes(letraSelecionada)){
            props.setresposta([...props.resposta,letraSelecionada]);//seleção das letras
            if(!props.palavra.includes(letraSelecionada)){//contagem de erros
                i = props.erroindice;
                i++;
                props.seterroindice([i]);//função a baixo era colocar, essa linha pra finalizar primeiro
                //alteraimg(i);
            }

            for(let j=0;j<props.tentativa[0].lengt;j++){//configuração para analize de chutes
                if(letraSelecionada==props.palavra[j]){
                    props.settentativa([props.tentativa[0],])
                }
            }

            let acerto; //letras acertadas;
            for(let k=0;k<props.palavra.lengt;k++){//verifica se o é jogo ganho
                if(props.resposta.includes(props.palavra[k])){
                    acerto++;
                    if(acerto==props.palavra.lengt){
                        props.setcontvitoria([true]);
                        props.setresposta(["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]);
                    }
                }
            }

            if(i==6){
                props.setresposta(["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]);
            } 
        }        
    }
    /*
    function alteraimg(i){//função de teste de renderizaçção
        props.seterroindice([i]);
    }*/

    return (
        <ul className= 'botoes'>
            {alfabeto.map( letra => (
                <li>
                    <button 
                        data-test="letter"
                        key={letra} 
                        className={`botaoletra ${props.resposta.includes(letra)?"finalizado":""}`} 
                        onClick={() => letraFinalizada(letra)}
                    >{letra}</button>
                </li> ) 
            )} 
        </ul>
);}