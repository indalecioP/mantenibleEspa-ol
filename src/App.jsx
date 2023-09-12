import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import { verbos } from './verbos'
import Mostrar from './Mostrar'
import EscribirTodo from './EscribirTodo'
import EscribirPalabra from './EscribirPalabra'
import Grabar from './Grabar'


function App() {

  const [fra, setFra] = useState('')

  let escucha = new webkitSpeechRecognition();
  escucha.lang = 'es-Es'
  escucha.continuous = true
  escucha.interimResults = false

  escucha.onresult = (event) => {
    const results = event.results
    console.log(results)
    const frase = results[results.length - 1][0].transcript
    if (frase == verbos.tener[fra] && fra < verbos.tener.length-1){
      setFra(fra + 1)
    } else{
      alert('fin')
    }
  }

  const grabar = () => { escucha.start() }

  const abort = () => { escucha.abort() }

  return (
    <div className='contenedor-principal'>
      <h1>curso de español</h1>
      <Mostrar frases={verbos.tener} hablar={hablar} />
      <EscribirTodo frases={verbos.tener} hablar={hablar} ide='et1' />
      <EscribirPalabra frases={verbos.tener} hablar={hablar} ide='ep1'/>
      <Grabar grabar={grabar} abort={abort} />
      <p>{fra}</p>
    </div>
  )
}

var voicesSp = []

var speechMessage = new SpeechSynthesisUtterance();
document.addEventListener('DOMContentLoaded', (e) => {
  speechSynthesis.addEventListener('voiceschanged', (e) => {
    var voices = speechSynthesis.getVoices()
    voices.forEach(voice => {
      if (voice.lang == 'es-ES') {
        voicesSp.push(voice)
      }
    })
  })
})

function hablar(z) {
  speechMessage.text = z
  var aleat = Math.floor(Math.random() * voicesSp.length)
  speechMessage.voice = voicesSp[aleat]
  speechSynthesis.speak(speechMessage)
}



export default App
