import { google } from "@ai-sdk/google";
import { generateObject } from "ai";
import z from "zod";


export const useGenerateResult = async (data : string ) => {

    const prompt = `You have to act as Reviewer for AI interview system .I've Questions and Answer, question were generated using AI, and user answered them. here the json of data ${data} , based on the answers generate a feedback and points based on particular question.`

    const { object } = await generateObject({
        model:  google('models/gemini-1.5-flash-latest'),
        prompt: prompt ,
        schema: z.array(
          z.object({
            questions: z.string().describe('the orignal questions') ,
            points : z.number().describe('number of point for question according to answer ') ,
            feedback : z.string().describe('suggestion or feedback for user ')
          })
        ),
      });

    return object 
}