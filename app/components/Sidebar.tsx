'use client'

import React, { useState } from 'react'
import { 
  Home, 
  ArrowLeftRight, 
  Grid3x3, 
  CreditCard, 
  TrendingUp, 
  User 
} from 'lucide-react'

interface SidebarItem {
  id: string
  label: string
  icon: React.ReactNode
}

const sidebarItems: SidebarItem[] = [
  { id: 'dashboard', label: 'Dashboard', icon: <Home size={20} /> },
  { id: 'exchange', label: 'Exchange', icon: <ArrowLeftRight size={20} /> },
  { id: 'services', label: 'Services', icon: <Grid3x3 size={20} /> },
  { id: 'cards', label: 'Cards', icon: <CreditCard size={20} /> },
  { id: 'deposits', label: 'Deposits', icon: <TrendingUp size={20} /> },
  { id: 'account', label: 'Account', icon: <User size={20} /> },
]

export default function Sidebar() {
  const [activeItem, setActiveItem] = useState('dashboard')

  return (
    <div className="w-64 h-screen bg-white border-r border-gray-200 flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-navy rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">F</span>
          </div>
          <span className="text-xl font-bold text-navy">Finovize</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {sidebarItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => setActiveItem(item.id)}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                  activeItem === item.id
                    ? 'bg-navy text-white shadow-lg'
                    : 'text-gray-600 hover:bg-lavender hover:text-navy'
                }`}
              >
                {item.icon}
                <span className="font-medium">{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* User Profile */}
      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
            <User size={20} className="text-gray-600" />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-900">Guy Hawkins</p>
            <p className="text-xs text-gray-500">Free Account</p>
          </div>
        </div>
      </div>
    </div>
  )
}