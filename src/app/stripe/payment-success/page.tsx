import { AuthModal } from "@/components/auth/AuthModal";
import { PaymentSuccessModal } from "@/components/stripe/PaymentSuccessModal";

export default function PaymentSuccessPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#1c0632] opacity-85">
      <PaymentSuccessModal />
    </div>
  )  
}