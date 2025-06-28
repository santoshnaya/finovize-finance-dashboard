'use client'

import React, { useState } from 'react'
import { X } from 'lucide-react'

export default function WelcomeModal() {
  const [isOpen, setIsOpen] = useState(true)

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 relative">
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X size={20} />
        </button>

        {/* Content */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-navy mb-4">Welcome! Please read me.</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            The page you are on is a static version of the dashboard. To view this dashboard in a gated environment, click the button below!
          </p>
          
          <button className="bg-accent text-white px-6 py-3 rounded-lg font-medium hover:bg-accent/90 transition-colors">
            Signup test
          </button>
        </div>
      </div>
    </div>
  )
}