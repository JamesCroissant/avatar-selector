import React from 'react'

interface VerifyFooterProps {
  onBackToLogin: () => void
}

export const VerifyFooter = ({ onBackToLogin }: VerifyFooterProps) => {
  return (
    <p className="text-xs mt-4 text-center text-gray-500">
      Not seeing the email in your box?{" "}
      <span
        onClick={onBackToLogin} 
        className="text-purple-600 hover:underline cursor-pointer"
      >
        Try sending again
      </span>
    </p>
  )
}
