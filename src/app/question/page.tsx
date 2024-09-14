"use client"
import { useQuestions } from "@/stores/questions.store"

function Page(){

    const { addQuestion , userData } = useQuestions()

    function handleClick(){
        const data = {
            question : "do you have penis ?" ,
            answer : "Yes im a male" ,
            point : 4
        }
        addQuestion(data)
    }

    return <div>
        <h1>Questions : { JSON.stringify(userData) }</h1>
        <button onClick={ handleClick }>Add Questoin</button>
    </div> 


}


export default Page 