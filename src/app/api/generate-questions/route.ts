import { generateObject, generateText } from 'ai';
import { z } from 'zod';
import { createGoogleGenerativeAI, google } from "@ai-sdk/google"
import { NextRequest, NextResponse } from 'next/server';
export const QuestionTypeEnum = z.enum(['mcq', 'theory']);

export const QuestionSchema = z.object({
  text: z.string().min(1),
  options: z.array(z.string()).optional(),
  answer: z.string(),
  explanation: z.string().optional(),
  difficulty: z.enum(['easy', 'medium', 'hard']).optional(),
});

export const QuestionsArraySchema = z.array(QuestionSchema);

export type Question = z.infer<typeof QuestionSchema>;
export type QuestionType = z.infer<typeof QuestionTypeEnum>;
import { GoogleGenerativeAI } from '@google/generative-ai';


const SYSTEM_PROMPT = `Generate 10 interview question for {role} role as {position} position and keep same level for the interview questions. question must contain 2 behaviour questions and other must be related to topics {tech}.these questions can be theory question about technologies in deep. Keep in mind that this is for Product Based Companies so keep question at Hard level. also give point for each question according to level, strictly return json array of questions, so it can be passed to json.parse()`;

export async function POST(req: NextRequest) {
  try {
    const { role, position, tech } = await req.json();

    if (!role || !tech || !position) {
      throw new Error("Missing required parameters: role, tech, or position");
    }

    let techString = "";
    try {
      techString = Array.isArray(tech) ? tech.join(', ') : JSON.parse(tech).join(', ');
    } catch (e) {
      throw new Error("Invalid tech parameter format");
    }

    const prompt = SYSTEM_PROMPT.replace('{role}', role).replace('{position}', position).replace('{tech}', techString)


    const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GENERATIVE_AI_API_KEY!);
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash-latest' });
    const result = await model.generateContent(prompt);
    const text = result.response.text().replace(/```json\n?/g, '')
      .replace(/```\n?/g, '')
      .trim();

    const parsedQuestions = JSON.parse(text);
    return NextResponse.json({ data: parsedQuestions });


  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, {
        status: 422,
      });
    }
    console.error('Error generating questions:', error);
    return NextResponse.json({ error: 'Failed to generate questions' }, {
      status: 500,
    });
  }
}


// export async function POST(req: NextRequest) {
//   try {
//     const { data } = await req.json()
//     let { role, tech, position } = data;

//     if (!role || !tech || !position) {
//       throw new Error("Missing required parameters: role, tech, or position");
//     }

//     let techString = "";
//     try {
//       techString = Array.isArray(tech) ? tech.join(', ') : JSON.parse(tech).join(', ');
//     } catch (e) {
//       throw new Error("Invalid tech parameter format");
//     }

//     const prompt = `Generate 10 interview question for ${role} role as ${position} position and keep same level for the interview questions. question must contain 2 behaviour questions and other must be related to topics ${techString}.these questions can be theory question about technologies in deep. Keep in mind that this is for Product Based Companies do keep question at Hard level.`

//     const { object } = await generateObject({
//       model: google('models/gemini-1.5-flash-latest'),
//       schema: z.array(
//         z.object({
//           questions: z.string().describe('the questions for interview'),
//           type: z.string().describe('type of the question'),
//           points: z.number().describe('number of point for question ')
//         })
//       ),
//       prompt: prompt.toString(),
//     });

//     return NextResponse.json({ data: object, success: true })
//   }
//   catch (err) {
//     console.log(err)
//     if (err instanceof Error)
//       return NextResponse.json({ error: err.message, success: false }, { status: 400 })
//     return NextResponse.json({ error: "Something went wrong", success: false, }, { status: 500 })
//   }
// }



