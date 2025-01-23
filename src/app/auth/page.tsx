import { GlowEffect } from '@/components/ui/glow-card';

export default function GlowEffectCardBackground() {
  return (
    <div className='flex min-h-screen items-center justify-center'>
      <div className='relative w-80'>
        <GlowEffect
          colors={['#0894FF', '#C959DD', '#FF2E54', '#FF9004']}
          mode='static'
          blur='medium'
        />
        <div className='relative w-80 space-y-2 rounded-lg bg-black p-3 text-white'>

          <h1 className='py-2'>Let's Get Started</h1>
          <input type="text" className='p-1 px-2 text-sm w-full border  rounded-lg placeholder:text-sm outline-zinc-700' placeholder='Enter your email' />
          <input type="text" className='p-1 px-2 text-sm w-full border  rounded-lg placeholder:text-sm outline-zinc-700' placeholder='choose a strong password' /> 

          <p className='my-3 text-xs text-zinc-400 text-center'>
            or  
          </p>

          <button className='bg-gradient-to-b from-zinc-900 border bg-zinc-950 text-sm w-full rounded-lg p-1'>Sign In</button>



        </div>
      </div>
    </div>
  );
}
