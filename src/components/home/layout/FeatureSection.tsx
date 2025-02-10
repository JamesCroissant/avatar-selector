import { Globe2, MessageCircle, Zap } from 'lucide-react'
import React from 'react'

export const FeatureSection = () => {
  return (
    <div className="bg-purple-50 py-20 px-4 sm:px-6 lg:px-8 mx-8 rounded-3xl">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <MessageCircle className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-4">シチュエーション別会話学習</h3>
            <p className="text-[14px] text-gray-600">
              シチュエーション別の自然な会話で、複数の言語で実践的なスキルを身につけられます。
            </p>
          </div>
          <div className="text-center">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Zap className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-4">瞬時のフィードバック</h3>
            <p className="text-[14px] text-gray-600">
              発音や文法の間違いを各言語でリアルタイムで指摘し、効率的な学習をサポート。
            </p>
          </div>
          <div className="text-center">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Globe2 className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-4">グローバル対応</h3>
            <p className="text-[14px] text-gray-600">AI多言語ネイティブアシスタントとの会話練習で、実践的なスキルを習得。</p>
          </div>
        </div>
      </div>
    </div>
  )
}
