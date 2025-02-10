import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import Link from "next/link"

export function PaymentSuccessModal() {
  return (
    <div className="text-center p-6 bg-white rounded-xl shadow-lg max-w-sm mx-auto">
      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
        <Check className="h-6 w-6 text-green-600" aria-hidden="true" />
      </div>
      <h3 className="mt-4 text-xl font-semibold text-gray-900">Payment successful</h3>
      <p className="mt-2 text-sm text-gray-500">
        Thank you for subscribing to our Pro plan. Your account has been upgraded.
      </p>
      <Link href='/chat'>
        <Button className='mt-4 bg-purple-600 hover:bg-purple-700'>
          Return to Chat
        </Button>
      </Link>
    </div>
  )
}


