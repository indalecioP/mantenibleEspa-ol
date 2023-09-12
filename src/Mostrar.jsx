import { useState,useEffect } from "react"
export default function Mostrar({frases,hablar}) {

    const [contador,setContador] = useState(-1)
    useEffect(()=>{
        if (contador != -1) {
            hablar(frases[contador])
        }
    },[contador])

  return (
    <div>
        <button
        onClick={(e)=>    
            contador < frases.length-1 ? setContador(contador + 1) : e.target.parentNode.remove()
        }>
            mostrar
        </button>
        <p>{frases[contador]}</p>
    </div>
  )
}



  

