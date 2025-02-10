import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export const HeroSection = () => {
  return (
    <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-8">
            AIで多言語学習を
            <br />
            もっと効率的に
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            リスニング、スピーキング、文法、単語など、
            <br />
            すべての言語学習をAIがサポートします。
          </p>
          <Link href='/chat' target="_blank" rel="noopener noreferrer">
            <button className="bg-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-700 transition-colors inline-flex items-center">
              無料で始める
              <ChevronRight className="ml-2 h-5 w-5" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
