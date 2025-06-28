'use client'

import React, { useState } from 'react'
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts'

interface Transaction {
  id: string
  merchant: string
  logo: string
  date: string
  card: string
  category: string
  amount: number
}

const chartData = [
  { name: 'Health', value: 45 },
  { name: 'Traveling', value: 32 },
  { name: 'Food', value: 63 },
  { name: 'Health', value: 45 },
]

const transactions: Transaction[] = [
  {
    id: '1',
    merchant: 'KFC',
    logo: '🍗',
    date: '21 Apr, 09:00am',
    card: 'VISA',
    category: 'Food',
    amount: -40.00
  },
  {
    id: '2',
    merchant: 'McDonalds',
    logo: '🍟',
    date: '21 Apr, 09:00am',
    card: 'MasterCard',
    category: 'Food',
    amount: -32.00
  },
  {
    id: '3',
    merchant: 'Dropbox',
    logo: '📦',
    date: '21 Apr, 09:00am',
    card: 'MasterCard',
    category: 'Subscription',
    amount: -25.00
  }
]

const tabs = ['Today', 'Week', 'Month']

export default function InsightsPanel() {
  const [activeTab, setActiveTab] = useState('Today')

  return (
    <div className="w-80 h-screen bg-white border-l border-gray-200 flex flex-col">
      {/* Header with Tabs */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex space-x-1 bg-gray-100 rounded-lg p-1">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-2 px-3 text-sm font-medium rounded-md transition-all duration-200 ${
                activeTab === tab
                  ? 'bg-white text-navy shadow-sm'
                  : 'text-gray-600 hover:text-navy'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Balance Section */}
      <div className="p-6 border-b border-gray-200">
        <div className="text-center">
          <p className="text-3xl font-bold text-navy mb-2">$410.00</p>
          <div className="inline-flex items-center bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium">
            Cashback +$12.00
          </div>
        </div>
      </div>

      {/* Chart Section */}
      <div className="p-6 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-navy mb-4">Spending Categories</h3>
        <div className="h-40">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData}>
              <XAxis 
                dataKey="name" 
                axisLine={false}
                tickLine={false}
                fontSize={12}
                tick={{ fill: '#6b7280' }}
              />
              <YAxis hide />
              <Bar 
                dataKey="value" 
                fill="#00c48c" 
                radius={[4, 4, 0, 0]}
                barSize={40}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
        
        {/* Category Legend */}
        <div className="grid grid-cols-2 gap-2 mt-4">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-teal-500 rounded-full"></div>
            <span className="text-sm text-gray-600">$45.00 Health</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <span className="text-sm text-gray-600">$32.00 Traveling</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
            <span className="text-sm text-gray-600">$63.00 Food</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="text-sm text-gray-600">$45.00 Health</span>
          </div>
        </div>
      </div>

      {/* Payment History */}
      <div className="flex-1 p-6">
        <h3 className="text-lg font-semibold text-navy mb-4">Payment History</h3>
        <div className="space-y-4">
          {transactions.map((transaction) => (
            <div key={transaction.id} className="flex items-center justify-between hover:bg-gray-50 p-2 rounded-lg transition-colors">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-lg">
                  {transaction.logo}
                </div>
                <div>
                  <p className="font-medium text-gray-900">{transaction.merchant}</p>
                  <p className="text-sm text-gray-500">{transaction.date}</p>
                </div>
              </div>
              
              <div className="text-right">
                <div className="flex items-center space-x-2 mb-1">
                  <span className="text-xs text-gray-400">{transaction.card}</span>
                  <span className="text-xs bg-gray-100 px-2 py-1 rounded-full text-gray-600">
                    {transaction.category}
                  </span>
                </div>
                <p className="font-semibold text-gray-900">
                  ${Math.abs(transaction.amount).toFixed(2)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Test Mode Badge */}
      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center justify-center space-x-2 bg-blue-50 border border-blue-200 rounded-lg p-2">
          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
          <span className="text-sm font-medium text-blue-700">Test Mode</span>
          <span className="text-sm text-blue-600">0</span>
        </div>
      </div>
    </div>
  )
}