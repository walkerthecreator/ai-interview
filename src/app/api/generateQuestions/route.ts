import { generateObject } from 'ai';
import { z } from 'zod';
import { google } from "@ai-sdk/google" 

import { NextRequest, NextResponse } from 'next/server';


export async function GET(req: NextRequest) {

    const { object } = await generateObject({
      model:  google('models/gemini-1.5-flash-latest'),
      prompt: process.env.PROMPT ,
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
