import {useState,useEffect} from 'react'

export default function EscribirTodo({frases,hablar,ide}) {

    const [contador,setContador] = useState(-1)
    useEffect(() => {
       if (contador < frases.length) {
        hablar(frases[contador])
       }  else {
        let a = document.getElementById(ide)
        a.remove()
       } 
    }, [contador])
    
  return (
    <div id={ide}>
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
