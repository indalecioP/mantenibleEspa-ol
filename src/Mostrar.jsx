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
        onClick={()=>    
            contador < frases.length-1 ? setContador(contador + 1) : console.log('fin')         
        }>
            mostrar
        </button>
        <p>{frases[contador]}</p>
    </div>
  )
}



  

