"use client"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { techStack , initialTopics , interviewRoles } from "@/lib/constant"
import { useParams, usePathname, useRouter, useSearchParams } from "next/navigation"


interface TechStackType {
    title : string ,
    active : boolean
}


function Home(){
    const router = useRouter()
    const [ topics , setTopics ] = useState(initialTopics)
    const [ active , setActive] = useState("FullStack Developer")
    const [ tech , setTech ] = useState<TechStackType []>([...techStack["FullStack Developer"]])
    const [ role , setRole ] = useState('junior')
    
    const  params  = useSearchParams()
    const pathname = usePathname()

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

    function handleSubmit(){

        const techArray = []

        for(let i of tech){
            if(i.active) techArray.push(i.title)
        }

        const query = new  URLSearchParams(params)
        query.set('role' , active )
        query.set('tech' , JSON.stringify(techArray))
        query.set('position' , role )
        router.replace(`/interview/?${query.toString()}`)
    }

    console.log('role' , role)
    console.log('tech' , tech )
    console.log('active' , active )
    console.log('params' , params)

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
        <div className="w-fit mb-4 bg-stone-300 text-black  p-[2px] rounded mx-auto flex items-center gap-1">
        {
            interviewRoles.map((item , index) => {
            return <button
                    onClick={() =>  setRole(item)  }
                    key={index}
                    className={ cn("w-16 px-6 p-1 rounded" , role === item ? 'bg-white shadow shadow-zinc-400' : ''  )}>
                    {item}
                </button>

          })
        }
        </div>
        <button
        onClick={handleSubmit}
        className="bg-green-600 mt-4 p-2 px-6 rounded-lg font-semibold w-full hover:bg-green-600 active:scale-105">Start the Interview</button>
    </div>

    </div>
}



export default Home
