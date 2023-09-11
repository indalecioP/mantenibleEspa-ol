import {useState,useEffect} from 'react'

export default function EscribirPalabra({frases,hablar}) {

    const [contador,setContador] = useState(-1)
    const [inicio,setInicio] = useState('')
    const [fin,setFin] = useState('')
    useEffect(()=>{
        if (contador != -1 && contador < frases.length) {
            let ar = frases[contador].split(' ')
            hablar(frases[contador])
            setInicio(ar[0])
            setFin(ar.slice(2,ar.length).join(' '))
        } else {
            console.log('fin')
        }
    },[contador])

  return (
    <div>
        <button onClick={()=>setContador(contador + 1)}>empezar</button>
        <span>{inicio}</span>
        <input type="text" onChange={(e)=>{
            if ( e.target.value == frases[contador].split(' ')[1]){
                setContador(contador + 1)
                e.target.value = ''
            }
        }} />
        <span>{fin}</span>
    </div>
  )
}
