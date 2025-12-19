'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Home() {
  const [zipcode, setZipcode] = useState('')
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (zipcode.length === 5 && /^\d+$/.test(zipcode)) {
      router.push(`/codes/${zipcode}`)
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center px-4">
      <div className="max-w-2xl w-full">
        <div className="text-center mb-12">
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-4">
            PropCode
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 mb-2">
            Know What You Can Build
          </p>
          <p className="text-lg text-gray-500">
            Enter your zipcode to discover local building codes and requirements
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="bg-white rounded-2xl shadow-2xl p-8 sm:p-12 border border-gray-200">
            <label htmlFor="zipcode" className="block text-lg font-medium text-gray-700 mb-4 text-center">
              Enter Your Zipcode
            </label>
            <input
              type="text"
              id="zipcode"
              value={zipcode}
              onChange={(e) => setZipcode(e.target.value)}
              maxLength={5}
              pattern="\d{5}"
              required
              className="w-full px-6 py-6 text-center text-3xl font-semibold border-2 border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-gray-900"
              placeholder="22701"
            />
            <button
              type="submit"
              className="w-full mt-6 bg-blue-600 text-white font-semibold px-8 py-5 rounded-xl text-xl hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={zipcode.length !== 5}
            >
              View Building Codes
            </button>
          </div>
        </form>

        <div className="mt-8 text-center">
          <a
            href="/landing"
            className="text-blue-600 hover:text-blue-700 font-medium text-sm"
          >
            Learn more about PropCode →
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-0 left-0 right-0 py-6">
        <div className="text-center">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} PropCode. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  )
}
