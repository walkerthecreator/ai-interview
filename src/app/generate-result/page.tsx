"use client"
import axios from "axios"
import { useQuestions } from "@/stores/questions.store"
import { useEffect, useState } from "react"
import GuageCircle from "@/components/GuageCircle"
import confetti from "canvas-confetti";
import TextToSpeech from "@/components/TextToSpeech"
import useGenerateSpeech from "@/hooks/useUnrealSpeech"


const results = [
    {
        question : "lorem100",
        answer : "mklasnjacc asfkjdsfn sdfhnsdoifj sdf" ,
        point : 5 ,
        feedback : "gudvdhd"
    } , 
    {
        question : "lorem100",
        answer : "mklasnjacc asfkjdsfn sdfhnsdoifj sdf" ,
        point : 7 ,
        feedback : "gudvdhd"
    } , 
    {
        question : "lorem100",
        answer : "mklasnjacc asfkjdsfn sdfhnsdoifj sdf" ,
        point : 2 ,
        feedback : "gudvdhd"
    } , 
]


function Page(){
    const { userData } = useQuestions()
    const [result , setResult ] = useState<any>(results)

    function startConfetti(){
        const end = Date.now() + 1000; // 1 seconds
        const colors = ["#a786ff", "#fd8bbc", "#eca184", "#f8deb1"];
    
        const frame = () => {
          if (Date.now() > end) return;
    
          confetti({
            particleCount: 2,
            angle: 60,
            spread: 55,
            startVelocity: 60,
            origin: { x: 0, y: 0.5 },
            colors: colors,
          });
          confetti({
            particleCount: 2,
            angle: 120,
            spread: 55,
            startVelocity: 60,
            origin: { x: 1, y: 0.5 },
            colors: colors,
          });
    
          requestAnimationFrame(frame);
        };
    
        frame();
    }


    useEffect( () => {
        startConfetti()
    } , [] ) 

    return <main className="w-full md:w-3/5 mt-10 mx-auto">
        <h1 className="text-3xl font-semibold">Result</h1>


        <div className="my-5 flex flex-col gap-3">
            {
                result 
                ?
                result.map((item : any , index : number ) => {
                    return <div key={index} 
                    className="p-2 border rounded-lg slide-up shadow flex gap-4 dark:bg-zinc-900">
                        <GuageCircle 
                            value={
                                item.point} 
                            max={10} 
                            min={0} 
                            className="m-2"
                            gaugePrimaryColor="rgb(79 70 229)"
                            gaugeSecondaryColor="rgba(79, 70, 229, 0.3)"
                        ></GuageCircle>

                        <div className="text-zinc-300 w-full ">
                            <h1 className="text-2xl font-semibold">{item.question}</h1>
                            <p className="mt-2">{item.answer}</p>
                            <div className="bg-emerald-800/20 p-2 rounded my-2">
                                <span className="rounded-lg border border-emerald-800 text-emerald-100 p-1 font-semibold text-xs px-2 bg-emerald-800/50">feedback</span>
                                <h3 className=" text-emerald-100 p-1 my-3 list-item list-inside">{item.feedback}</h3> 
                            </div>
                        </div>
                </div>
                }) 
                :
                ""
            }

        
        </div>
            
    </main>
}

export default Page