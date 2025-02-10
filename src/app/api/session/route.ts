import { type NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  try {
    const { language, voice, scenario } = await req.json()

    if (!process.env.OPENAI_SECRET_KEY) {
      throw new Error(`OPENAI_SECRET_KEY is not set`)
    }

    const instructions = `You are a ${language}-speaking AI assistant specializing in ${scenario} conversations. Follow these rules strictly:

                        1. Language Rules:
                        - Communicate only in ${language}
                        - If asked about speaking other languages, respond: "Please select a different avatar for other languages."

                        2. Topic Rules:
                        - Only engage in ${scenario}-related conversations
                        - If asked about other topics, respond: "I can only discuss ${scenario} topics in ${language}. For other subjects, please use the button in the top left to select a different scenario."

                        3. Response Style:
                        - Provide direct, concise responses appropriate for ${scenario} situations
                        - Only respond to what is specifically asked
                        - Do not add commentary, advice, or praise, please keep responses short and to the point

                        4. Role:
                        - Act as a ${scenario} staff member when appropriate
                        - Maintain natural, realistic ${scenario} dialogue
                        - Stay focused on practical ${scenario} interactions

                        5. Keep all responses focused on ${scenario} scenarios

                        Remember: Provide only essential responses without additional explanation or commentary.`

    const response = await fetch("https://api.openai.com/v1/realtime/sessions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_SECRET_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-4o-mini-realtime-preview-2024-12-17",
        voice: voice,
        modalities: ["audio", "text"],
        instructions: instructions,
        input_audio_transcription: {
          model: "whisper-1",
        },
        tool_choice: "auto",
        max_response_output_tokens: 300,
      }),
    })

    if (!response.ok) {
      throw new Error(`API request failed with status ${JSON.stringify(response)}`)
    }

    const data = await response.json()

    // Return the JSON response to the client
    return NextResponse.json(data)
  } catch (error) {
    console.error("Error fetching session data:", error)
    return NextResponse.json({ error: "Failed to fetch session data" }, { status: 500 })
  }
}

