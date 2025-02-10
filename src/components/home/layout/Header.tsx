// "use client"

// import { Button } from "@/components/ui/button"
// import { ChevronDown, ChevronRight, Mic } from "lucide-react"
// import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
// import Link from "next/link"

// export const Header = () => {
//   return (
//     <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50">
//       <div className="px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between backdrop:">
//         <Link href="/" className="flex items-center gap-2">
//           <Mic className="w-6 h-6 text-[#0066FF]" />
//           <span className="font-semibold text-xl">PolySensei</span>
//         </Link>

//         <div className="flex items-center gap-4">

//           <DropdownMenu>
//             <DropdownMenuTrigger asChild>
//               <Button variant="ghost" className="text-gray-600 hover:text-gray-900 rounded-full">
//                 <span className="flex items-center gap-1">
//                   🇯🇵
//                   <span>日本語</span>
//                 </span>
//                 <ChevronDown className="w-4 h-4 ml-1" />
//               </Button>
//             </DropdownMenuTrigger>
//             <DropdownMenuContent align="end" className="max-h-80 overflow-y-auto">
//               <DropdownMenuItem>
//                 <span className="flex items-center gap-1">🇺🇸 English</span>
//               </DropdownMenuItem>
//               <DropdownMenuItem>
//                 <span className="flex items-center gap-1">🇪🇸 Español</span>
//               </DropdownMenuItem>
//               <DropdownMenuItem>
//                 <span className="flex items-center gap-1">🇮🇹 Italiano</span>
//               </DropdownMenuItem>
//               <DropdownMenuItem>
//                 <span className="flex items-center gap-1">🇫🇷 Français</span>
//               </DropdownMenuItem>
//               <DropdownMenuItem>
//                 <span className="flex items-center gap-1">🇩🇪 Deutsch</span>
//               </DropdownMenuItem>
//               <DropdownMenuItem>
//                 <span className="flex items-center gap-1">🇯🇵 日本語</span>
//               </DropdownMenuItem>
//               <DropdownMenuItem>
//                 <span className="flex items-center gap-1">🇰🇷 한국어</span>
//               </DropdownMenuItem>
//               <DropdownMenuItem>
//                 <span className="flex items-center gap-1">🇨🇳 中文</span>
//               </DropdownMenuItem>
//               <DropdownMenuItem>
//                 <span className="flex items-center gap-1">🇮🇳 हिन्दी</span>
//               </DropdownMenuItem>
//               <DropdownMenuItem>
//                 <span className="flex items-center gap-1">🇵🇹 Português</span>
//               </DropdownMenuItem>
//               <DropdownMenuItem>
//                 <span className="flex items-center gap-1">🇸🇦 العربية</span>
//               </DropdownMenuItem>
//             </DropdownMenuContent>
//           </DropdownMenu>

//           <Link href='/chat' target="_blank" rel="noopener noreferrer">
//             <Button className="bg-purple-500 hover:bg-purple-400 rounded-full text-white font-normal">
//               はじめる
//               <ChevronRight className="h-4 w-4" />
//             </Button>
//           </Link>
//         </div>
//       </div>
//     </header>
//   )
// }

// "use client"

// import { Button } from "@/components/ui/button"
// import { ChevronDown, ChevronRight, Mic } from "lucide-react"
// import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
// import Link from "next/link"
// import { useRouter, usePathname } from 'next/navigation'
// import { useLocale, useTranslations } from 'next-intl'

// export const Header = () => {
//   const router = useRouter()
//   const pathname = usePathname()
//   const locale = useLocale()
//   const t = useTranslations('header')

//   const changeLanguage = (newLocale: string) => {
//     const newPathname = `/${newLocale}${pathname.replace(`/${locale}`, '')}`
//     router.push(newPathname)
//   }

//   return (
//     <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50">
//       <div className="px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between backdrop:">
//         <Link href="/" className="flex items-center gap-2">
//           <Mic className="w-6 h-6 text-[#0066FF]" />
//           <span className="font-semibold text-xl">PolySensei</span>
//         </Link>

