'use client'

import { ChevronDown, HelpCircle } from "lucide-react"
import { useState } from "react"

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqItems = [
    {
      question: "PolySenseiはどのように機能しますか?",
      answer:
        "PolySenseiは、AIを活用して個別化された言語学習体験を提供します。リスニング、スピーキング、文法学習など、様々な側面からあなたの学習をサポートします。24時間多言語AIアシスタントがいつでも対応できる為、あなたの学習ペースに合わせてをサービスを提供します。",
    },
    {
      question: "無料トライアルはありますか？",
      answer:
        "はい、無料プランを通じて、PolySenseiの基本機能を体験いただけます。より高度な機能が必要な場合は、プロプランへのアップグレードをご検討ください。",
    },
    {
      question: "プランはいつでも変更できますか？",
      answer:
        "はい、いつでもプランを変更することができます。アカウント設定から簡単にプランを変更できます。アップグレードは即時反映され、新しい機能にすぐにアクセスできます。ダウングレードの場合は、現在の請求サイクルの終了時に適用されます。柔軟性を重視し、あなたのニーズの変化に合わせて対応できるようにしています。",
    },
    {
      question: "複数の言語を同時に学習できますか？",
      answer:
        "はい、言語別のアバターを選択して頂くことで言語の切り替えが可能です。",
    },
    {
      question: "モバイルアプリはありますか？",
      answer:
        "ありません。需要があればモバイルアプリの開発も検討いたします。",
    },
  ]

  return (
    <div className="grid gap-6">
      {faqItems.map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg"
        >
          <button
            className="flex justify-between items-center w-full p-6 text-left focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            aria-expanded={openIndex === index}
          >
            <span className="flex items-center text-lg font-semibold text-gray-900">
              <HelpCircle className="w-6 h-6 mr-3 text-purple-500" />
              {item.question}
            </span>
            <ChevronDown
              className={`w-5 h-5 text-purple-500 transition-transform duration-300 ${
                openIndex === index ? "transform rotate-180" : ""
              }`}
            />
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${openIndex === index ? "max-h-96" : "max-h-0"}`}
          >
            <div className="p-6 bg-purple-50">
              <p className="text-gray-600">{item.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

