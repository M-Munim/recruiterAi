import { NextResponse } from "next/server";
import OpenAI from "openai";
import { PROMPT } from "../../../../services/Constants";

export async function POST(req) {
    const { jobPosition, jobDescription, duration, type } = await req.json();


    const FINAL_PROMPT = PROMPT.replace('{{jobTitle}}', jobPosition).replace('{{jobDescription}}', jobDescription).replace('{{duration}}', duration).replace('{{type}}', type);

    console.log(FINAL_PROMPT);
    try {
        const openai = new OpenAI({
            baseURL: 'https://openrouter.ai/api/v1',
            apiKey: process.env.OPENROUTER_API_KEY,
        });

        const completion = await openai.chat.completions.create({
            model: 'google/gemini-2.0-flash-exp:free',
            messages: [
                {
                    role: 'user',
                    content: FINAL_PROMPT,
                },
            ],
        });
        console.log(completion.choices[0].message);
        return NextResponse.json(completion.choices[0].message)
    } catch (error) {
        console.log(error);
        return NextResponse.json(error)
    }
}