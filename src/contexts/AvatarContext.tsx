"use client"

import { defaultAvatar } from "@/constants/avatars"
import { Avatar } from "@/types/avatar"
import type React from "react"
import { createContext, useState, useContext, useEffect } from "react"

type AvatarContextType = {
  avatar: Avatar
  setAvatar: (avatar: Avatar) => void
}

const AvatarContext = createContext<AvatarContextType | undefined>(undefined)

export function AvatarProvider({ children }: { children: React.ReactNode }) {
  const [avatar, setAvatar] = useState<Avatar>(defaultAvatar)

  useEffect(() => {
    const storedAvatar = localStorage.getItem("avatar")
    if (storedAvatar) {
      setAvatar(JSON.parse(storedAvatar))
    } else {
      setAvatar(defaultAvatar)
    }
  }, [])

  const updateAvatar = (newAvatar: Avatar) => {
    setAvatar(newAvatar)
    localStorage.setItem("avatar", JSON.stringify(newAvatar))
  }

  return <AvatarContext.Provider value={{ avatar, setAvatar: updateAvatar }}>{children}</AvatarContext.Provider>
}

export function useAvatar() {
  const context = useContext(AvatarContext)
  if (context === undefined) {
    throw new Error("useAvatar must be used within an AvatarProvider")
  }
  return context
}

