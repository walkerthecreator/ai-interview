import { cn } from "@/lib/utils";
import { AudioLines, CircleStop, Mic, Play } from "lucide-react";
import { useEffect, useState } from "react";


interface SpeechType {
  handleNote: (note: string) => void,
  isLoading: boolean
}

function Speech({ handleNote, isLoading }: SpeechType) {

  const [isRecording, setIsRecording] = useState(false)

  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition

  if (!SpeechRecognition) {
    return <div className="bg-red-700/40 w-fit px-1 rounded mx-auto absolute top-0 right-0">
      <h6 className="">Your current browser doesn't support speech recognition</h6>
      <h3>Suggestion : Please Use Chrome,Brave, or any other browser. </h3>
    </div>
  }

  const microphone = new SpeechRecognition();

  microphone.continuous = true;
  microphone.interimResults = true;
  microphone.lang = "en-US";

  const startRecordController = () => {

    if (isRecording === true) {
      microphone.stop()
    }
    else {
      microphone.start()

      microphone.onend = () => {
        console.log('stopped recording !')
        setIsRecording(false)
      }

      microphone.onresult = event => {
        handleNote(event.results[0][0].transcript)
      }

      microphone.onstart = () => {
        console.log("microphones on");
      };
    }

    setIsRecording(prev => !prev)
  };


  return <button
    disabled={false}
    className={cn(`p-2 rounded-xl disabled:bg-zinc-700/30 disabled:text-zinc-300 disabled:cursor-not-allowed`, isRecording &&
      "text-red-400")}
    onClick={startRecordController}>
    {isRecording ?
      <CircleStop size={18} className="text-red-600" />
      :
      <AudioLines  size={18} />
    }</button>
}


export default Speech