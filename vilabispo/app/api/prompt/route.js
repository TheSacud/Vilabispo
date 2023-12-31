import Prompt from "@models/prompt";
import { connectToDB } from "@utils/db";

export const revalidate = 1; //revalidate api every 1 second
export const GET = async (request) => {
    try {
        await connectToDB()

        const prompts = await Prompt.find({}).populate('id')

        return new Response(JSON.stringify(prompts), { status: 200 })
    } catch (error) {
        return new Response("Failed to fetch all prompts", { status: 500 })
    }
} 