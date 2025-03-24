import {useState} from 'react'

const Contador = () => {

    // HOOK - useState - Manipula o estado da variável
    const[contador,setcontador]=useState(0);
  return (
  <>
  <h1>Meu Contador</h1>
  <p>Você Clicou: {contador} vezes</p>
  <button onClick={()=>setcontador(contador +1)}>Aumentar</button>
  <button onClick={()=>setcontador(contador -1)}>Diminuir</button>
  </>
  )
}

export default Contador
