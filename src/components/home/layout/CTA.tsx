import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export const CTA = () => {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8">今すぐ始めて、多言語スキルを次のレベルへ</h2>
        <p className="text-xl text-gray-600 mb-12">
          無料トライアルで、AIを活用した新しい多言語学習を体験してください。
        </p>
        <Link href='/chat' target="_blank" rel="noopener noreferrer">
          <button className="bg-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-700 transition-colors inline-flex items-center">
            無料で始める
            <ChevronRight className="ml-2 h-5 w-5" />
          </button>
        </Link>
      </div>
    </div>
  )
}
