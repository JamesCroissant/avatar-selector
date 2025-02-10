import React from 'react'
import { Button } from "@/components/ui/button"
import Link from 'next/link'

export const LoginButton = () => {
  return (
    <Link href="/login">
      <Button
        variant="secondary"
        className="bg-white text-purple-500 hover:bg-white/90"
      >
        Login
      </Button>
    </Link>
  )
}
