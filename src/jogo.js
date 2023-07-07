import palavras from './palavras';

export default function Jogo(props) {
    function iniciajogo(){
        let x = palavras.sort(()=>Math.random()-0.5)
        props.setpalavra(x[0]);
        criapalavra();
    } 

    function criapalavra(props){
        console.log(props);
        for(let i=0; i< props.palavra.length; i++){
            props.settentativa([...props.tentativa, "_"]);
        }
    }


    return (
    <div className = 'jogo'>
        <button className =  'botão' onClick={() => iniciajogo()}>escolher palavra</button>
        <div className = 'palavra'>
            
        </div>
    </div>  

    );}