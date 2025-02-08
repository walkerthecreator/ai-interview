import { AudioLines, CircleStop } from 'lucide-react'
import { useState, useRef } from 'react'

export const AudioRecorder = () => {
  const [isRecording, setIsRecording] = useState(false)
  const [audioURL, setAudioURL] = useState<string | null>(null)
  const mediaRecorderRef = useRef<MediaRecorder | null>(null)
  const chunksRef = useRef<Blob[]>([])

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
      mediaRecorderRef.current = new MediaRecorder(stream)

      mediaRecorderRef.current.ondataavailable = (event) => {
        if (event.data.size > 0) {
          chunksRef.current.push(event.data)
        }
      }

      mediaRecorderRef.current.onstop = () => {
        const audioBlob = new Blob(chunksRef.current, { type: 'audio/webm' })
        const audioUrl = URL.createObjectURL(audioBlob)
        setAudioURL(audioUrl)
        chunksRef.current = []
      }

      mediaRecorderRef.current.start()
      setIsRecording(true)
    } catch (error) {
      console.error('Error accessing microphone:', error)
    }
  }

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop()
      mediaRecorderRef.current.stream.getTracks().forEach(track => track.stop())
      setIsRecording(false)
    }
  }

  return (
    <div>
      {
        isRecording ? <button
          onClick={stopRecording}
          className="px-4 py-2 bg-red-900/20 text-red-600 rounded-full"
        >
          {/* <div className='bg-red-600/40 rounded-full h-full w-full absolute top-0 animate-ping right-0 text-xs'/>  */}
          <CircleStop className='h-4 w-4' />
        </button> : <button
          onClick={startRecording}
          className="p-3 bg-zinc-700 text-white rounded-full"
        >
          <AudioLines className='h-4 w-4' />
        </button>
      }

    </div>
  )
}
