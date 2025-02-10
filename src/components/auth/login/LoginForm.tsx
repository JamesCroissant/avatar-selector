'use client'

import React, { useEffect, useRef } from 'react'

import { GoogleAuthButton } from '@/components/auth/login/GoogleAuthButton'
import { LoginSubmitButton } from '@/components/auth/login/LoginSubmitButton'
import { useFormState } from 'react-dom'
import { signInWithOtp } from '@/app/actions/auth'

interface LoginFormProps {
  onLoginComplete: (email: string) => void
}

export const LoginForm = ({ onLoginComplete }: LoginFormProps) => {
  const [state, formAction] = useFormState(signInWithOtp, null)

  const emailRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (state && state.success) {
      onLoginComplete(emailRef.current?.value || "")
    }
  }, [state, onLoginComplete])
  
  return (
    <div className="space-y-4">
      {/* Google login button */}
      <GoogleAuthButton />

      {/* Divider */}
      <div className="flex items-center gap-4">
        <div className="flex-1 h-px bg-gray-200" />
        <span className="text-sm text-gray-500 font-medium">OR</span>
        <div className="flex-1 h-px bg-gray-200" />
      </div>

      {/* Email input */}
      <form 
        className=""
        action={formAction}
      >
        <input
          ref={emailRef}
          name="email"
          type="email"
          placeholder="Enter your personal or work email"
          className="w-full mb-4 text-center text-base px-3 py-2.5  border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-200"
        />
        <LoginSubmitButton />
      </form>
    </div>
  )
}
