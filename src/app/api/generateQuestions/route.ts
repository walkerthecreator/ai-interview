import { generateObject } from 'ai';
import { z } from 'zod';
import { google } from "@ai-sdk/google" 

import { NextRequest, NextResponse } from 'next/server';


export async function GET(req: NextRequest) { 

  const prompt = `Generate 10 interview question for FullStack Developer role as Junior position and keep same level for the interview questions. question must contain 2 behaviour questions and other must be related to topics ReactJs, NodeJs, ExpressJs, Docker, Typescript.these questions can be MCQ's which can be related to Output based on programming language or finding error in written code ,theory question . for mcqs object must contain 4 options and ans property.`


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
