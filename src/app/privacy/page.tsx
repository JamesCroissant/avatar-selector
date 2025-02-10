import Link from 'next/link'

export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-2">PolySensei Privacy Policy</h1>
      <p className="text-sm text-gray-500 mb-8">Last updated: February 7, 2025</p>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
        <p className="text-gray-700 mb-4">
          This privacy notice explains how PolySensei ("we," "us," or "our") collects, uses, and protects your information when you use our services. Your privacy is important to us, and we are committed to protecting it.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
        <p className="text-gray-700 mb-4">
          We collect the following types of information:
        </p>
        <ul className="list-disc pl-5 text-gray-700 mb-4">
          <li>Email addresses and account information when you register</li>
          <li>Payment information when you subscribe to our Pro Plan (processed securely by Stripe)</li>
          <li>Usage data to improve our services</li>
          <li>Information from social media if you choose to log in using social media accounts</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
        <p className="text-gray-700 mb-4">
          We use your information to:
        </p>
        <ul className="list-disc pl-5 text-gray-700 mb-4">
          <li>Provide and improve our AI tutoring services</li>
          <li>Process your payments and manage your account</li>
          <li>Communicate with you about our services</li>
          <li>Ensure the security of our services</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Data Security</h2>
        <p className="text-gray-700 mb-4">
          We implement appropriate security measures to protect your personal information. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Your Rights</h2>
        <p className="text-gray-700 mb-4">
          Under applicable law, you may have rights to:
        </p>
        <ul className="list-disc pl-5 text-gray-700 mb-4">
          <li>Access your personal information</li>
          <li>Correct your personal information</li>
          <li>Delete your personal information</li>
          <li>Object to processing of your personal information</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Children's Privacy</h2>
        <p className="text-gray-700 mb-4">
          Our services are not intended for users under 18 years of age. We do not knowingly collect information from children under 18.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Changes to This Policy</h2>
        <p className="text-gray-700 mb-4">
          We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Contact Us</h2>
        <p className="text-gray-700 mb-4">
          If you have any questions about this Privacy Policy, please contact us at:
        </p>
        <p className="text-gray-700">
          <Link href="mailto:canmeet10140621@gmail.com" className="text-blue-600 hover:underline">
            canmeet10140621@gmail.com
          </Link>
        </p>
      </section>

      <div className="max-w-4xl mx-auto text-center">
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/terms" 
            className="inline-flex items-center justify-center text-base"
          >
            Terms of Service
          </Link>
          
          <Link 
            href="/privacy" 
            className="inline-flex items-center justify-center text-base"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </div>
  )
}