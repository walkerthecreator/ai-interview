"use client"
import { useEffect, useState } from "react"
import { ArrowRight } from "lucide-react"
import { useRouter } from "next/navigation"
import Dictaphone from "@/components/speech"
import TextToSpeech from "@/components/TextToSpeech"
import axios from "axios"

const questions = [
    {
      "type": "behaviour",
      "question": "Describe a situation where you encountered a bug in your code. How did you approach debugging the issue?"
    },
    {
      "type": "behaviour",
      "question": "You're working on a feature with a senior developer. They suggest an approach you're not familiar with. How do you handle this situation?"
    },
    {
      "type": "mcq",
      "question": "Which of the following best describes the purpose of JSX in React?",
      "options": [
        "A way to style components",
        "A syntax extension for writing HTML within JavaScript",
        "A method for managing state in React applications",
        "A library for building user interfaces"
      ],
      "ans": 1
    },
    {
      "type": "theory",
      "question": "Explain the concept of the DOM (Document Object Model) and its role in web development."
    },
    {
      "type": "output",
      "question": "Write HTML code to create a responsive card layout with an image, title, and description. The card should adjust its size based on the screen width."
    },
    {
      "type": "tailwindcss",
      "question": "How would you use Tailwind CSS to achieve a flexbox layout with two evenly sized columns?"
    },
    {
      "type": "javascript",
      "question": "What is the difference between 'let' and 'const' declarations in JavaScript?"
    },
    {
      "type": "typescript",
      "question": "Explain how interfaces are used in TypeScript to define the structure of objects."
    },
    {
      "type": "error",
      "question": "The following JavaScript code throws an error: `function add(x, y) { return x + y; }; console.log(add(5, 'hello'));` Why does this code produce an error, and how can you fix it?"
    },
    {
      "type": "mcq",
      "question": "What is the primary benefit of using a version control system like Git in a development workflow?",
      "options": [
        "Allows for easy collaboration on code between developers",
        "Tracks changes made to code over time",
        "Both A and B",
        "Provides a secure way to store code"
      ],
      "ans": 2
    }
  ]

  interface QuestionType {
    questions : string ,
    point : number ,
    type : string 
  }
  

function Interview(){

    const [active , setActive ] = useState(0) 
    const [question , setQuestion ] = useState<QuestionType [] | null >(null)
    const [ answer , setAnswer ] = useState("")

    const router = useRouter()

    useEffect(() => {
      async function getQuestion(){
        try{
          const response = await axios.get(`http://localhost:3000/api/generateQuestions`)
          console.log(response.data)
          setQuestion( response.data.data )
        }
        catch(err){
          if(err instanceof Error) console.log(err.message)
        } 
      }

      getQuestion()
    } , [])
   
    function handleNext(){
        if(active === questions.length - 1 ){
            router.push('/result')
        }
        else{
            setActive(active + 1)
        }
    }

    function handleNote(note : string ){
      console.log('running')
      setAnswer(note)
    }

    return <div className="w-3/5 mx-auto mt-20 flex flex-col">
            {/* <div className="mb-2 flex justify-between items-center">
                <h2 className="text-xl font-semibold">{ questions[active].question }</h2>
                <span className="bg-white rounded text-black p-1">{ questions[active].type.toString() }</span>
            </div> */}


            <div className="my-10">
              <Dictaphone handleNote={handleNote}/>
            </div>

              {
                ( question !== null ) ?
                <div>
                  <div className="flex justify-between items-start gap-3">
                  <h1 className="text-2xl font-semibold">{ question[active].questions }</h1>
                  <span className="bg-zinc-800 text-zinc-200 text-sm p-1 px-2 rounded border border-zinc-600">{ question[active].type }</span>
                  </div>
                    <div className="flex flex-col gap-3 mt-4">
                        <textarea placeholder="Start Speaking..." rows={10} defaultValue={answer} 
                        className="p-2 px-3 rounded border border-zinc-700 outline-none" name="answer" id="txt"></textarea>
                    </div>
                </div>
                :
                ""
              }
            <div className="my-4">

            </div>


            <div className="my-4">

            {
                // questions[active].type === 'mcq' ? 
                // <div className="flex flex-col gap-3">
                //     {
                //         questions[active]?.options!.map((item : string , index) => {
                //             return <button
                //             className="p-2 bg-zinc-800 hover:bg-zinc-700 transition-colors font-medium border border-zinc-700 rounded" 
                //             key={index}>{item}</button>
                //         })
                //     }
                // </div>
                // :
                // ""
            }
            </div>

            

            <button className="p-2 flex justify-center gap-1 font-semibold rounded bg-green-600 mt-10 w-40 mx-auto" 
            onClick = { handleNext }>
                { active == questions.length - 1  ? "Finish" : "Next"  } 
                <ArrowRight/>
            </button>
    </div>
}


export default Interview