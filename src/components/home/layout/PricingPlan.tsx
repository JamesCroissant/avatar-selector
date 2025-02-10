import { Button } from '@/components/ui/button'
import { Check, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

interface PricingPlanProps {
  plan: {
    name: string
    description: string
    price: string
    features: string[]
    popular: boolean
    disabled?: boolean
    buttonColor: string
    buttonText: string
  }
}

export const PricingPlan = ({ plan }: PricingPlanProps) => {
  return (
    <div
      className={`rounded-2xl bg-white p-6 shadow-md ${plan.popular ? "border-2 border-purple-500" : "border border-gray-200"} relative`}
    >
      {plan.popular && (
        <div className="absolute -top-3 right-4 bg-purple-100 text-purple-600 px-2 py-0.5 rounded-full text-xs font-semibold">
          人気
        </div>
      )}
      <h2 className="text-2xl font-bold">{plan.name}</h2>
      <p className="mt-2 text-sm text-gray-600">{plan.description}</p>
      <div className="mt-4">
        <span className="text-3xl font-bold">{plan.price}</span>
        <span className="text-sm text-gray-500">/月</span>
      </div>
  
      <div className="mt-6 space-y-2">
        {plan.name !== "無料プラン" && (
          <p className="text-xs text-gray-600 mb-2">
            {plan.name === "プロ" ? "無料プラン" : "プロプラン"}の機能に加えて：
          </p>
        )}
        {plan.features.map((feature, index) => (
          <div key={index} className="flex items-center gap-2">
            <Check className="h-4 w-4 text-purple-500" />
            <span className="text-sm text-gray-600">{feature}</span>
          </div>
        ))}
      </div>
  
      {plan.disabled ? (
        <Button className={`mt-6 w-full ${plan.buttonColor} text-white rounded-full py-2 text-sm`} disabled>
          {plan.buttonText}
        </Button>
      ) : (
        <Link href="/chat" target="_blank" rel="noopener noreferrer">
          <Button
            className={`mt-6 w-full ${plan.buttonColor} text-white rounded-full py-2 text-sm inline-flex items-center`}
          >
            {plan.buttonText}
            <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
        </Link>
      )}
    </div>
  )
}
