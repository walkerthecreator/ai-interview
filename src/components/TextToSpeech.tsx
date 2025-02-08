import {useState , useEffect } from "react"


function TextToSpeech( { text } : { text : string }){

    const [ isPaused , setIsPaused ] = useState(false)
    const [ voice , setVoice ] = useState<any>(null)
    const [ utterance , setUtterance ] = useState<any>()

    useEffect(()=>{

        const syth = window.speechSynthesis
        const voices = syth.getVoices()
        const uttr = new SpeechSynthesisUtterance(text)

        setUtterance(uttr)
        setVoice(voices[2])


        return () => { syth.cancel() }

    } , [] )

    useEffect(()=>{
      if(utterance != undefined){
        const synth = window.speechSynthesis;
        utterance.voice = voice ;
        utterance.pitch = 1.3 ;
        utterance.rate = 1 ;
        synth.speak(utterance);
        setIsPaused(false);
      }

    } , [utterance])


    const handlePlay = () => {
        const synth = window.speechSynthesis;
    
        if (isPaused) {
          synth.resume();
        }
        console.log("voice" , synth )

        utterance.voice = voice ;
        utterance.pitch = 1.5 ;
        utterance.rate = 1 ;
        synth.speak(utterance);
        setIsPaused(false);
      };
    
    
      const handlePause = () => {
        const synth = window.speechSynthesis;
        synth.pause();
        setIsPaused(true);
      };
    
    
      const handleStop = () => {
        const synth = window.speechSynthesis;
        synth.cancel();
        setIsPaused(false);
      };


    return <div className="flex justify-center gap-2">
        <button className="bg-white p-1 rounded-md text-black gap-2" onClick={handlePlay}>{isPaused ? "Resume" : "Play"}</button>
        <button className="bg-white p-1 rounded-md text-black gap-2" onClick={handlePause}>Pause</button>
        <button className="bg-white p-1 rounded-md text-black gap-2" onClick={handleStop}>Stop</button>
    </div>
}


export default TextToSpeech