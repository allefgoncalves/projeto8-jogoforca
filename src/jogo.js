import palavras from './palavras';

export default function Jogo(props) {
    function iniciajogo(){
        let x = palavras.sort(()=>Math.random()-0.5)
        props.setpalavra(x[0]);
        criapalavra()
    } 

    function criapalavra(){
        for(let i=0; i< props.palavra.length; i++){
            props.settentativa([...props.tentativa, "_"]);
        }
    }


    return (
    <div class = 'jogo'>
        <button class =  'botão' onClick={() => iniciajogo()}>escolher palavra</button>
        <div class = 'palavra'>`${tentativa}`</div>
    </div>  

    );}