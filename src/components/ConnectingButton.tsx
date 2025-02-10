"use client"

import React, { useEffect, useRef, useState } from "react"
import { Mic, MicOff } from "lucide-react"
import { Button } from "@/components/ui/button"
import { formatTime } from "@/utils/formatTime"
import { useWebRTCContext } from "@/contexts/WebRTCContext"
import { useLanguage } from "@/contexts/LanguageContext"
import { useAvatar } from "@/contexts/AvatarContext"
import { useScenario } from "@/contexts/ScenarioContext"


export const ConnectingButton = () => {
  const { isConnected, connect, disconnect } = useWebRTCContext()
  const [connectingTime, setConnectingTime] = useState(0)
  const connectingInterval = useRef<NodeJS.Timeout | null>(null)
  const { avatar } = useAvatar()
  const { currentScenario } = useScenario() 

  useEffect(() => {
    if (isConnected) {
      connectingInterval.current = setInterval(() => {
        setConnectingTime((prev) => prev + 1)
      }, 1000)
    } else {
      if (connectingInterval.current) {
        clearInterval(connectingInterval.current)
      }
      setConnectingTime(0)
    }

    return () => {
      if (connectingInterval.current) {
        clearInterval(connectingInterval.current)
      }
    }
  }, [isConnected])

  const handleConnect = () => {
    if (isConnected) {
      disconnect()
    } else {
      connect(avatar, currentScenario)
    }
  }

  return (
    <>
      <div className="absolute flex bottom-4 right-4 z-20 space-x-2">
        <Button
          size="icon"
          className={`w-14 h-14 rounded-full ${isConnected ? "bg-red-500 hover:bg-red-600" : "bg-white/20 hover:bg-white/30"}`}
          onClick={handleConnect}
        >
          {isConnected ? <MicOff className="text-white" size={24} /> : <Mic className="text-white" size={24} />}
        </Button>
        {isConnected && <div className="absolute -top-8 right-2 text-white">{formatTime(connectingTime)}</div>}
      </div>
    </>
  )
}

