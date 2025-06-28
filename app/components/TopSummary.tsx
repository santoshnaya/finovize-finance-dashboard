'use client'

import React from 'react'

export default function TopSummary() {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Total Balance */}
        <div className="md:col-span-2">
          <h2 className="text-lg font-medium text-gray-600 mb-2">Total Balance</h2>
          <p className="text-4xl font-bold text-navy mb-1">$410.00</p>
          <div className="flex items-center space-x-4 text-sm">
            <span className="text-gray-500">
              Income: <span className="font-semibold text-accent">$2,400</span>
            </span>
            <span className="text-gray-500">
              Expenses: <span className="font-semibold text-red-500">$1,990</span>
            </span>
          </div>
        </div>

        {/* Credit Limit */}
        <div>
          <h3 className="text-sm font-medium text-gray-600 mb-2">Credit Limit</h3>
          <p className="text-2xl font-bold text-navy">$12,000</p>
          <p className="text-sm text-gray-500">Available: $9,600</p>
        </div>

        {/* Savings */}
        <div>
          <h3 className="text-sm font-medium text-gray-600 mb-2">Monthly Savings</h3>
          <p className="text-2xl font-bold text-accent">$410</p>
          <p className="text-sm text-gray-500">+12% from last month</p>
        </div>
      </div>
    </div>
  )
}