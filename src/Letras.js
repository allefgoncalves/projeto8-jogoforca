export default function Letras(props) {
const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

function letraFinalizada(){

  }

return (
    <ul class= 'botoes'>
        {alfabeto.map( (letra, indice) => (
            <li 
                key={letra} 
                class={`botaoletra ${props.resposta.includes(indice) ? 'finalizado' : ''}`} 
                onClick={() => letraFinalizada(indice)}
            ></li> ) 
        )} 
    </ul>
);}