export default function Letras(props) {
const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

function letraFinalizada(){

  }
return (
    <ul className= 'botoes'>
        {alfabeto.map( (letra, i) => (
            <li>
                <button 
                    key={letra} 
                    className={`botaoletra ${props.resposta.includes(i)? 'finalizado' : ''}`} 
                    onClick={() => letraFinalizada(i)}
                >{letra}{}</button>
            </li> ) 
        )} 
    </ul>
);}