"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center p-4">
      <div className="bg-white p-6 rounded-2xl shadow-lg max-w-md w-full">
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-center text-gray-800">Oops! Something went wrong</h2>
          <p className="text-center text-gray-600">We apologize for the inconvenience. An error has occurred.</p>
          <div className="flex justify-center">
            <Button
              onClick={reset}
              className="px-6 py-5 bg-purple-600 hover:bg-purple-700 text-white rounded-md transition-colors text-base font-medium"
            >
              Try again
            </Button>
          </div>
          <p className="text-xs text-center text-gray-500">
            If the problem persists, please contact our{" "}
            <a href="#" className="text-purple-600 hover:underline">
              support team
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  )
}

