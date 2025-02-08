"use client";
import React from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion"

export function Footer() {
    const navigate = useRouter()
    return (
        <BackgroundBeamsWithCollision>
            <h2 className="text-2xl relative z-20 md:text-4xl lg:text-4xl font-bold text-center text-black dark:text-zinc-300 tracking-tight">
                Get Started with your {" "}
                <div className="relative flex flex-col mx-auto  w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
                    <div className="pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-white to-green-400  bg-clip-text text-center text-7xl font-bold leading-none tracking-tighter text-transparent py-4">
                        <span className="">Free Interview</span>
                    </div>
                </div>
                <Button
                    onClick={() => navigate.push("/home")}
                    className="group bg-zinc-100 hover:bg-white text-zinc-700 border-b-4 border-zinc-300 px-4 py-2 rounded-lg mt-4 w-4/5 flex items-center justify-center mx-auto"
                >
                    <span className="group-hover:-translate-x-1 transition-transform"> Start Interviewing</span>
                    <span>
                        <ArrowRight className='h-4 w-4 opacity-0 group-hover:translate-x-1 group-hover:opacity-100 transition-transform' />
                    </span>
                </Button>
            </h2>
        </BackgroundBeamsWithCollision>
    );
}

