"use client"

import { useCallback, useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { X, Volume2, Languages, Eye, EyeOff, Check } from "lucide-react"
import { textToSpeech } from "@/app/actions/textToSpeech"
import { useWebRTCContext } from "@/contexts/WebRTCContext"
import { useLanguage } from "@/contexts/LanguageContext"
import { chatTranscripts } from "@/constants/chatTranscripts"

const mosaicStyle = {
  filter: "blur(5px)",
  userSelect: "none" as const,
}

interface ChatTranscriptsProps {
  isOpen: boolean
  onClose: () => void
}

interface GrammarCorrection {
  correctedText: string
  explanation: string
}

export function ChatTranscripts({ isOpen, onClose }: ChatTranscriptsProps) {
  const [loadingStates, setLoadingStates] = useState<Record<string, boolean>>({})
  const [hiddenMessages, setHiddenMessages] = useState<Record<string, boolean>>({})
  const [translations, setTranslations] = useState<Record<string, string>>({})
  const [grammarCorrections, setGrammarCorrections] = useState<Record<string, GrammarCorrection>>({})
  const [isPlaying, setIsPlaying] = useState<Record<string, boolean>>({})
  const { audioTranscripts, isConnected } = useWebRTCContext()
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const { language } = useLanguage()
  const currentChatTranscript = chatTranscripts[language]

  useEffect(() => {
    setHiddenMessages((prev) => {
      const newHiddenMessages = { ...prev }
      audioTranscripts.forEach((transcript) => {
        if (!(transcript.id in newHiddenMessages)) {
          newHiddenMessages[transcript.id] = transcript.role === "assistant"
        }
      })
      return newHiddenMessages
    })
  }, [audioTranscripts])

  const toggleMessageVisibility = (id: string) => {
    setHiddenMessages((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  const toggleTranslation = async (id: string, content: string) => {
    if (translations[id]) {
      setTranslations((prev) => {
        const newTranslations = { ...prev }
        delete newTranslations[id]
        return newTranslations
      })
    } else {
      // This is a mock translation. In a real app, you'd call an API here.
      const translatedText = `これは翻訳されたテキストです。${content}`
      setTranslations((prev) => ({ ...prev, [id]: translatedText }))
    }
  }

  const toggleGrammarCorrection = async (id: string, content: string) => {
    if (grammarCorrections[id]) {
      setGrammarCorrections((prev) => {
        const newCorrections = { ...prev }
        delete newCorrections[id]
        return newCorrections
      })
    } else {
      // This is a mock grammar correction. In a real app, you'd call an API here.
      const correction: GrammarCorrection = {
        correctedText: `Here's a more polished version: "${content}"`,
        explanation: "This sentence is grammatically correct. Here's a brief explanation of the changes made...",
      }
      setGrammarCorrections((prev) => ({ ...prev, [id]: correction }))
    }
  }

  const playAudio = useCallback(async (id: string, base64Audio: string) => {
    const AudioContextClass: typeof AudioContext =
      window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext
    const audioContext = new AudioContextClass()
    const arrayBuffer = Uint8Array.from(atob(base64Audio), (c) => c.charCodeAt(0)).buffer
    const audioBuffer = await audioContext.decodeAudioData(arrayBuffer)
    const source = audioContext.createBufferSource()
    source.buffer = audioBuffer
    source.connect(audioContext.destination)
    source.start(0)
    setIsPlaying((prev) => ({ ...prev, [id]: true }))
    source.onended = () => {
      setIsPlaying((prev) => ({ ...prev, [id]: false }))
    }
  }, [])

  const handleTextToSpeech = async (id: string, text: string) => {
    if (!text.trim() || isPlaying[id]) return
    setLoadingStates((prev) => ({ ...prev, [id]: true }))
    try {
      const base64Audio = await textToSpeech(text)
      await playAudio(id, base64Audio)
    } catch (error) {
      console.error("Error synthesizing or playing speech:", error)
      alert("Failed to synthesize or play speech. Please try again.")
    } finally {
      setLoadingStates((prev) => ({ ...prev, [id]: false }))
    }
  }

  // Scroll to the bottom of the chat transcript when a new message is added
  useEffect(() => {
    const scrollArea = scrollAreaRef.current?.querySelector(
      '[data-radix-scroll-area-viewport]'
    )
    if (scrollArea) {
      scrollArea.scrollTop = scrollArea.scrollHeight
    }
  }, [audioTranscripts])

  if (!isOpen) return null

  return (
    <div className="absolute inset-16 bg-white rounded-2xl p-4 z-25 shadow-xl flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-purple-900 ml-1">{currentChatTranscript.chatTranscriptTitle}</h2>
        <Button variant="ghost" size="icon" onClick={onClose} className="text-gray-500 hover:bg-gray-100">
          <X className="h-5 w-5" />
        </Button>
      </div>
      {audioTranscripts.length > 0 ? (
        <ScrollArea ref={scrollAreaRef} className="flex-grow pr-4" >
          <div className="space-y-4">
            {audioTranscripts.map((message) => (
              <div key={message.id} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                <div className="max-w-[80%]">
                  <div
                    className={`rounded-2xl px-4 py-3 ${
                      message.role === "user" ? "bg-purple-100 text-purple-900" : "bg-gray-100 text-gray-900"
                    }`}
                  >
                    <p className="text-sm" style={hiddenMessages[message.id] ? mosaicStyle : {}}>
                      {message.transcript}
                    </p>
                    {translations[message.id] && message.role === "assistant" && (
                      <>
                        <hr className="my-2 border-gray-300" />
                        <p className="text-sm text-gray-600" style={hiddenMessages[message.id] ? mosaicStyle : {}}>
                          {translations[message.id]}
                        </p>
                      </>
                    )}
                    {grammarCorrections[message.id] && message.role === "user" && (
                      <>
                        <hr className="my-2 border-gray-300" />
                        <p className="text-sm text-gray-600" style={hiddenMessages[message.id] ? mosaicStyle : {}}>
                          {grammarCorrections[message.id].correctedText}
                        </p>
                        <p className="text-xs text-gray-500 mt-1" style={hiddenMessages[message.id] ? mosaicStyle : {}}>
                          {grammarCorrections[message.id].explanation}
                        </p>
                      </>
                    )}
                  </div>
                  <div className="flex mt-1 px-1">
                    {message.role === "assistant" ? (
                      <>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-6 w-6 rounded-full hover:bg-gray-100"
                          title="音声を再生"
                          onClick={() => handleTextToSpeech(message.id, message.transcript)}
                          disabled={loadingStates[message.id] || isPlaying[message.id]}
                        >
                          {loadingStates[message.id] ? (
                            <div className="h-4 w-4 animate-spin rounded-full border-2 border-gray-500 border-t-transparent" />
                          ) : isPlaying[message.id] ? (
                            <div className="h-4 w-4 bg-gray-500 rounded-full animate-pulse" />
                          ) : (
                            <Volume2 className="h-4 w-4 text-gray-500" />
                          )}
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-6 w-6 rounded-full hover:bg-gray-100"
                          title={translations[message.id] ? "翻訳を非表示" : "翻訳"}
                          onClick={() => toggleTranslation(message.id, message.transcript)}
                        >
                          <Languages className="h-4 w-4 text-gray-500" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-6 w-6 rounded-full hover:bg-gray-100"
                          title={hiddenMessages[message.id] ? "文を表示" : "文を非表示"}
                          onClick={() => toggleMessageVisibility(message.id)}
                        >
                          {hiddenMessages[message.id] ? (
                            <Eye className="h-4 w-4 text-gray-500" />
                          ) : (
                            <EyeOff className="h-4 w-4 text-gray-500" />
                          )}
                        </Button>
                      </>
                    ) : (
                      <>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-6 w-6 rounded-full hover:bg-gray-100"
                          title={grammarCorrections[message.id] ? "文法チェックを非表示" : "文法をチェック"}
                          onClick={() => toggleGrammarCorrection(message.id, message.transcript)}
                        >
                          <Check className="h-4 w-4 text-gray-500" />
                        </Button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      ) : (
        <div className="flex-grow flex items-center justify-center">
          <p className="text-gray-500">{currentChatTranscript.connectToStart}</p>
        </div>
      )}
    </div>
  )
}

