import { generateObject } from 'ai';
import { z } from 'zod';
import { google } from "@ai-sdk/google" 

import { NextRequest, NextResponse } from 'next/server';


export async function POST(req: NextRequest) { in

  const { data } = await req.json()
  let { role , tech , position } = data ;
  tech = JSON.parse(tech).join(' ,')

    const prompt = `Generate 10 interview question for ${role} role as ${position} position and keep same level for the interview questions. question must contain 2 behaviour questions and other must be related to topics ${ tech }.these questions can be theory question about technologies in deep. Keep in mind that this is for Product Based Companies do keep question at Hard level`
    console.log('prompt is ' , prompt)

    const { object } = await generateObject({
      model:  google('models/gemini-1.5-flash-latest'),
      prompt: prompt ,
      schema: z.array(
        z.object({
          questions: z.string().describe('the questions for interview') ,
          type: z.string().describe('type of the question') ,
          points : z.number().describe('number of point for question ')
        })
      ),
    });

    return NextResponse.json({ data: object, success: true })
  }
