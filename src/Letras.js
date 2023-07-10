export default function Letras(props) {
    
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    let i;
    let acerto=0; //letras acertadas;

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
            
            if(props.palavra.includes(letraSelecionada)){
                acerto++;
                if(acerto==props.palavra.length){
                    props.setcontvitoria([true]);
                    props.setresposta(["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]);
                }
                console.log(props.contvitoria);
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