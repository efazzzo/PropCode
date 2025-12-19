'use client'

import { useState } from 'react'

export default function Home() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Add email submission logic
    setIsSubmitted(true)
    setEmail('')
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              Know What You Can Build
              <span className="block text-blue-600 mt-2">Before You Buy</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 mb-6 max-w-3xl mx-auto">
              Discover your property's true potential in Culpeper, VA.
              Understand zoning, setbacks, and building restrictions before you invest.
            </p>
            <a
              href="#waitlist"
              className="inline-block bg-blue-600 text-white font-semibold px-8 py-4 rounded-lg text-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
            >
              Join the Waitlist
            </a>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-10 sm:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center">
            The Problem
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-red-50 border-l-4 border-red-500 p-5 rounded-r-lg">
              <h3 className="font-semibold text-gray-900 mb-2">
                Buying land without knowing what you can build is risky
              </h3>
              <p className="text-gray-700 text-sm">
                Many homeowners discover too late that their dream addition, ADU, or workshop
                violates setback requirements or zoning restrictions.
              </p>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-5 rounded-r-lg">
              <h3 className="font-semibold text-gray-900 mb-2">
                Navigating county regulations is overwhelming
              </h3>
              <p className="text-gray-700 text-sm">
                Zoning codes, setback rules, and building restrictions are buried in complex
                documents that are difficult to understand without professional help.
              </p>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-5 rounded-r-lg">
              <h3 className="font-semibold text-gray-900 mb-2">
                Hiring professionals is expensive
              </h3>
              <p className="text-gray-700 text-sm">
                Getting a survey or consulting with a land use attorney can cost thousands,
                even before you know if the property meets your needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-10 sm:py-12 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 text-center">
              The Solution
            </h2>
            <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
              <p className="text-lg text-gray-700 text-center">
                PropCode gives you instant clarity on what you can build on any property
                in Culpeper, VA — before you commit.
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-white border-l-4 border-green-500 p-5 rounded-r-lg shadow-md">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-green-500 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Instant Property Reports
                    </h3>
                    <p className="text-gray-700 text-sm">
                      Get a comprehensive report showing zoning, setbacks, and building restrictions
                      for any Culpeper property in minutes.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white border-l-4 border-green-500 p-5 rounded-r-lg shadow-md">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-green-500 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Clear, Visual Breakdowns
                    </h3>
                    <p className="text-gray-700 text-sm">
                      See your buildable area mapped out visually, with setback lines and restrictions
                      clearly marked. No legal jargon required.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white border-l-4 border-green-500 p-5 rounded-r-lg shadow-md">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-green-500 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Make Informed Decisions
                    </h3>
                    <p className="text-gray-700 text-sm">
                      Know exactly what you can build before making an offer, scheduling a showing,
                      or spending money on professional consultations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Email Capture Section */}
      <section id="waitlist" className="py-10 sm:py-12 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-xl p-6 sm:p-8 border border-gray-200">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 text-center">
              Join the Waitlist
            </h2>
            <p className="text-lg text-gray-600 mb-6 text-center">
              Be the first to know when PropCode launches. Get early access and exclusive pricing.
            </p>

            {isSubmitted ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                <svg className="h-12 w-12 text-green-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  You're on the list!
                </h3>
                <p className="text-gray-700">
                  We'll be in touch soon with updates on our launch.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors text-gray-900"
                    placeholder="your@email.com"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white font-semibold px-8 py-4 rounded-lg text-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
                >
                  Get Early Access
                </button>
                <p className="text-sm text-gray-500 text-center">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-2">PropCode</h3>
            <p className="text-gray-400 mb-3 text-sm">
              Helping Culpeper, VA homeowners understand their property's potential
            </p>
            <p className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} PropCode. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}
