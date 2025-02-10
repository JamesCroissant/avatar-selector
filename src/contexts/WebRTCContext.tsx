"use client"

import { createContext, useContext, type ReactNode } from "react"
import { useWebRTC } from "@/hooks/useWebRTC"
import type { AudioTranscript } from "@/types/audioTranscript"
import { Avatar } from "@/types/avatar"

interface WebRTCContextType {
  isConnected: boolean
  connect: (avatar: Avatar, currentScenario: string) => Promise<void>
  disconnect: () => void
  audioTranscripts: AudioTranscript[]
}

const WebRTCContext = createContext<WebRTCContextType | null>(null)

export function WebRTCProvider({ children }: { children: ReactNode }) {
  const webRTC = useWebRTC()

  return <WebRTCContext.Provider value={webRTC}>{children}</WebRTCContext.Provider>
}

export function useWebRTCContext() {
  const context = useContext(WebRTCContext)
  if (!context) {
    throw new Error("useWebRTCContext must be used within a WebRTCProvider")
  }
  return context
}

