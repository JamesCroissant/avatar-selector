import { Globe2 } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export const Footer = () => {
  return (
    <footer className="mt-auto">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="md:p-18 md:pb-24 mx-auto my-12 max-w-[1400px] rounded-3xl bg-purple-50 p-10">
          <div className="flex w-full max-w-2xl flex-col justify-between gap-x-12 gap-y-16 md:mx-auto md:max-w-screen-xl md:flex-row">
            <Globe2 className="h-8 w-8 text-purple-600 md:mx-auto" />
            <div className="max-w-[1200px] md:mx-auto grid grid-cols-2 gap-y-12 md:grid-cols-4 md:gap-16 lg:gap-[108px]">
              <div className="space-y-6">
                <h3 className="text-base font-semibold">プロダクト</h3>
                <div className="flex flex-col space-y-4">
                  <a href="/" className="text-gray-500 hover:text-gray-900 text-sm">
                    ホーム
                  </a>
                  <a href="/pricing" className="text-gray-500 hover:text-gray-900 text-sm">
                    料金
                  </a>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-base font-semibold">サポート</h3>
                <div className="flex flex-col space-y-4">
                  <a href="#" className="text-gray-500 hover:text-gray-900 text-sm">
                    プライバシー
                  </a>
                  <a href="#" className="text-gray-500 hover:text-gray-900 text-sm">
                    利用規約
                  </a>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-base font-semibold">SNS</h3>
                <div className="flex flex-col space-y-4">
                  <Link href="https://x.com/yu_van_engineer" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 text-sm">
                    Twitter
                  </Link>
                  <Link href="https://www.linkedin.com/in/yu-hamada" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 text-sm">
                    LinkedIn
                  </Link>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-base font-semibold">その他</h3>
                <div className="flex flex-col space-y-4">
                  <Link href="https://dev.to/jamescroissant" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 text-sm">
                    ブログ
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center text-gray-500 text-sm pb-8">© 2025 PolySensei. All rights reserved.</div>
    </footer>
  )
}
