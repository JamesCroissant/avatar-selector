"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#9333EA] flex items-center justify-center p-4">
      <div className="bg-white p-6 rounded-2xl shadow-lg max-w-md w-full">
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-center text-gray-800">404 - Page Not Found</h2>
          <p className="text-center text-gray-600">We're sorry, but the page you're looking for doesn't exist.</p>
          <div className="flex justify-center">
            <Button
              asChild
              className="px-4 py-2.5 bg-purple-600 hover:bg-purple-700 text-white rounded-xl transition-colors text-base font-medium"
            >
              <Link href="/chat">Return to Home</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

