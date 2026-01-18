'use client'

import { motion } from 'framer-motion'
import { Mail, Bug, ChevronDown } from 'lucide-react'
import { useState } from 'react'

const faqs = [
  {
    question: 'What is prosopagnosia?',
    answer: 'Prosopagnosia, also known as face blindness, is a neurological condition that impairs a person\'s ability to recognize faces. It can be congenital (present from birth) or acquired through brain injury or stroke. People with prosopagnosia often develop alternative strategies for recognizing people, such as identifying clothing, voice, or gait. Remet is designed to support these strategies by helping you associate faces with names and contextual information through repeated practice.',
  },
  {
    question: 'How does face recognition work in Remet?',
    answer: 'Remet uses Apple\'s Vision framework and CoreML to detect faces in photos and create mathematical representations (embeddings) of facial features. When you add a new photo, Remet compares these embeddings against known faces and suggests possible matches. However, unlike surveillance systems, Remet never automatically assigns identities—you always confirm or correct matches manually. This user-confirmed approach ensures accuracy and keeps you in control of your data.',
  },
  {
    question: 'Is my data secure?',
    answer: 'Absolutely. All face processing happens entirely on your device using Apple\'s secure frameworks. Your photos, face data, and personal information never leave your phone unless you explicitly enable iCloud sync (available for Premium subscribers). We don\'t use any third-party analytics, tracking, or advertising.',
  },
  {
    question: 'What\'s the difference between Free and Premium?',
    answer: 'The Free tier includes full face recognition, spaced repetition training, encounter tracking, and all core features—limited to 25 people and 5 tags. Premium ($4.99/month or $39.99/year) unlocks unlimited people, unlimited tags, and optional iCloud sync to access your data across multiple devices. You can start with Free and upgrade anytime.',
  },
  {
    question: 'What is spaced repetition?',
    answer: 'Spaced repetition is a scientifically-proven learning technique that optimizes when you review information for maximum retention. Remet uses the SM-2 algorithm to schedule face recognition quizzes. Faces you identify correctly are shown less frequently, while faces you struggle with appear more often. This adaptive approach makes your practice time more effective and helps build lasting recognition memory.',
  },
  {
    question: 'Can I import photos from my Photo Library?',
    answer: 'Yes! You can import photos directly from your Photo Library or capture new photos with the in-app camera. Remet also supports importing from the Photos app via the share extension—just select photos in Photos and tap Share → Remet. Photos are processed locally and face detection happens immediately on your device.',
  },
  {
    question: 'How do encounters work?',
    answer: 'Encounters help you record when and where you met people. You can create an encounter by adding photos from an event or meeting, naming the occasion, and optionally recording the location. Remet groups photos taken within 30 minutes and 500 meters into suggested encounters. This builds a timeline of your relationships and provides additional context for remembering people.',
  },
  {
    question: 'What if Remet suggests the wrong match?',
    answer: 'Remet is designed with conservative matching—it asks for confirmation when uncertain rather than making incorrect automatic assignments. If a match is wrong, simply tap "Not a Match" and either assign the correct person or create a new profile. The more faces you add for each person, the more accurate matching becomes over time.',
  },
  {
    question: 'Can I use Remet offline?',
    answer: 'Yes! Remet works completely offline. All face detection, matching, and training happen on your device. You only need an internet connection to enable iCloud sync (Premium) or to manage your subscription through the App Store.',
  },
  {
    question: 'How do I cancel my Premium subscription?',
    answer: 'Subscriptions are managed through the App Store. To cancel, go to Settings → [Your Name] → Subscriptions → Remet → Cancel Subscription. You\'ll continue to have Premium access until the end of your current billing period. Your data will remain on your device, but you\'ll be limited to the Free tier limits (25 people, 5 tags) after expiration.',
  },
  {
    question: 'Can I delete my data?',
    answer: 'Yes, you have full control over your data. You can delete individual people, photos, or encounters within the app. To delete all data, simply uninstall the app from your device. If you\'ve enabled iCloud sync, you can also delete your data from iCloud through Settings → [Your Name] → iCloud → Manage Account Storage → Remet.',
  },
  {
    question: 'Does Remet work on iPad?',
    answer: 'Yes! Remet is a universal app that runs natively on both iPhone and iPad. The interface adapts to larger screens for a better experience on iPad. With Premium and iCloud sync enabled, your data stays synchronized across all your devices.',
  },
]

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left"
      >
        <span className="text-lg font-semibold text-navy-900 pr-8">{question}</span>
        <ChevronDown
          className={`w-5 h-5 text-navy-400 transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="pb-6"
        >
          <p className="text-navy-600 leading-relaxed">{answer}</p>
        </motion.div>
      )}
    </div>
  )
}

export default function Support() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">
              How Can We Help?
            </h1>
            <p className="text-xl text-navy-600">
              Find answers to common questions or reach out to our support team.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm"
            >
              <div className="w-14 h-14 bg-coral-100 rounded-xl flex items-center justify-center mb-6">
                <Mail className="w-7 h-7 text-coral-600" />
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-2">Email Support</h3>
              <p className="text-navy-600 mb-6">
                Have a question or need help? Send us an email and we&apos;ll get back to you within 24 hours.
              </p>
              <a
                href="mailto:support@remet-app.com"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 text-navy-900 rounded-full font-semibold hover:bg-gray-200 transition-colors"
              >
                support@remet-app.com
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm"
            >
              <div className="w-14 h-14 bg-teal-100 rounded-xl flex items-center justify-center mb-6">
                <Bug className="w-7 h-7 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-2">Report a Bug</h3>
              <p className="text-navy-600 mb-6">
                Found something that&apos;s not working right? Help us improve by reporting the issue.
              </p>
              <a
                href="mailto:bugs@remet-app.com"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 text-navy-900 rounded-full font-semibold hover:bg-gray-200 transition-colors"
              >
                bugs@remet-app.com
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-navy-900 mb-8"
          >
            Frequently Asked Questions
          </motion.h2>

          <div className="divide-y divide-gray-200 border-t border-gray-200">
            {faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* Still Need Help */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gray-50 rounded-3xl p-12 text-center"
          >
            <h2 className="text-2xl font-bold text-navy-900 mb-4">
              Still Need Help?
            </h2>
            <p className="text-navy-600 mb-8">
              Can&apos;t find what you&apos;re looking for? We&apos;re here to help.
            </p>
            <a
              href="mailto:support@remet-app.com"
              className="inline-flex items-center gap-2 px-8 py-4 gradient-bg text-white rounded-full font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-coral-500/30"
            >
              Contact Support
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
