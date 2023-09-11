import {useState,useEffect} from 'react'

export default function EscribirTodo({frases,hablar}) {

    const [contador,setContador] = useState(-1)
    useEffect(() => {
       contador < frases.length ? hablar(frases[contador]) : console.log('fin')
    }, [contador])
    
  return (
    <div>
        <button onClick={()=>setContador(contador + 1)}>Empezar</button>
        <input type="text" onChange={(e)=>{
            if (e.target.value == frases[contador]){
                setContador(contador + 1)
                e.target.value = ''
            }
            }} />
    </div>
  )
}
