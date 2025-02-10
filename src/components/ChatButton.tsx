'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { MessageSquare } from 'lucide-react'
import { ChatTranscripts } from './ChatTranscripts'
import { UserType } from '@/types/user'
import { useRouter } from 'next/navigation'

interface ChatButtonProps  {
  user: UserType | null
}

export const ChatButton = ({ user }: ChatButtonProps) => {
  const router = useRouter()
  const [isChatHistoryOpen, setIsChatHistoryOpen] = useState(false)

  const handleClick = () => {
    if (user) {
      setIsChatHistoryOpen(!isChatHistoryOpen)
    } else {
      router.push('/login') // Redirect to login page
    }
  }

  return (
    <>
      <div className='absolute flex bottom-4 left-4 z-20'>
        <Button
          size="icon"
          className='w-14 h-14 rounded-full bg-white/20 hover:bg-white/30'
          onClick={handleClick}
        >
          <MessageSquare className='text-white' size={24} />
        </Button>
      </div>

      <ChatTranscripts
        isOpen={isChatHistoryOpen}
        onClose={() => setIsChatHistoryOpen(false)} 
      />
    </>
  )
}