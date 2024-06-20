import { useEffect, useState } from "react";


function Speech(){

  const [ isRecording , setIsRecording ] = useState(false)
  const [ note , setNote ] = useState("")

  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition

  if(!SpeechRecognition){
    return <h6 className="bg-red-700/40 w-fit px-1 rounded mx-auto">your browser does'nt support speech recognition</h6>
  }


  const microphone = new SpeechRecognition();

  microphone.continuous = true;
  microphone.interimResults = true;
  microphone.lang = "en-US";


  const startRecordController = () => {
    if (isRecording) {
      microphone.start();
      microphone.onend = () => {
        console.log("continue..");
        microphone.start();
      };
    } else {
      microphone.stop();
      microphone.onend = () => {
        console.log("Stopped microphone on Click");
      };
    }
    microphone.onstart = () => {
      console.log("microphones on");
    };
  
    microphone.onresult = (event) => {
      const recordingResult = Array.from(event.results)
        .map((result) => result[0])
        .map((result) => result.transcript)
        .join("");
      console.log(recordingResult);
      setNote(recordingResult);
      microphone.onerror = (event) => {
        console.log(event.error);
      };
    };
  };

  useEffect(()=>{

    startRecordController()

  } , [isRecording] )

  return <div>
    <p>{ isRecording ? "on" : "off" }</p>
    <p> transcript : {note}</p>
    <button onClick={ () => setIsRecording( prev => !prev )}>start</button>  
  </div>
}


export default Speech