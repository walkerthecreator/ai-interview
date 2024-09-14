import { NextRequest , NextResponse } from "next/server";

let counter = 0 

export async function POST(req : NextRequest){
    const { question } = await req.json()
    counter++
    console.log(counter)
    console.log(question)
    try {
        const url = 'https://api.v7.unrealspeech.com/speech';
        const options = {
          method: 'POST',
          headers: {
            accept: 'text/plain',
            'content-type': 'application/json',
            Authorization: `Bearer ${process.env.UNREAL_SPEECH}`,
          },
          body: JSON.stringify({
            Text: question ,
            VoiceId: 'Scarlett',
            Bitrate: '192k',
            Speed: '0',
            Pitch: '1',
            Codec: 'libmp3lame',
            Temperature: 0.25,
          }),
        };

        const response = await fetch(url , options) 
        const result = await response.json()
        return NextResponse.json({ source : result.OutputUri })
    }
    catch(err){
        if(err instanceof Error){
            console.log('error in speech generation server' , err.message)
            return NextResponse.json({ error : err })
        }
    }

}