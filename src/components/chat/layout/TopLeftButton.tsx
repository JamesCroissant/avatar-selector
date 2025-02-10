"use client"

import React, { useEffect, useState } from "react"
import dynamic from "next/dynamic"
import { Menu, X, Plus, User, List } from "lucide-react"
import { Button } from "@/components/ui/button"
import { avatars, sensei } from "@/constants/avatars"
import type { Avatar } from "@/types/avatar"
import { AvatarCreator, type AvatarExportedEvent } from "@readyplayerme/react-avatar-creator"
const AvatarViewer = dynamic(() => import("@/components/AvatarViewer"), { ssr: false })
import Image from "next/image"
import { scenarios, scenarioTitles } from "@/constants/scenarios"
import { useLanguage } from "@/contexts/LanguageContext"
import { useScenario } from "@/contexts/ScenarioContext"
import { useAvatar } from "@/contexts/AvatarContext"

export function TopLeftButton() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeTab, setActiveTab] = useState("situation")
  const [isRpmModalOpen, setIsRpmModalOpen] = useState(false)
  const { avatar, setAvatar } = useAvatar()
  const { language } = useLanguage()
  const { currentScenario, setCurrentScenario } = useScenario()

  const openRpmModal = () => {
    setIsRpmModalOpen(true)
    const iframe = document.querySelector("iframe")
    if (iframe) {
      iframe.contentWindow?.postMessage("open", "*")
    }
  }

  const handleAvatarClick = (item: Avatar) => {
    if (item.isCustom) {
      openRpmModal()
    } else if (item) {
      console.log(item)
      setAvatar(item)
      setIsOpen(false)
    }
  }

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data.type === "avatar-exported") {
        const avatarUrl = event.data.data.url
        setAvatar(avatarUrl)
        setIsRpmModalOpen(false)
      }
    }

    window.addEventListener("message", handleMessage)
    return () => window.removeEventListener("message", handleMessage)
  }, [])

  const handleAvatarExported = (event: AvatarExportedEvent) => {
    const newAvatar: Avatar = {
      ...avatar,
      avatar: event.data.url,
      isCustom: true,
    }
    setAvatar(newAvatar)
    console.log("Avatar URL:", event.data.url)
    setIsRpmModalOpen(false)
  }

  return (
    <>
      {/* Sidebar Toggle Button */}
      <Button
        variant="ghost"
        size="icon"
        className="fixed top-4 left-4 z-50 bg-white/20 hover:bg-white/30"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5 text-white" />}
      </Button>

      {/* Current Situation Display */}
      <div className="fixed top-4 left-16 z-50 bg-white/20 rounded-lg px-3 py-1.5">
        <span className="text-sm font-medium text-white">{currentScenario}</span>
      </div>

      {/* Sidebar */}
      {isOpen && (
        <div className="absolute inset-0 z-[100]">
          {/* Backdrop */}
          <div className="absolute inset-0" onClick={() => setIsOpen(false)} />

          {/* Sidebar content */}
          <div
            className={`absolute bottom-0 top-0 left-0 w-[60%] min-w-[380px] max-w-[1500px] flex flex-col overflow-y-auto bg-gray-400/40 backdrop-blur-3xl shadow-lg transform transition-transform duration-200 ease-in-out
              ${isOpen ? "translate-x-0" : "-translate-x-full"}
          `}
          >
            <div className="p-4 pb-0 flex items-center justify-between">
              <div className="flex gap-4 text-white text-xl font-semibold pl-1">Poly Sensei</div>
              <Button
                variant="ghost"
                size="icon"
                className="text-white/70 hover:text-white hover:bg-white/10"
                onClick={() => setIsOpen(false)}
              >
                <X className="w-5 h-5" />
              </Button>
            </div>

            <div className="py-1 px-4">
              <nav className="flex gap-4 border-b border-white/40">
                <button
                  className={`flex items-center gap-2 pt-2 pb-2.5 px-1 text-sm font-medium text-white/70 border-b-2 transition-colors hover:text-white ${
                    activeTab === "situation" ? "text-white border-white" : "border-transparent"
                  }`}
                  onClick={() => setActiveTab("situation")}
                >
                  <span
                    className={`flex items-center gap-1.5 ${
                      activeTab === "situation" ? "text-white border-white" : "border-transparent"
                    }`}
                  >
                    <List className="w-4 h-4" />
                    <span className="hidden sm:inline">{scenarioTitles[language]}</span>
                  </span>
                </button>

                <button
                  className={`flex items-center gap-2 pt-2 pb-2.5 px-1 text-sm font-medium text-white/70 border-b-2 transition-colors hover:text-white ${
                    activeTab === "sensei" ? "text-white border-white" : "border-transparent"
                  }`}
                  onClick={() => setActiveTab("sensei")}
                >
                  <span
                    className={`flex items-center gap-1.5 ${
                      activeTab === "sensei" ? "text-white border-white" : "border-transparent"
                    }`}
                  >
                    <User className="w-4 h-4" />
                    <span className="hidden sm:inline">{sensei[language]}</span>
                  </span>
                </button>
              </nav>

              <div className="mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {activeTab === "situation"
                  ? scenarios.map((item) => {
                      const Icon = item.icon
                      return (
                        <div
                          key={item.id}
                          className="relative group rounded-lg border border-white/10 bg-white/10 hover:border-white/80 p-3 transition duration-200 hover:scale-[1.02] cursor-pointer"
                          onClick={() => {
                            setCurrentScenario(item.translations[language])
                            setIsOpen(false)
                          }}
                        >
                          <div className="rounded-lg overflow-hidden m-8">
                            <Icon className="w-full h-full" />
                          </div>
                          <div className="mt-2 text-center flex items-center justify-center">
                            <h3 className="text-white font-medium">{item.translations[language]}</h3>
                          </div>
                        </div>
                      )
                    })
                  : avatars.map((item) => (
                      <div
                        key={item.id}
                        className="relative group rounded-lg border border-white/10 bg-white/10 hover:border-white/80 p-3 transition duration-200 hover:scale-[1.02] cursor-pointer"
                        onClick={() => handleAvatarClick(item)}
                      >
                        <div className="aspect-square relative rounded-lg overflow-hidden">
                          {item.isCustom ? (
                            <div className="w-full h-full flex items-center justify-center bg-gray-200">
                              <Plus className="w-12 h-12 text-gray-400" />
                            </div>
                          ) : (
                            <Image
                              src={item.image || "/images/default-image.jpeg"}
                              alt={item.name}
                              fill
                              className="object-cover"
                            />
                          )}
                        </div>
                        <div className="mt-2 text-center flex items-center justify-center">
                          <h3 className="text-white font-medium">
                            {item.name} {item.flag}
                          </h3>
                        </div>
                      </div>
                    ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Avatar Display Area */}
      {avatar && avatar.avatar ? (
        <AvatarViewer avatarUrl={avatar.avatar} isSidebarOpen={isOpen} />
      ) : (
        <p className="mb-4">No avatar selected yet.</p>
      )}

      {/* Ready Player Me Modal */}
      {isRpmModalOpen && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/80"
          onClick={() => setIsRpmModalOpen(false)}
        >
          <div
            className="max-h-[90vh] max-w-[100vw] h-[90vh] w-[90vw] bg-white rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <AvatarCreator subdomain="" onAvatarExported={handleAvatarExported} className="w-full h-full" />
          </div>
        </div>
      )}
    </>
  )
}

