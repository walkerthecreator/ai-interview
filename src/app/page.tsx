import Nav from '@/components/Nav'
import { Footer } from '@/components/Footer'
import SparklesText from '@/components/magic-ui/Sparkle'
import { ArrowLeft, ArrowRight, Github } from 'lucide-react'
import Link from 'next/link'
import { HTMLProps } from 'react'
import { FeatureStepsSection } from '@/components/Feature'
import WordFadeIn from '@/components/FadeWord'
import { WhyUs } from '@/components/why-us'

interface BackgroundGridProps {
  color: string
  cellSize: string | number
  strokeWidth: number | string
  className?: string
  fade?: boolean
}

const BackgroundGrid = ({
  color = '#a1a1a1',
  cellSize = '30px',
  strokeWidth = '3px',
  className,
  fade = true,
  // ...props
}: Partial<BackgroundGridProps> & HTMLProps<HTMLDivElement>) => {
  const svg = `
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200' stroke='${color}' stroke-width='${strokeWidth}' fill-opacity='0.4' >
      <path d='M 100 0 L 100 200'/>
      <path d='M 0 100 L 200 100'/>
    </svg>
  `
  const svgDataUrl = `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`

  return (
    <div
      className={`pointer-events-none absolute -z-10 inset-0 left-0 top-0 flex h-full w-full ${className}`}
      style={{
        backgroundImage: `url("${svgDataUrl}")`,
        backgroundRepeat: 'repeat',
        backgroundSize: cellSize,
        maskImage: fade
          ? `radial-gradient(ellipse at top, white, transparent 70%)`
          : undefined,
        WebkitMaskImage: fade
          ? `radial-gradient(ellipse at top, white, transparent 70%)`
          : undefined,
      }}>
    </div>
  )
}

const Home = () => {
  return <div>
    <Nav />
    <BackgroundGrid />
    <div className='w-3/5 mx-auto flex flex-col min-h-screen justify-start items-center '>

      <span className='bg-white text-sm text-black shadow-lg shadow-zinc-400 mt-10 p-1 px-4 rounded-full'>
        <SparklesText text='Claim Free 100 Credits' className='text-sm' />
      </span>


      <h1 className='text-6xl text-center text-zinc-100 font-extrabold mt-32'>Ace your Next Interview with <span className='italic bg-gradient-to-r bg-clip-text p-1 text-transparent from-zinc-200 via-zinc-100 to-green-600'>AI Driven</span> Practice Session. </h1>
      <div className='w-73 gap-2 flex justify-center mx-auto z-10 mt-32'>

        <div className='w-44 p-1 bg-green-200 flex justify-start delay-150 group shadow-inner shadow-green-300/40 gap-2 items-center rounded-full'>
          <Link href='/home' className='bg-green-700 relative group-hover:translate-x-12 shadow-inner shadow-green-600 rounded-full px-4 p-2 transition-all'>Get Started</Link>
          <span className='text-green-700'>
            <ArrowRight />
          </span>
        </div>

        <div className='inline-flex justify-center w-40 items-center gap-1 p-1 text-white bg-zinc-700  px-5 rounded-full'>
          <Github />
          <span>
            Github
          </span>
        </div>
      </div>

      <div className='flex gap-5'>
        <ActiveBadge title='No Credit Card required' />
        <ActiveBadge title='Free Trial' />
      </div>

    </div>

    <FeatureStepsSection />
    <WhyUs />
    <Footer />
  </div>
}


export function ActiveBadge({ title }: { title: string }) {
  return <div className='text-stone-400 mt-2 text-sm pt-2 flex items-center gap-1'>
    <div className='p-[2px] bg-zinc-700 h-fit rounded-full'><div className='bg-[#60c94f] h-1.5 w-1.5 p-px rounded-full' /> </div>
    <span>{title}</span> </div>
}





export default Home