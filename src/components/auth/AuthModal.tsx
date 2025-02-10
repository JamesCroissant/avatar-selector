"use client"

import { LoginFooter } from "@/components/auth/login/LoginFooter"
import { LoginForm } from "@/components/auth/login/LoginForm"
import { useState } from "react"
import { VerifyFooter } from "@/components/auth/verify/VerifyFooter"
import { VerifyForm } from "@/components/auth/verify/VerifyForm"

export function AuthModal() {
  const [currentStep, setCurrentStep] = useState<"login" | "verify">("login")
  const [email, setEmail] = useState<string>("")

  const handleBackToLogin = () => {
    setCurrentStep("login")
  }

  const handleLoginComplete = (email: string) => {
    setEmail(email)
    setCurrentStep("verify")
  }

  return (
    <div className="max-w-[500px] mx-auto bg-white p-7 rounded-xl shadow-lg">
      <h2 className="text-center text-2xl font-medium mb-4">Welcome to PolySensei!</h2>
        {currentStep === "login" ? (
          <>
            <LoginForm onLoginComplete={handleLoginComplete} />
            <LoginFooter />
          </>
        ) : (
          <>
            <VerifyForm email={email} />
            <VerifyFooter onBackToLogin={handleBackToLogin} />
          </>
        )}
    </div>
  )
}


