import { Inngest } from "inngest"

export const inngest = new Inngest({
    id: 'signalist',
    api: {gemini: {apiKey: process.env.GEMINI_API_KEY!}}
})