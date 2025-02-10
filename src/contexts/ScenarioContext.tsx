"use client"

import React, { createContext, useState, useContext, useEffect } from 'react'
import { scenarios } from '@/constants/scenarios'
import { useLanguage } from '@/contexts/LanguageContext'

type ScenarioContextType = {
  currentScenario: string
  setCurrentScenario: React.Dispatch<React.SetStateAction<string>>
}

const ScenarioContext = createContext<ScenarioContextType | undefined>(undefined)

export const useScenario = () => {
  const context = useContext(ScenarioContext)
  if (context === undefined) {
    throw new Error('useScenario must be used within a ScenarioProvider')
  }
  return context
}

export const ScenarioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { language } = useLanguage()
  const [currentScenario, setCurrentScenario] = useState(scenarios[0].translations[language])

  useEffect(() => {
    const currentScenarioObj = scenarios.find((scenario) =>
      Object.values(scenario.translations).includes(currentScenario)
    )
    if (currentScenarioObj) {
      setCurrentScenario(currentScenarioObj.translations[language])
    } else {
      setCurrentScenario(scenarios[0].translations[language])
    }
  }, [language, currentScenario])

  return (
    <ScenarioContext.Provider value={{ currentScenario, setCurrentScenario }}>
      {children}
    </ScenarioContext.Provider>
  )
}
