import Link from 'next/link'

export default function TermsOfService() {
 return (
   <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
     <h1 className="text-3xl font-extrabold text-gray-900 mb-2">PolySensei Terms of Service</h1>
     <p className="text-sm text-gray-500 mb-8">Last updated: February 7, 2025</p>
     
     <section className="mb-8">
       <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Agreement to Terms</h2>
       <p className="text-gray-700 mb-4">
         We are PolySensei ("we," "us," or "our"). These Terms constitute a legally binding agreement made between you and PolySensei. You agree that by accessing the Services, you have read, understood, and agreed to be bound by all of these Terms. If you do not agree with these Terms, you must not access or use the Services.
       </p>
     </section>

     <section className="mb-8">
       <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Our Services</h2>
       <p className="text-gray-700 mb-4">
         PolySensei offers AI-driven educational services, including:
       </p>
       <ul className="list-disc pl-5 text-gray-700 mb-4">
         <li>Free Plan: Basic access to our AI tutoring services</li>
         <li>Pro Plan: Advanced features and unlimited access to our AI tutoring services</li>
       </ul>
     </section>

     <section className="mb-8">
       <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Subscriptions</h2>
       <p className="text-gray-700 mb-4">
         Your subscription will continue and automatically renew unless canceled. You can cancel your subscription at any time by logging into your account. All purchases are non-refundable. We may change subscription fees from time to time with prior notice.
       </p>
     </section>

     <section className="mb-8">
       <h2 className="text-2xl font-bold text-gray-900 mb-4">4. User Responsibilities</h2>
       <p className="text-gray-700 mb-4">
         Users must:
       </p>
       <ul className="list-disc pl-5 text-gray-700 mb-4">
         <li>Be at least 18 years old to use the Services</li>
         <li>Provide accurate registration information</li>
         <li>Maintain the security of their account</li>
         <li>Use the Services in compliance with applicable laws</li>
         <li>Not use the Services for any unauthorized or illegal purposes</li>
       </ul>
     </section>

     <section className="mb-8">
       <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Intellectual Property Rights</h2>
       <p className="text-gray-700 mb-4">
         All content and materials available on PolySensei are our intellectual property and are protected by applicable copyright and trademark laws. You may only use the content for personal, non-commercial purposes.
       </p>
     </section>

     <section className="mb-8">
       <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Disclaimers</h2>
       <p className="text-gray-700 mb-4">
         The Services are provided "as is" without any warranties. We are not responsible for any damages resulting from your use of the Services. Some features may be in beta and subject to changes or interruptions.
       </p>
     </section>

     <section className="mb-8">
       <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Governing Law</h2>
       <p className="text-gray-700 mb-4">
         These Terms shall be governed by and construed in accordance with the laws of Japan. Any disputes shall be subject to the exclusive jurisdiction of the Tokyo District Court as the court of first instance.
       </p>
     </section>

     <section className="mb-8">
       <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Contact Us</h2>
       <p className="text-gray-700 mb-4">
         If you have any questions about these Terms, please contact us at:
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