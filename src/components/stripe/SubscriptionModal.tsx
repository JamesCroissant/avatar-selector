"use client"

import { FormEvent, useState } from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Image from "next/image"

import { CardElement, Elements, useElements, useStripe } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import { Check, Loader2 } from "lucide-react"
import { CheckoutForm } from "./CheckoutForm"

if (!process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY) {
  throw new Error("Missing Stripe public key")
}

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)

interface SubscriptionModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function SubscriptionModal({ open, onOpenChange }: SubscriptionModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[540px] bg-white p-6 rounded-xl">
        <div className="">
          <h2 className="text-xl font-semibold text-gray-900">Subscribing to Pro</h2>
          <Elements 
            stripe={stripePromise}
            options={{
              mode: "payment",
              amount: 1000,
              currency: "usd",
            }}
          >
            <CheckoutForm
              onOpenChange={onOpenChange}
            />
          </Elements>
        </div>
      </DialogContent>
    </Dialog>
  )
}

