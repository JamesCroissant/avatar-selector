"use client"

import { useState } from "react"
import Link from "next/link"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SubscriptionModal } from "./SubscriptionModal"

interface UpgradePlanModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

interface PlanDetails {
  title: string
  price: string
  features: string[]
  buttonText: string
}

const plans: Record<string, PlanDetails> = {
  free: {
    title: "Free",
    price: "0",
    features: ["Access to multi-language AI assistants ", "Custom your scenarios"],
    buttonText: "Current Plan",
  },
  pro: {
    title: "Pro",
    price: "20",
    features: [
      "Everything in it",
      "Higher chatting limits",
      "Show the scripts",
      "Unlimited chatting",
      "Custom your Scenarios",
    ],
    buttonText: "Upgrade to a Pro Plan",
  },
}

export function UpgradePlanModal({ open, onOpenChange }: UpgradePlanModalProps) {
  const [selectedPlan, setSelectedPlan] = useState<"free" | "pro">("pro")
  const plan = plans[selectedPlan]
  const [showSubscription, setShowSubscription] = useState(false)

  const handleUpgrade = () => {
    onOpenChange(false)
    setShowSubscription(true)
  }

  return (
    <>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="sm:max-w-[540px] bg-white p-5 rounded-xl">
          <div className="space-y-3">
            <div className="space-y-2">
              <h1 className="text-xl font-semibold tracking-tight text-gray-900">Upgrade Plan</h1>
              <p className="text-sm text-gray-500">
                You&apos;re currently on the PolySensei {selectedPlan === "free" ? "Free" : "Pro"} plan.
              </p>
            </div>

            <Tabs
              value={selectedPlan}
              onValueChange={(value) => setSelectedPlan(value as "free" | "pro")}
              className="w-full"
            >
              <TabsList className="grid w-full grid-cols-2 bg-gray-100 rounded-lg">
                <TabsTrigger
                  value="free"
                  // className="text-sm px-3 py-1.5 rounded-md data-[state=active]:bg-white data-[state=active]:text-gray-900 data-[state=active]:shadow-sm"
                  className="text-sm rounded-md"
                >
                  Free
                </TabsTrigger>
                <TabsTrigger
                  value="pro"
                  className="text-sm rounded-md data-[state=active]:bg-white data-[state=active]:text-gray-900 data-[state=active]:shadow-sm"
                >
                  Pro
                </TabsTrigger>
              </TabsList>
            </Tabs>

            <div className="space-y-3 bg-gray-50 rounded-lg p-4">
              <h2 className="text-xl font-medium text-gray-900">{plan.title}</h2>

              <div className="flex items-center gap-1.5">
                <span className="text-2xl font-medium text-gray-900">${plan.price}</span>
                <span className="text-gray-500">/user/month</span>
              </div>

              <div className="min-h-[180px] space-y-3">
                <h3 className="font-medium text-gray-900 text-base">What's Benefit?</h3>
                <ul className="space-y-2 text-sm">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <Check className="h-4 w-4 flex-shrink-0 text-purple-600" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="text-sm text-gray-500">
              Compare plans and options on our{" "}
              <Link href="/pricing" className="text-purple-600 hover:underline">
                pricing page ↗
              </Link>
            </div>

            <div className="flex justify-end gap-3 pt-4">
              <Button
                variant="outline"
                className="bg-white hover:bg-gray-50 text-gray-700 border-gray-300"
                onClick={() => onOpenChange(false)}
              >
                Cancel
              </Button>
              <Button
                className={
                  selectedPlan === "free"
                    ? "bg-gray-100 text-gray-500 hover:bg-gray-100 cursor-default"
                    : "bg-purple-600 hover:bg-purple-700 text-white"
                }
                disabled={selectedPlan === "free"}
                onClick={handleUpgrade}
              >
                {plan.buttonText}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Subscription modal */}
      <SubscriptionModal
        open={showSubscription} 
        onOpenChange={setShowSubscription} 
      />
    </>
  )
}

