'use client'

import { motion } from 'framer-motion'
import {
  Camera,
  Brain,
  Users,
  MapPin,
  Tags,
  BarChart3,
  Shield,
  Smartphone,
  Sparkles,
  Check,
  ChevronRight,
  Apple,
} from 'lucide-react'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
}

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen hero-gradient overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-coral-400/20 rounded-full blur-3xl animate-float" />
          <div className="absolute top-40 right-20 w-96 h-96 bg-teal-400/20 rounded-full blur-3xl animate-float-delayed" />
          <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-purple-400/15 rounded-full blur-3xl animate-float" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            {/* Left: Content */}
            <motion.div
              initial="initial"
              animate="animate"
              variants={stagger}
              className="text-center lg:text-left"
            >
              <motion.div
                variants={fadeInUp}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur rounded-full shadow-sm border border-gray-100 mb-6"
              >
                <Sparkles className="w-4 h-4 text-coral-500" />
                <span className="text-sm font-medium text-navy-700">
                  Assistive Technology for Face Blindness
                </span>
              </motion.div>

              <motion.h1
                variants={fadeInUp}
                className="text-5xl sm:text-6xl lg:text-7xl font-bold text-navy-900 leading-tight mb-6"
              >
                Remember{' '}
                <span className="gradient-text">Every Face</span>
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="text-xl text-navy-600 mb-8 max-w-xl mx-auto lg:mx-0"
              >
                The assistive app designed for people with prosopagnosia.
                Build lasting memories of the people who matter most with
                science-backed training.
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <a
                  href="#"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-navy-900 text-white rounded-full font-semibold hover:bg-navy-800 transition-all hover:scale-105 shadow-lg shadow-navy-900/25"
                >
                  <Apple className="w-5 h-5" />
                  Download on App Store
                </a>
                <a
                  href="#how-it-works"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-navy-900 rounded-full font-semibold border-2 border-gray-200 hover:border-coral-300 transition-all"
                >
                  See How It Works
                  <ChevronRight className="w-4 h-4" />
                </a>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="mt-10 flex items-center gap-8 justify-center lg:justify-start text-sm text-navy-500"
              >
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-teal-500" />
                  <span>Privacy-First</span>
                </div>
                <div className="flex items-center gap-2">
                  <Smartphone className="w-4 h-4 text-teal-500" />
                  <span>On-Device Processing</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Right: Phone Mockup */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative flex justify-center"
            >
              <div className="relative">
                {/* Phone Frame */}
                <div className="w-[280px] sm:w-[320px] h-[580px] sm:h-[660px] bg-navy-900 rounded-[50px] p-3 shadow-2xl shadow-navy-900/40">
                  <div className="w-full h-full bg-white rounded-[40px] overflow-hidden relative">
                    {/* Notch */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-navy-900 rounded-b-2xl" />

                    {/* App UI Preview */}
                    <div className="pt-12 px-5 pb-6 h-full bg-gradient-to-b from-gray-50 to-white">
                      <h2 className="text-2xl font-bold text-navy-900 mb-6">Your People</h2>

                      {/* People List */}
                      <div className="space-y-3">
                        {[
                          { name: 'Sarah Chen', tag: 'Family', color: 'bg-coral-400' },
                          { name: 'Marcus Johnson', tag: 'Work', color: 'bg-teal-400' },
                          { name: 'Emily Davis', tag: 'Friend', color: 'bg-purple-400' },
                          { name: 'Alex Kim', tag: 'Gym', color: 'bg-amber-400' },
                        ].map((person, i) => (
                          <motion.div
                            key={person.name}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5 + i * 0.1 }}
                            className="flex items-center gap-3 p-3 bg-white rounded-2xl shadow-sm border border-gray-100"
                          >
                            <div className={`w-12 h-12 ${person.color} rounded-full flex items-center justify-center text-white font-semibold text-lg`}>
                              {person.name.split(' ').map(n => n[0]).join('')}
                            </div>
                            <div className="flex-1">
                              <p className="font-semibold text-navy-900">{person.name}</p>
                              <p className="text-sm text-gray-500">{person.tag}</p>
                            </div>
                            <ChevronRight className="w-5 h-5 text-gray-300" />
                          </motion.div>
                        ))}
                      </div>

                      {/* Bottom Nav */}
                      <div className="absolute bottom-6 left-5 right-5">
                        <div className="flex items-center justify-around py-3 bg-navy-900 rounded-2xl">
                          <div className="flex flex-col items-center gap-1">
                            <Users className="w-5 h-5 text-white" />
                            <span className="text-[10px] text-white">People</span>
                          </div>
                          <div className="flex flex-col items-center gap-1">
                            <Brain className="w-5 h-5 text-gray-500" />
                            <span className="text-[10px] text-gray-500">Practice</span>
                          </div>
                          <div className="flex flex-col items-center gap-1">
                            <Camera className="w-5 h-5 text-gray-500" />
                            <span className="text-[10px] text-gray-500">Capture</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating elements */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -top-4 -right-4 sm:-right-8 w-20 h-20 bg-white rounded-2xl shadow-xl flex items-center justify-center"
                >
                  <Brain className="w-10 h-10 text-coral-500" />
                </motion.div>

                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                  className="absolute -bottom-4 -left-4 sm:-left-8 w-16 h-16 bg-white rounded-2xl shadow-xl flex items-center justify-center"
                >
                  <Check className="w-8 h-8 text-teal-500" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-8 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 text-navy-600">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-teal-500" />
              <span className="font-medium">Privacy-First Design</span>
            </div>
            <div className="flex items-center gap-2">
              <Smartphone className="w-5 h-5 text-teal-500" />
              <span className="font-medium">100% On-Device Processing</span>
            </div>
            <div className="flex items-center gap-2">
              <Brain className="w-5 h-5 text-teal-500" />
              <span className="font-medium">Science-Backed Learning</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">
              Built for Your Brain
            </h2>
            <p className="text-xl text-navy-600 max-w-2xl mx-auto">
              Remet understands that face recognition works differently for everyone.
              Every match is confirmed by you, never assumed.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Camera,
                title: 'Capture & Import',
                description: 'Take photos with the in-app camera or import from your library. Face detection happens instantly and privately on your device.',
                color: 'text-coral-500',
                bg: 'bg-coral-50',
              },
              {
                icon: Users,
                title: 'People Profiles',
                description: 'Store names, relationships, birthdays, and personal notes. Remember how you met and what matters to each person.',
                color: 'text-teal-500',
                bg: 'bg-teal-50',
              },
              {
                icon: Brain,
                title: 'Spaced Repetition Training',
                description: 'Scientifically-proven SM-2 algorithm adapts to your learning pace. Practice with faces you struggle with most.',
                color: 'text-purple-500',
                bg: 'bg-purple-50',
              },
              {
                icon: MapPin,
                title: 'Encounter Tracking',
                description: 'Record where and when you met people. Build a timeline of your relationships with location and context.',
                color: 'text-amber-500',
                bg: 'bg-amber-50',
              },
              {
                icon: Tags,
                title: 'Smart Tagging',
                description: 'Organize people with custom tags. Family, work colleagues, book club—find anyone instantly.',
                color: 'text-blue-500',
                bg: 'bg-blue-50',
              },
              {
                icon: BarChart3,
                title: 'Progress Insights',
                description: 'Track your recognition accuracy over time. Celebrate improvements and identify areas to focus on.',
                color: 'text-green-500',
                bg: 'bg-green-50',
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 card-hover"
              >
                <div className={`w-14 h-14 ${feature.bg} rounded-xl flex items-center justify-center mb-6`}>
                  <feature.icon className={`w-7 h-7 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-3">{feature.title}</h3>
                <p className="text-navy-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-navy-600">
              Three simple steps to better face recall
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {[
              {
                step: '1',
                title: 'Add Faces',
                description: 'Import photos from your camera or library. Remet detects faces and suggests matches—but you always confirm who\'s who.',
              },
              {
                step: '2',
                title: 'Build Profiles',
                description: 'Add names, relationships, and personal details. The more context you add, the stronger your memory associations become.',
              },
              {
                step: '3',
                title: 'Practice Daily',
                description: 'Quick quiz sessions adapt to your progress. Faces you find difficult appear more often until they stick.',
              },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="text-center"
              >
                <div className="w-20 h-20 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6 text-3xl font-bold text-white shadow-lg shadow-coral-500/30">
                  {item.step}
                </div>
                <h3 className="text-2xl font-bold text-navy-900 mb-4">{item.title}</h3>
                <p className="text-navy-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy Section */}
      <section className="py-24 bg-navy-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-coral-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Your Privacy, Protected
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Remet processes all face data entirely on your device. No photos or biometric data
              ever leave your phone unless you explicitly enable iCloud sync.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 text-left mb-12">
              {[
                'All face recognition happens on-device using Apple\'s secure frameworks',
                'Zero third-party analytics or advertising',
                'Optional iCloud sync uses your private iCloud account',
                'You own your data—export or delete anytime',
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-200">{item}</span>
                </motion.div>
              ))}
            </div>

            <a
              href="/privacy"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur border border-white/20 rounded-full font-semibold hover:bg-white/20 transition-colors"
            >
              Read Our Privacy Policy
              <ChevronRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">
              Simple Pricing
            </h2>
            <p className="text-xl text-navy-600">
              Start free, upgrade when you&apos;re ready
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Free Plan */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 shadow-sm border border-gray-200"
            >
              <h3 className="text-2xl font-bold text-navy-900 mb-2">Free</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-5xl font-bold text-navy-900">$0</span>
                <span className="text-navy-500">forever</span>
              </div>
              <ul className="space-y-4 mb-8">
                {[
                  'Up to 25 people',
                  '5 custom tags',
                  'Full face recognition',
                  'Spaced repetition training',
                  'Encounter tracking',
                  'On-device storage',
                ].map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-teal-500" />
                    <span className="text-navy-600">{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className="block w-full py-4 text-center border-2 border-gray-200 rounded-full font-semibold text-navy-900 hover:border-coral-300 transition-colors"
              >
                Get Started
              </a>
            </motion.div>

            {/* Premium Plan */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-3xl p-8 shadow-xl border-2 border-coral-500 relative"
            >
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 gradient-bg rounded-full text-white text-sm font-semibold">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold text-navy-900 mb-2">Premium</h3>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-5xl font-bold text-navy-900">$4.99</span>
                <span className="text-navy-500">/month</span>
              </div>
              <p className="text-sm text-navy-500 mb-6">or $39.99/year (save 33%)</p>
              <ul className="space-y-4 mb-8">
                {[
                  'Unlimited people',
                  'Unlimited tags',
                  'Everything in Free',
                  'iCloud sync across devices',
                  'Priority support',
                ].map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-coral-500" />
                    <span className="text-navy-600">{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className="block w-full py-4 text-center gradient-bg rounded-full font-semibold text-white hover:opacity-90 transition-opacity shadow-lg shadow-coral-500/30"
              >
                Start Free Trial
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 gradient-bg relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Start Building Better Memories Today
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              Join thousands of people using Remet to strengthen their face recognition skills.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-navy-900 rounded-full font-semibold hover:bg-gray-100 transition-colors shadow-lg"
            >
              <Apple className="w-5 h-5" />
              Download on the App Store
            </a>
          </motion.div>
        </div>
      </section>
    </>
  )
}
