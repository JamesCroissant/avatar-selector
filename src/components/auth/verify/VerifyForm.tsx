'use client'

import React, { useEffect } from 'react'
import { useRouter } from "next/navigation"
import { VerifySubmitButton } from '@/components/auth/verify/VerifySubmitButton'
import { verifyOtp } from '@/app/actions/auth'
import { useFormState } from 'react-dom'
import { useToast } from "@/hooks/use-toast"

interface VerifyFormProps {
  email: string
}

export const VerifyForm = ({ email }: VerifyFormProps) => {
  const router = useRouter()
  const [state, formAction] = useFormState(verifyOtp, null)
  const { toast } = useToast()

  useEffect(() => {
    if (state && state.success) {
      router.push("/")
      toast({
        title: "Logged in",
        description: "You have been successfully logged in",
      })
    }
  }, [state, router])
  

  return (
    <div className="space-y-6">
      <div className="space-y-4 text-center mb-4">
        <h3 className="text-xl font-semibold text-gray-700">Have a verification code instead?</h3>
        <p className="text-gray-600">
          Enter the code generated from the link sent to
          <br />
          <span className="font-semibold">haaamham1014@gmail.com</span>
        </p>
      </div>

      {/* Email input */}
      <form 
        className="space-y-4"
        action={formAction}
      >
        <input
          name='token'
          type="string"
          placeholder="Enter verification code"
          className="w-full text-center px-3 py-2.5  border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-200"
          required
        />
        <input 
          type="hidden" 
          name="email" 
          value={email}
        />
        <VerifySubmitButton />
      </form>
    </div>
  )
}