//         <div className="flex items-center gap-4">

//           <DropdownMenu>
//             <DropdownMenuTrigger asChild>
//               <Button variant="ghost" className="text-gray-600 hover:text-gray-900 rounded-full">
//                 <span className="flex items-center gap-1">
//                   {locale === 'ja' ? '🇯🇵' : locale === 'en' ? '🇺🇸' : locale === 'es' ? '🇪🇸' : locale === 'it' ? '🇮🇹' : locale === 'fr' ? '🇫🇷' : locale === 'de' ? '🇩🇪' : locale === 'ko' ? '🇰🇷' : locale === 'zh' ? '🇨🇳' : locale === 'hi' ? '🇮🇳' : locale === 'pt' ? '🇵🇹' : '🇸🇦'}
//                   <span>{locale === 'ja' ? '日本語' : locale === 'en' ? 'English' : locale === 'es' ? 'Español' : locale === 'it' ? 'Italiano' : locale === 'fr' ? 'Français' : locale === 'de' ? 'Deutsch' : locale === 'ko' ? '한국어' : locale === 'zh' ? '中文' : locale === 'hi' ? 'हिन्दी' : locale === 'pt' ? 'Português' : 'العربية'}</span>
//                 </span>
//                 <ChevronDown className="w-4 h-4 ml-1" />
//               </Button>
//             </DropdownMenuTrigger>
//             <DropdownMenuContent align="end" className="max-h-80 overflow-y-auto">
//               <DropdownMenuItem onClick={() => changeLanguage('en')}>
//                 <span className="flex items-center gap-1">🇺🇸 English</span>
//               </DropdownMenuItem>
//               <DropdownMenuItem onClick={() => changeLanguage('es')}>
//                 <span className="flex items-center gap-1">🇪🇸 Español</span>
//               </DropdownMenuItem>
//               <DropdownMenuItem onClick={() => changeLanguage('it')}>
//                 <span className="flex items-center gap-1">🇮🇹 Italiano</span>
//               </DropdownMenuItem>
//               <DropdownMenuItem onClick={() => changeLanguage('fr')}>
//                 <span className="flex items-center gap-1">🇫🇷 Français</span>
//               </DropdownMenuItem>
//               <DropdownMenuItem onClick={() => changeLanguage('de')}>
//                 <span className="flex items-center gap-1">🇩🇪 Deutsch</span>
//               </DropdownMenuItem>
//               <DropdownMenuItem onClick={() => changeLanguage('ja')}>
//                 <span className="flex items-center gap-1">🇯🇵 日本語</span>
//               </DropdownMenuItem>
//               <DropdownMenuItem onClick={() => changeLanguage('ko')}>
//                 <span className="flex items-center gap-1">🇰🇷 한국어</span>
//               </DropdownMenuItem>
//               <DropdownMenuItem onClick={() => changeLanguage('zh')}>
//                 <span className="flex items-center gap-1">🇨🇳 中文</span>
//               </DropdownMenuItem>
//               <DropdownMenuItem onClick={() => changeLanguage('hi')}>
//                 <span className="flex items-center gap-1">🇮🇳 हिन्दी</span>
//               </DropdownMenuItem>
//               <DropdownMenuItem onClick={() => changeLanguage('pt')}>
//                 <span className="flex items-center gap-1">🇵🇹 Português</span>
//               </DropdownMenuItem>
//               <DropdownMenuItem onClick={() => changeLanguage('ar')}>
//                 <span className="flex items-center gap-1">🇸🇦 العربية</span>
//               </DropdownMenuItem>
//             </DropdownMenuContent>
//           </DropdownMenu>

//           {/* asChild使え！ */}
//           <Link href='/chat' target="_blank" rel="noopener noreferrer">
//             <Button className="bg-purple-500 hover:bg-purple-400 rounded-full text-white font-normal">
//               {t('start')}
//               <ChevronRight className="h-4 w-4" />
//             </Button>
//           </Link>
//         </div>
//       </div>
//     </header>
//   )
// }

