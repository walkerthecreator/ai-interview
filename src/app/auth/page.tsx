import { GlowEffect } from '@/components/ui/glow-card';
import { Github } from 'lucide-react';

export default function GlowEffectCardBackground() {
  return (
    <div className='flex min-h-screen items-center justify-center'>
      <div className='relative w-96'>
        <GlowEffect
          colors={['#0894FF', '#C959DD', '#FF2E54', '#FF9004']}
          mode='static'
          blur='medium'
        />
        <div className='relative w-96 rounded-xl bg-black p-3 py-4 text-white'>

          <h1 className=' font-medium text-center pb-3'>Start your Journey</h1>

          <div className='space-y-2'>
          <input type="text" className='p-2 px-3 text-sm w-full border rounded-lg placeholder:text-sm outline-zinc-700' placeholder='Enter your email' />
          <input type="text" className='p-2 px-3 text-sm w-full border rounded-lg placeholder:text-sm outline-zinc-700' placeholder='choose a strong password' />

          <button className='active:scale-95 bg-gradient-to-b mt-6 from-zinc-900 border bg-zinc-950 text-sm w-full rounded-lg p-2 shadow shadow-zinc-800'>Sign In</button>
          </div>

          <p className='my-3 text-xs text-zinc-400 text-center'>
            or
          </p>


          <div className='space-y-2 '>
            <button className='bg-blue-900 text-sm w-full rounded-lg p-2 flex items-center justify-center gap-2'>
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-google" viewBox="0 0 16 16">
                <path d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z" />
              </svg>
              Sign In with Google</button>
            <button className='flex items-center gap-2 justify-center bg-gradient-to-b from-zinc-900 border bg-zinc-950 text-sm w-full rounded-lg p-2'>
              <Github className="h-4 w-4" />
              Sign In with Github</button>
          </div>
          {/* <button className='bg-gradient-to-b from-zinc-900 border bg-zinc-950 text-sm w-full rounded-lg p-1'>Sign In with Google</button> */}





        </div>
      </div>
    </div>
  );
}
