import WordFadeIn from "./FadeWord"
import { LogoCarousel } from "./logo-cloud";

const demoLogos = [
    { id: 1, name: "Dub", src: "https://svgl.app/" },
    { id: 2, name: "Supabase", src: "https://www.prismui.tech/logo/supabase.svg" },
    { id: 3, name: "Vercel", src: "https://www.prismui.tech/logo/vercel.svg" },
    { id: 4, name: "Resend", src: "https://www.prismui.tech/logo/resend.svg" },
    { id: 5, name: "Shadcn", src: "https://www.prismui.tech/logo/shadcn.svg" },
];


export function WhyUs() {
    return <div className="min-h-screen flex flex-col justify-center items-center text-center">
        {/* <div className="text-center"> */}

            <WordFadeIn className="text-5xl" words="Why AI Interview Prep ?" key={"12"} />
            <p className="w-3/4 mx-auto my-4 text-base text-zinc-400">24/7 AI-powered interview prep with anonymized data, quick 20-minute sessions, and fully AI-generated questions and feedback.</p>

            <div className="bg-gradient-to-b mt-10 from-zinc-900 border border-zinc-800 border-b-0 to-zinc-950 my-4 p-4 rounded-xl max-w-5xl w-full h-72 text-center flex flex-col justify-around">


                <div className="flex items-end gap-2 justify-around">
                    <Card title="100%" desc="Anonymous" />
                    <Card title="AI" desc="Driven Precision" />
                    <Card title="24/7" desc="always at your service" />
                    <Card title="<20 min" desc="that's it all takes" />
                </div>
            </div>

        {/* </div> */}
    </div>
}

export function Card({ title, desc }: { title: string; desc: string }) {
    return <div className="bg-zinc-950 border-t border-zinc-800 w-60 p-5 py-8 rounded-2xl text-center">
        <h1 className="bg-gradient-to-r bg-clip-text from-zinc-100 text-transparent to-zinc-400 font-bold text-5xl ">{title}</h1>
        <p className="mt-3 text-lg text-zinc-300">{desc}</p>
    </div>
}