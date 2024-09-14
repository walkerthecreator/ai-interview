import { google } from "@ai-sdk/google";
import { generateObject } from "ai";
import { NextRequest, NextResponse } from "next/server";
import z from "zod";


export const POST = async ( req : NextRequest ) => {

    const { data } = await req.json()
    console.log("store" , data)

    const prompt = `you have to review an interview which was taken on our platform names as ai interview prep, here's is the json data which contain question which is asked by interviewer and answer property which is feeded by user based on this answer you to generate a json data contain property point and feedback, point must contain point out of 10 based on answer given by user and feedback contain what user can do to make it better. you can be harsh in points and feedback as well. data is ${JSON.stringify(data)}`

    const { object } = await generateObject({
        model:  google('models/gemini-1.5-flash-latest'),
        prompt: prompt ,
        schema: z.array(
          z.object({
            points : z.number().describe('Number of points for answer') ,
            feedback : z.string().describe('suggestion or feedback for user ')
          })
        ),
      });

    return NextResponse.json({ results : object })
}