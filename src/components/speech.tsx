import { cn } from "@/lib/utils";
import { CircleStop, Mic, Play } from "lucide-react";
import { useEffect, useState } from "react";

interface SpeechType {
  handleNote : ( note : string ) => void ,
  isLoading : boolean 
}


function Speech({ handleNote , isLoading } : SpeechType ){

  const [ isRecording , setIsRecording ] = useState(false)

  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition

  if(!SpeechRecognition){
    return <div className="bg-red-700/40 w-fit px-1 rounded mx-auto">
    <h6 className="">Your current browser does'nt support speech recognition</h6>
    <h3>Suggestion : Please Use Chrome </h3>
    </div> 
  }

  const microphone = new SpeechRecognition();

  microphone.continuous = true;
  microphone.interimResults = true;
  microphone.lang = "en-US";

  const startRecordController = () => {
    
      if(isRecording === true ){
        microphone.stop()
      }
      else{
        microphone.start()

        microphone.onend = () => {
          console.log('stopped recording !')
        }

        microphone.onresult = event => {
          handleNote(event.results[0][0].transcript)
        }
      
        microphone.onstart = () => {
          console.log("microphones on");
        };
      }

      setIsRecording(prev => !prev )
  };


  return <div>
    <button
    disabled={ isLoading }
     className={cn(`p-2 min-w-44 rounded-xl px-4 disabled:bg-zinc-700/30 disabled:text-zinc-300 disabled:cursor-not-allowed` , isRecording ? "bg-red-600 text-red-100" : "bg-white text-black" )}
     onClick={ startRecordController }>{ isRecording ?
      <span className="flex justify-center gap-1 items-center">
        <span className="animate-pulse">
          <CircleStop size={16} />
        </span>
        Stop
      </span>
      : 
      <span className="flex justify-center gap-1 items-center">
        <Mic size={16} />
        Start Speaking
      </span>
       }</button>  
  </div>
}


export default Speech