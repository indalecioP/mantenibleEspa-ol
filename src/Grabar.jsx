import {useState} from 'react'

export default function Grabar({grabar,abort}) {

  return (
    <div>
        <button onClick={()=>{
            grabar()
        }}>grabar</button>
        <button onClick={()=>{
            abort()
        }}>abort</button>
    </div>
  )
}
