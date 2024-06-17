"use client"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { techStack , initialTopics } from "@/lib/constant"


interface TechStackType {
    title : string ,
    active : boolean
}


function Home(){
    const [ topics , setTopics ] = useState(initialTopics)
    const [ active , setActive] = useState("FullStack Developer")
    const [ tech , setTech ] = useState<TechStackType []>([...techStack["FullStack Developer"]])
    const [ role , setRole ] = useState('junior')
    

    function handleClick(topic : { title : string , active : boolean }){
        setActive(topic.title)
        setTech(techStack[topic.title])

        const updatedArr = topics.map(( item )=>{
            if(item.title === topic.title ) return {...item , active : !item.active}
            return { ...item , active : false } 
        })
        setTopics(updatedArr)
    }

    function handleTechStack( title : string ){
        const updatedArr = tech.map(( item )=>{
            if(item.title === title  ) return {...item , active : !item.active}
            return item
        })
        setTech(updatedArr)
    }


    return <div className="w-full min-h-screen flex flex-col justify-around md:w-2/5 mx-auto">
        <div className="">
            <h1 className="text-3xl my-2 font-semibold">Select your Role</h1>
            <div className="mt-4 flex flex-wrap gap-2">
                {
                    topics.map((item , index) => {
                        return <button key={index}
                        onClick={()=>{ handleClick(item) }}
                        className={cn("transition-color p-1 border px-3 rounded-md" , item.active && "bg-green-500/90 text-white")}>{item.title}</button>
                    })
                }
            </div>
        </div>

        <div className="">
            <h1 className="text-3xl my-2 font-semibold">Tech Stack</h1> 
            <div className="flex gap-2 mt-4 flex-wrap"> 
                {
                    tech.map((item : TechStackType , index:number )=>{
                        return <button key={index}
                        onClick={()=>{ handleTechStack(item.title) }}
                        className={cn("transition-color p-1 border px-3 rounded-md" , item.active && "bg-white text-black")}>{item.title}</button>
                    })   
                }  
            </div>  
        </div>

    <div className="w-full ">
        <h1 className="text-3xl my-8 font-semibold">Select Level</h1> 
        <div className="w-fit mb-4 bg-stone-700 p-[2px] rounded-md mx-auto flex gap-1">
        {
            roles.map((item) => {
            return 

            </div>
          })
        }
            <div className={ cn("w-fit px-3 p-1 bg-white-700 rounded text-white" , role === 'junior' ? 'bg-stone-700' : ''  )}>Junior</div>
            <div className={cn("w-fit px-3 p-1 bg-white-700 rounded text-white" , role == 'senior' ? 'bg-stone-700' : '')}>Senior</div>
        </div>
        <button className="bg-green-600 mt-4 p-2 px-6 rounded-lg font-semibold w-full hover:bg-green-600 active:scale-105">Start the Interview</button>
    </div>

    </div>
}



export default Home
