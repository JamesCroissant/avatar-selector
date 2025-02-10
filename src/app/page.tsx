import { Button } from "@/components/ui/button"
import { Suspense, useState } from "react"
import { ChatTranscripts } from "@/components/ChatTranscripts"
import { ChatButton } from "@/components/ChatButton"
import { ConnectingButton } from "@/components/ConnectingButton"
import { UserMenu } from "@/components/chat/layout/UserMenu"
import { TopLeftButton } from "@/components/chat/layout/TopLeftButton"
import { currentUser } from "@/app/actions/auth"
import { LoginButton } from "@/components/chat/layout/LoginButton"
import { CancelSubscriptionButton } from "@/components/stripe/CancelSubscriptionButton"


export default async function Page() {
  const user  = await currentUser()

  return (
    <main className="w-full h-full overflow-hidden">

      <div className="min-h-screen bg-gradient-to-br from-purple-500 to-purple-700 relative">

        {/* Top-left avatar button */}
        <TopLeftButton />

        {/* Top-right button */}
        <div className="absolute top-4 right-4 z-20">
          {user ? (
            <UserMenu
              user={user}
            />
          ) : (
            <LoginButton />
          )}
        </div>

        {/* <CancelSubscriptionButton /> */}

        {/* Bottom-left button */}
        <ChatButton user={user}/>

        {/* Bottom-right button */}
        <ConnectingButton />

      </div>
    </main>
  )
}

