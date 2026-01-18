'use client'

import { motion } from 'framer-motion'
import { Check, Shield, Lock, Eye, Trash2, Database, Globe, Mail } from 'lucide-react'

export default function PrivacyPolicy() {
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
            <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-100 rounded-2xl mb-6">
              <Shield className="w-8 h-8 text-teal-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">
              Privacy Policy
            </h1>
            <p className="text-navy-600">Last Updated: January 17, 2026</p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Privacy at a Glance */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-gradient-to-br from-teal-50 to-teal-100/50 rounded-3xl p-8 md:p-10 mb-16"
          >
            <h2 className="text-2xl font-bold text-navy-900 mb-6">Privacy at a Glance</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { text: 'All processing on-device', icon: Lock },
                { text: 'No third-party tracking', icon: Eye },
                { text: 'No data sold or shared', icon: Shield },
                { text: 'Optional cloud sync only', icon: Database },
                { text: 'Full data control', icon: Check },
                { text: 'Delete anytime', icon: Trash2 },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3 bg-white/60 rounded-xl p-4">
                  <div className="w-10 h-10 bg-teal-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-navy-800 font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Introduction */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-navy-900 mb-4">Introduction</h2>
            <div className="space-y-4 text-navy-600 leading-relaxed">
              <p>
                Remet (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how our iOS application Remet (&quot;App&quot;) collects, uses, stores, and protects your information.
              </p>
              <p>
                Remet is designed as an assistive technology for people with prosopagnosia (face blindness) and others who want to improve their face recognition abilities. We built this app with privacy as a core principle—your data stays on your device by default, and you maintain full control over your information.
              </p>
            </div>
          </div>

          {/* Your Rights - Moved Up */}
          <div className="mb-16 bg-gray-50 rounded-3xl p-8 md:p-10">
            <h2 className="text-2xl font-bold text-navy-900 mb-6">Your Rights and Choices</h2>
            <p className="text-navy-600 mb-8">You have full control over your data:</p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-6">
                <h3 className="font-bold text-navy-900 mb-3">Access & Export</h3>
                <ul className="space-y-2 text-navy-600">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                    <span>View all data stored in the App at any time</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                    <span>Data stored in standard accessible formats</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-6">
                <h3 className="font-bold text-navy-900 mb-3">Deletion</h3>
                <ul className="space-y-2 text-navy-600">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                    <span>Delete individual people, photos, or encounters</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                    <span>Delete all data by uninstalling the App</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-6">
                <h3 className="font-bold text-navy-900 mb-3">Correction</h3>
                <ul className="space-y-2 text-navy-600">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                    <span>Edit any information at any time</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                    <span>Correct face matches by reassigning</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-6">
                <h3 className="font-bold text-navy-900 mb-3">Opt-Out</h3>
                <ul className="space-y-2 text-navy-600">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                    <span>Deny any permission without losing core features</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                    <span>Use the App completely offline</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Information We Collect */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-navy-900 mb-6">Information We Collect</h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-bold text-navy-900 mb-4">1. Information You Provide</h3>
                <p className="text-navy-600 mb-4">When you use Remet, you may choose to provide:</p>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-navy-900 mb-3">Person Profiles</h4>
                    <ul className="space-y-1.5 text-sm text-navy-600">
                      <li>• Names of people you want to remember</li>
                      <li>• Relationship type (family, friend, colleague)</li>
                      <li>• Contact information (email, phone)</li>
                      <li>• Professional info (company, job title)</li>
                      <li>• Social media handles</li>
                      <li>• Birthday dates and personal notes</li>
                    </ul>
                  </div>

                  <div className="border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-navy-900 mb-3">Photos & Face Data</h4>
                    <ul className="space-y-1.5 text-sm text-navy-600">
                      <li>• Photos from camera or Photo Library</li>
                      <li>• Face crops extracted from photos</li>
                      <li>• Face embeddings (mathematical representations)</li>
                      <li>• Face location coordinates within photos</li>
                    </ul>
                  </div>

                  <div className="border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-navy-900 mb-3">Encounter Records</h4>
                    <ul className="space-y-1.5 text-sm text-navy-600">
                      <li>• Occasion names and notes</li>
                      <li>• Meeting dates and times</li>
                      <li>• Location data (if permission granted)</li>
                      <li>• Photos associated with encounters</li>
                    </ul>
                  </div>

                  <div className="border border-gray-200 rounded-xl p-5">
                    <h4 className="font-semibold text-navy-900 mb-3">Learning Data</h4>
                    <ul className="space-y-1.5 text-sm text-navy-600">
                      <li>• Quiz attempt history</li>
                      <li>• Response times</li>
                      <li>• Spaced repetition scheduling data</li>
                      <li>• Accuracy metrics</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-navy-900 mb-4">2. Information Collected Automatically</h3>
                <p className="text-navy-600 mb-3">We collect minimal automatic information:</p>
                <ul className="space-y-2 text-navy-600">
                  <li className="flex items-start gap-2">
                    <span className="text-navy-400">•</span>
                    <span>App installation date (for grace period calculations)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-navy-400">•</span>
                    <span>Subscription status (managed through Apple&apos;s StoreKit)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-navy-400">•</span>
                    <span>Referral code (if you use our referral program)</span>
                  </li>
                </ul>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
                <h3 className="text-lg font-bold text-navy-900 mb-3">3. Biometric Data</h3>
                <p className="text-navy-600 mb-4">
                  <strong>Important:</strong> Remet processes face images to create mathematical &quot;embeddings&quot; (512-dimensional vectors) that represent facial features. These embeddings are:
                </p>
                <ul className="space-y-2 text-navy-600">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <span>Generated entirely on your device using Apple&apos;s Vision and CoreML frameworks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <span>Stored locally on your device by default</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <span>Only synced to iCloud if you are a Premium subscriber AND explicitly enable sync</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <span>Never transmitted to our servers or any third parties</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <span>Cannot be reverse-engineered to recreate a face image</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* How We Use Your Information */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-navy-900 mb-6">How We Use Your Information</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-teal-600 mb-4">We DO use your data for:</h3>
                <ul className="space-y-3 text-navy-600">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                    <span><strong>Face Recognition:</strong> Matching faces to help you identify people</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                    <span><strong>Memory Training:</strong> Powering spaced repetition quizzes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                    <span><strong>Profile Management:</strong> Storing info about people you know</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                    <span><strong>Progress Tracking:</strong> Showing your improvement over time</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-coral-500 mb-4">We do NOT use your data for:</h3>
                <ul className="space-y-3 text-navy-600">
                  <li className="flex items-start gap-3">
                    <span className="text-coral-500 font-bold">✕</span>
                    <span>Advertising or marketing to third parties</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-coral-500 font-bold">✕</span>
                    <span>Selling or sharing with data brokers</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-coral-500 font-bold">✕</span>
                    <span>Training machine learning models</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-coral-500 font-bold">✕</span>
                    <span>Analytics, tracking, or behavioral profiling</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Data Storage and Security */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-navy-900 mb-6">Data Storage and Security</h2>

            <div className="space-y-6">
              <div className="border border-gray-200 rounded-xl p-6">
                <h3 className="font-bold text-navy-900 mb-3">Local Storage (Default)</h3>
                <p className="text-navy-600 mb-4">
                  By default, all your data is stored locally on your device using Apple&apos;s SwiftData framework:
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Person profiles', 'Face embeddings', 'Photo crops', 'Encounter records', 'Learning progress'].map((item) => (
                    <span key={item} className="px-3 py-1.5 bg-gray-100 rounded-full text-sm text-navy-700">{item}</span>
                  ))}
                </div>
                <p className="text-navy-600 mt-4 text-sm">
                  Local data is protected by your device&apos;s security features, including Face ID, Touch ID, or passcode.
                </p>
              </div>

              <div className="border border-gray-200 rounded-xl p-6">
                <h3 className="font-bold text-navy-900 mb-3">iCloud Sync (Optional, Premium Only)</h3>
                <p className="text-navy-600 mb-4">
                  Premium subscribers may optionally enable iCloud sync. When enabled:
                </p>
                <ul className="space-y-2 text-navy-600 text-sm">
                  <li>• Data synced to your personal iCloud account using Apple&apos;s CloudKit</li>
                  <li>• Encrypted in transit and at rest using Apple&apos;s security infrastructure</li>
                  <li>• Only you can access this data through your Apple ID</li>
                  <li>• We do not have access to your iCloud data</li>
                  <li>• Disable sync at any time in App settings</li>
                </ul>
              </div>

              <div className="border border-gray-200 rounded-xl p-6">
                <h3 className="font-bold text-navy-900 mb-3">Security Measures</h3>
                <ul className="space-y-2 text-navy-600 text-sm">
                  <li>• All face processing occurs on-device using Apple&apos;s secure enclaves</li>
                  <li>• No data transmitted to external servers (except iCloud if enabled)</li>
                  <li>• No third-party analytics or tracking SDKs</li>
                  <li>• Apple&apos;s native frameworks exclusively—zero third-party dependencies</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Device Permissions */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-navy-900 mb-6">Device Permissions</h2>
            <p className="text-navy-600 mb-6">Remet requests the following permissions, each for a specific purpose:</p>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-4 py-3 text-left text-sm font-semibold text-navy-900 border-b">Permission</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-navy-900 border-b">Purpose</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-navy-900 border-b">Required?</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {[
                    { perm: 'Camera', purpose: 'Capture photos for face identification', required: 'Optional' },
                    { perm: 'Photo Library (Read)', purpose: 'Import existing photos to identify people', required: 'Optional' },
                    { perm: 'Photo Library (Write)', purpose: 'Save processed photos if you choose', required: 'Optional' },
                    { perm: 'Location', purpose: 'Record where you met people', required: 'Optional' },
                    { perm: 'Contacts', purpose: 'Link profiles to existing contacts', required: 'Optional' },
                  ].map((row) => (
                    <tr key={row.perm}>
                      <td className="px-4 py-3 font-medium text-navy-900">{row.perm}</td>
                      <td className="px-4 py-3 text-navy-600">{row.purpose}</td>
                      <td className="px-4 py-3">
                        <span className="px-2 py-1 bg-teal-100 text-teal-700 text-xs font-medium rounded-full">{row.required}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-navy-500 text-sm mt-4">
              You can deny any permission and still use the App&apos;s core features. Permissions can be changed at any time in your device&apos;s Settings.
            </p>
          </div>

          {/* Data Sharing */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-navy-900 mb-4">Data Sharing</h2>
            <div className="bg-teal-50 border border-teal-200 rounded-xl p-6 mb-6">
              <p className="text-navy-900 font-semibold text-lg">
                We do not sell, rent, or share your personal data with third parties.
              </p>
            </div>
            <p className="text-navy-600 mb-4">The only circumstances where your data may be accessed by others:</p>
            <ul className="space-y-3 text-navy-600">
              <li><strong>iCloud Sync:</strong> If enabled, data is stored in your personal iCloud account (managed by Apple)</li>
              <li><strong>Referral Program:</strong> Your referral code (not personal data) is verified through CloudKit</li>
              <li><strong>Legal Requirements:</strong> We may disclose information if required by law, though we have no server-side data to disclose</li>
            </ul>
          </div>

          {/* Data Retention */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-navy-900 mb-4">Data Retention</h2>
            <ul className="space-y-3 text-navy-600">
              <li><strong>Local Data:</strong> Retained on your device until you delete it or uninstall the App</li>
              <li><strong>iCloud Data:</strong> Retained in your iCloud account until you delete it or disable sync</li>
              <li><strong>Subscription Data:</strong> Managed by Apple through the App Store; we do not store payment information</li>
            </ul>
          </div>

          {/* Legal Compliance Section */}
          <div className="mb-16 bg-gray-50 rounded-3xl p-8 md:p-10">
            <div className="flex items-center gap-3 mb-6">
              <Globe className="w-6 h-6 text-navy-600" />
              <h2 className="text-2xl font-bold text-navy-900">Legal Compliance</h2>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="font-bold text-navy-900 mb-3">Children&apos;s Privacy</h3>
                <p className="text-navy-600">
                  Remet is not directed at children under 13. We do not knowingly collect personal information from children under 13. If you believe a child has provided us with personal information, please contact us.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-navy-900 mb-3">International Users</h3>
                <p className="text-navy-600">
                  Remet stores data locally on your device. If you enable iCloud sync, your data will be stored in Apple&apos;s data centers according to your iCloud account settings and Apple&apos;s privacy policies. We do not transfer data to our own servers in any jurisdiction.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-navy-900 mb-3">California Privacy Rights (CCPA)</h3>
                <p className="text-navy-600 mb-3">If you are a California resident, you have the right to:</p>
                <ul className="space-y-1 text-navy-600 text-sm mb-3">
                  <li>• Know what personal information is collected</li>
                  <li>• Know whether your personal information is sold or disclosed</li>
                  <li>• Say no to the sale of personal information</li>
                  <li>• Access and request deletion of your personal information</li>
                </ul>
                <p className="text-navy-700 font-medium">We do not sell personal information.</p>
              </div>

              <div>
                <h3 className="font-bold text-navy-900 mb-3">European Users (GDPR)</h3>
                <p className="text-navy-600 mb-3">If you are in the European Economic Area, your GDPR rights include:</p>
                <div className="grid sm:grid-cols-2 gap-2 text-sm text-navy-600">
                  <div>• Right of Access</div>
                  <div>• Right to Rectification</div>
                  <div>• Right to Erasure</div>
                  <div>• Right to Restrict Processing</div>
                  <div>• Right to Data Portability</div>
                  <div>• Right to Object</div>
                </div>
                <p className="text-navy-600 mt-3 text-sm">
                  <strong>Legal Basis:</strong> We process your data based on your consent and contractual necessity.
                </p>
              </div>
            </div>
          </div>

          {/* Changes to Policy */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-navy-900 mb-4">Changes to This Policy</h2>
            <p className="text-navy-600 mb-4">We may update this Privacy Policy from time to time. We will notify you by:</p>
            <ul className="space-y-2 text-navy-600">
              <li>• Posting the new Privacy Policy on this page</li>
              <li>• Updating the &quot;Last Updated&quot; date</li>
              <li>• Providing notice within the App for material changes</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="bg-navy-900 rounded-3xl p-8 md:p-10 text-center">
            <Mail className="w-10 h-10 text-teal-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
            <p className="text-gray-300 mb-6">
              If you have questions about this Privacy Policy or our privacy practices:
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:privacy@remet-app.com"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-navy-900 rounded-full font-semibold hover:bg-gray-100 transition-colors"
              >
                privacy@remet-app.com
              </a>
              <a
                href="/support"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-white/30 text-white rounded-full font-semibold hover:bg-white/10 transition-colors"
              >
                Help Center
              </a>
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}
