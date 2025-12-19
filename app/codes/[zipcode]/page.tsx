'use client'

import { useParams, useRouter } from 'next/navigation'

// Mock data mapping zipcodes to jurisdictions
const zipcodeData: Record<string, {
  location: string
  jurisdiction: string
  county: string
}> = {
  '22701': {
    location: 'Culpeper, VA',
    jurisdiction: 'Culpeper County',
    county: 'Culpeper County'
  },
  '22709': {
    location: 'Brandy Station, VA',
    jurisdiction: 'Culpeper County',
    county: 'Culpeper County'
  },
  '22713': {
    location: 'Elkwood, VA',
    jurisdiction: 'Culpeper County',
    county: 'Culpeper County'
  },
  '22714': {
    location: 'Haywood, VA',
    jurisdiction: 'Culpeper County',
    county: 'Culpeper County'
  },
  '22716': {
    location: 'Jeffersonton, VA',
    jurisdiction: 'Culpeper County',
    county: 'Culpeper County'
  },
  '22720': {
    location: 'Lignum, VA',
    jurisdiction: 'Culpeper County',
    county: 'Culpeper County'
  },
  '22730': {
    location: 'Reva, VA',
    jurisdiction: 'Culpeper County',
    county: 'Culpeper County'
  },
  '22735': {
    location: 'Richardsville, VA',
    jurisdiction: 'Culpeper County',
    county: 'Culpeper County'
  },
  '22737': {
    location: 'Rixeyville, VA',
    jurisdiction: 'Culpeper County',
    county: 'Culpeper County'
  },
  '22741': {
    location: 'Stevensburg, VA',
    jurisdiction: 'Culpeper County',
    county: 'Culpeper County'
  }
}

const buildingCodeSections = [
  {
    id: 'residential',
    title: 'Residential Construction',
    icon: '🏠',
    description: 'New homes, major renovations, structural changes',
    color: 'blue'
  },
  {
    id: 'improvements',
    title: 'Home Improvements',
    icon: '🔨',
    description: 'Additions, decks, porches, interior remodeling',
    color: 'blue'
  },
  {
    id: 'accessory',
    title: 'Accessory Structures',
    icon: '🏗️',
    description: 'Sheds, garages, workshops, ADUs',
    color: 'blue'
  },
  {
    id: 'outdoor',
    title: 'Outdoor & Landscaping',
    icon: '🌳',
    description: 'Fences, retaining walls, pools, patios',
    color: 'blue'
  },
  {
    id: 'electrical',
    title: 'Electrical & Plumbing',
    icon: '⚡',
    description: 'System upgrades, service changes',
    color: 'blue'
  },
  {
    id: 'commercial',
    title: 'Commercial Development',
    icon: '🏢',
    description: 'Business construction and renovations',
    color: 'blue'
  },
  {
    id: 'zoning',
    title: 'Zoning & Land Use',
    icon: '📋',
    description: 'Setbacks, lot coverage, use restrictions',
    color: 'red'
  }
]

export default function BuildingCodesPage() {
  const params = useParams()
  const router = useRouter()
  const zipcode = params.zipcode as string

  const locationData = zipcodeData[zipcode]

  if (!locationData) {
    return (
      <main className="min-h-screen bg-white px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Zipcode Not Found
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Sorry, we don't have data for zipcode {zipcode} yet.
          </p>
          <button
            onClick={() => router.push('/')}
            className="bg-blue-600 text-white font-semibold px-8 py-4 rounded-lg text-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
          >
            Try Another Zipcode
          </button>
        </div>
      </main>
    )
  }

  const getColorClasses = (color: string) => {
    if (color === 'red') {
      return {
        border: 'border-red-500',
        hover: 'hover:border-red-600 hover:shadow-red-100',
        icon: 'text-red-500'
      }
    }
    return {
      border: 'border-blue-500',
      hover: 'hover:border-blue-600 hover:shadow-blue-100',
      icon: 'text-blue-500'
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => router.push('/')}
              className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Change Zipcode
            </button>
            <h1 className="text-2xl font-bold text-gray-900">PropCode</h1>
            <div className="w-32"></div> {/* Spacer for alignment */}
          </div>
        </div>
      </header>

      {/* Location Banner */}
      <section className="bg-white border-b border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Zipcode: {zipcode}
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            {locationData.location}
          </h2>
          <p className="text-xl text-gray-600 mb-2">
            Building Codes & Requirements
          </p>
          <p className="text-lg text-gray-500">
            This area follows <span className="font-semibold text-gray-700">{locationData.jurisdiction} Building Codes</span>
          </p>
        </div>
      </section>

      {/* Building Code Sections */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Explore Building Code Categories
            </h3>
            <p className="text-lg text-gray-600">
              Click on any category to learn more about specific requirements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {buildingCodeSections.map((section) => {
              const colors = getColorClasses(section.color)
              return (
                <button
                  key={section.id}
                  onClick={() => {
                    // TODO: Navigate to detailed page
                    console.log(`Navigate to ${section.id}`)
                  }}
                  className={`bg-white border-2 ${colors.border} rounded-lg p-6 text-left transition-all ${colors.hover} hover:shadow-lg group`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`text-4xl ${colors.icon} group-hover:scale-110 transition-transform`}>
                      {section.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-gray-900 mb-2">
                        {section.title}
                      </h4>
                      <p className="text-gray-600">
                        {section.description}
                      </p>
                      <div className="mt-4 flex items-center gap-2 text-blue-600 font-medium">
                        <span>Learn more</span>
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Resource Links */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Official Resources
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <a
              href="https://web.culpepercounty.gov/building"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border-2 border-blue-500 rounded-lg p-6 hover:border-blue-600 hover:shadow-lg transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="text-3xl">📋</div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">
                    {locationData.jurisdiction} Building Department
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Official website for permits, inspections, and regulations
                  </p>
                </div>
              </div>
            </a>
            <div className="bg-white border-2 border-gray-300 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="text-3xl">📞</div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">
                    Contact Information
                  </h4>
                  <p className="text-gray-600 text-sm">
                    (540) 727-3405<br />
                    Monday - Friday, 8:00 AM - 4:30 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-2">PropCode</h3>
            <p className="text-gray-400 mb-4">
              Helping homeowners understand their property's potential
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
