export interface AudioTranscript {
  id: string
  role: 'user' | 'assistant'
  transcript: string
}