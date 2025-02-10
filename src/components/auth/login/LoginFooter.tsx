import Link from 'next/link'

export const LoginFooter = () => {
  return (
    <p className="text-xs mt-4 text-center text-gray-500">
      By continuing, you agree to our{" "}
      <Link href="/terms" className="text-purple-600 hover:underline">
        Terms of Service
      </Link>{" "}
      and{" "}
      <Link href="/privacy" className="text-purple-600 hover:underline">
        Privacy Policy
      </Link>
      .
    </p>
  )
}
