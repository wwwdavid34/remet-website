'use client'

import { motion } from 'framer-motion'
import { FileText } from 'lucide-react'

export default function Terms() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-coral-100 rounded-2xl mb-6">
              <FileText className="w-8 h-8 text-coral-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">
              Terms of Service
            </h1>
            <p className="text-navy-600">Last Updated: January 17, 2026</p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg prose-navy max-w-none">
            <h2>1. Acceptance of Terms</h2>
            <p>
              By downloading, installing, or using the Remet application (&quot;App&quot;), you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you do not agree to these Terms, do not use the App.
            </p>

            <h2>2. Description of Service</h2>
            <p>Remet is an assistive technology application designed to help users with face recognition difficulties. The App provides:</p>
            <ul>
              <li>Face detection and matching capabilities</li>
              <li>People profile management</li>
              <li>Spaced repetition training for face recognition</li>
              <li>Encounter tracking and documentation</li>
            </ul>
            <p>
              The App is intended as a personal memory aid and is not designed for surveillance, security, or identity verification purposes.
            </p>

            <h2>3. User Responsibilities</h2>
            <p>You agree to:</p>
            <ul>
              <li>Use the App only for lawful purposes</li>
              <li>Obtain appropriate consent before photographing others where legally required</li>
              <li>Not use the App to stalk, harass, or infringe upon others&apos; privacy</li>
              <li>Not use the App for any commercial surveillance purposes</li>
              <li>Not attempt to reverse-engineer, modify, or create derivative works of the App</li>
              <li>Maintain the security of your device and any data stored within the App</li>
            </ul>

            <h2>4. Privacy and Data</h2>
            <p>
              Your use of the App is also governed by our <a href="/privacy" className="text-coral-500 hover:text-coral-600">Privacy Policy</a>, which describes how we handle your data. Key points:
            </p>
            <ul>
              <li>Data is stored locally on your device by default</li>
              <li>iCloud sync is optional and requires Premium subscription</li>
              <li>We do not access, collect, or share your personal data</li>
              <li>You retain full ownership and control of your data</li>
            </ul>

            <h2>5. Subscriptions and Payments</h2>
            <h3>Free Tier</h3>
            <p>The App offers a free tier with limited features (up to 25 people, 5 tags).</p>

            <h3>Premium Subscription</h3>
            <ul>
              <li>Premium features are available through in-app purchase</li>
              <li>Subscriptions are billed monthly ($4.99) or annually ($39.99) through Apple&apos;s App Store</li>
              <li>Payment is charged to your Apple ID account at confirmation of purchase</li>
              <li>Subscriptions automatically renew unless cancelled at least 24 hours before the end of the current period</li>
              <li>You can manage and cancel subscriptions in your App Store account settings</li>
            </ul>

            <h3>Refunds</h3>
            <p>Refund requests are handled by Apple according to their refund policies. Contact Apple Support for refund requests.</p>

            <h2>6. Intellectual Property</h2>
            <p>
              The App, including its design, features, and content (excluding your personal data), is owned by Remet and protected by copyright and other intellectual property laws. You may not:
            </p>
            <ul>
              <li>Copy, modify, or distribute the App</li>
              <li>Reverse engineer or attempt to extract source code</li>
              <li>Use our trademarks without permission</li>
              <li>Remove any copyright or proprietary notices</li>
            </ul>

            <h2>7. Disclaimer of Warranties</h2>
            <p>
              THE APP IS PROVIDED &quot;AS IS&quot; WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED. WE DO NOT WARRANT THAT:
            </p>
            <ul>
              <li>The App will meet your specific requirements</li>
              <li>Face recognition will be accurate in all circumstances</li>
              <li>The App will be uninterrupted, secure, or error-free</li>
              <li>Any defects will be corrected</li>
            </ul>
            <p>
              Face recognition technology has inherent limitations. The App should not be relied upon as the sole means of identifying individuals, especially in critical situations.
            </p>

            <h2>8. Limitation of Liability</h2>
            <p>
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, REMET SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO:
            </p>
            <ul>
              <li>Loss of data</li>
              <li>Loss of profits or business opportunities</li>
              <li>Personal injury or emotional distress</li>
              <li>Incorrect face recognition results</li>
              <li>Any consequences arising from use or inability to use the App</li>
            </ul>
            <p>
              Our total liability shall not exceed the amount you paid for the App in the twelve (12) months preceding the claim.
            </p>

            <h2>9. Indemnification</h2>
            <p>You agree to indemnify and hold harmless Remet from any claims, damages, losses, or expenses arising from:</p>
            <ul>
              <li>Your use of the App</li>
              <li>Your violation of these Terms</li>
              <li>Your violation of any third-party rights</li>
              <li>Photos or data you add to the App</li>
            </ul>

            <h2>10. Modifications to Service</h2>
            <p>We reserve the right to:</p>
            <ul>
              <li>Modify or discontinue the App at any time</li>
              <li>Change features, pricing, or terms with reasonable notice</li>
              <li>Update the App for security, legal, or operational reasons</li>
            </ul>

            <h2>11. Termination</h2>
            <p>
              You may stop using the App at any time by uninstalling it. We may terminate or suspend your access if you violate these Terms. Upon termination:
            </p>
            <ul>
              <li>Your right to use the App ceases immediately</li>
              <li>Data stored locally remains on your device until you delete it</li>
              <li>Active subscriptions should be cancelled through the App Store</li>
            </ul>

            <h2>12. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the State of California, United States, without regard to conflict of law principles.
            </p>

            <h2>13. Dispute Resolution</h2>
            <p>
              Any disputes arising from these Terms or your use of the App shall first be attempted to be resolved through informal negotiation. If resolution cannot be reached within 30 days, disputes shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association.
            </p>

            <h2>14. Changes to Terms</h2>
            <p>We may update these Terms from time to time. We will notify you of material changes by:</p>
            <ul>
              <li>Posting the updated Terms on our website</li>
              <li>Updating the &quot;Last Updated&quot; date</li>
              <li>Providing notice within the App for significant changes</li>
            </ul>
            <p>Continued use of the App after changes constitutes acceptance of the updated Terms.</p>

            <h2>15. Contact Information</h2>
            <p>For questions about these Terms, please contact us:</p>
            <ul>
              <li><strong>Email:</strong> <a href="mailto:legal@remet-app.com" className="text-coral-500 hover:text-coral-600">legal@remet-app.com</a></li>
              <li><strong>Support:</strong> <a href="/support" className="text-coral-500 hover:text-coral-600">Help Center</a></li>
            </ul>

            <h2>16. Severability</h2>
            <p>
              If any provision of these Terms is found to be unenforceable, the remaining provisions will continue in full force and effect.
            </p>

            <h2>17. Entire Agreement</h2>
            <p>
              These Terms, together with our Privacy Policy, constitute the entire agreement between you and Remet regarding the App and supersede any prior agreements.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
