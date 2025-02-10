'use client'

import React, { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Badge } from '@/components/ui/badge'
import { CreditCard, FileText, Home, LogOut, Settings, Shield, User } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'
import { menuItems } from '@/constants/menuItems'
import { logout } from '@/app/actions/auth'
import { useToast } from "@/hooks/use-toast"
import { UserType } from '@/types/user'
import Image from 'next/image'
import { UpgradePlanModal } from '@/components/stripe/UpgradePlanModal'
import Link from 'next/link'


interface UserMenuProps {
  user: UserType
}

export const UserMenu = ({ user }: UserMenuProps) => {
  const { language, setLanguage } = useLanguage()
  const currentMenuItem = menuItems[language]
  const { toast } = useToast()
  const [isUpgradePlanOpen, setIsUpgradePlanOpen] = useState(false)

  const handleLogout = () => {
    logout()
    toast({
      title: "Logged out",
      description: "You have been successfully logged out",
    })
  }

  return (
    <>
      <Popover>
        <PopoverTrigger asChild>
          <Button 
            variant="ghost" 
            size="icon" 
            className="w-12 h-12 rounded-full bg-white/20 hover:bg-white/30"
          >
            {user.image ? (
              <Image 
                src={user.image} 
                alt='Profile Image' 
                width={48} 
                height={48} 
                className="rounded-full"
              />
            ) : (
              <User
                className="text-white"
                width={24} 
                height={24}
              />
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[240px] p-0" align="end">
          <div className="space-y-0.5 p-3 pb-2">
            <div className='flex gap-2 items-center'>
              <h4 className="font-medium leading-none">{user.name || 'user'}</h4>
              <Badge variant="secondary" className="text-xs font-medium">pro</Badge>
            </div>
            <p className="text-sm text-muted-foreground">{user.email}</p>
          </div>
          <Separator />
          <nav className="w-full text-slate-700 hover:text-slate-700"> 
            <Button variant="ghost" className="w-full py-1 my-1 flex gap-2 items-center justify-start" size="sm" disabled>
              <Home className=" h-4 w-4" />
              <span className='text-sm'>{currentMenuItem.home}</span>
            </Button>
            <Button variant="ghost" className="w-full py-1 my-1 flex gap-2 items-center justify-start" size="sm" disabled >
              <Settings className=" h-4 w-4" />
              <span className='text-sm'>{currentMenuItem.settings}</span>
            </Button>
            <Button 
              variant="ghost" 
              className="w-full py-1 my-1 flex gap-2 items-center justify-start" 
              size="sm"
              asChild
            >
              <Link href="/terms">
                <Shield className="h-4 w-4" />
                <span className='text-sm'>{currentMenuItem.termsAndPrivacy}</span>
              </Link>
            </Button>
            <Button variant="ghost" className="w-full py-1 my-1 flex gap-2 items-center justify-start" size="sm">
              <CreditCard className=" h-4 w-4" />
              <span className='text-sm'>{currentMenuItem.billingAndSubscription}</span>
            </Button>
            <Button 
              variant="ghost" 
              className="w-full py-1 my-1 flex gap-2 items-center justify-start" 
              size="sm"
              onClick={handleLogout}
              >
              <LogOut className=" h-4 w-4" />
              <span className='text-sm'>{currentMenuItem.logout}</span>
            </Button>
          </nav>
          <Separator />
          <div className="px-3 py-1.5 flex items-center justify-between">
            <span className="text-sm text-slate-700">{currentMenuItem.language}</span>
            <Select 
              defaultValue="ja"
              value={language} 
              onValueChange={setLanguage}
            >
              <SelectTrigger className="w-24">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="max-h-[200px]">
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="es">Español</SelectItem>
                <SelectItem value="it">Italiano</SelectItem>
                <SelectItem value="fr">Français</SelectItem>
                <SelectItem value="de">Deutsch</SelectItem>
                <SelectItem value="ja">日本語</SelectItem>
                <SelectItem value="ko">한국어</SelectItem>
                <SelectItem value="zh">中文</SelectItem>
                <SelectItem value="hi">हिन्दी</SelectItem>
                <SelectItem value="pt">Português</SelectItem>
                <SelectItem value="ar">العربية</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Separator />
          <div className="p-2">
            <Button 
              className="w-full bg-purple-700 hover:bg-purple-800"
              onClick={() => setIsUpgradePlanOpen(true)}
            >
              {currentMenuItem.upgradePlan}
            </Button>
          </div>
        </PopoverContent>
      </Popover>

      {/* Upgrade Plan Modal */}
      <UpgradePlanModal
        open={isUpgradePlanOpen} 
        onOpenChange={setIsUpgradePlanOpen}
      /> 
    </>

  )
}