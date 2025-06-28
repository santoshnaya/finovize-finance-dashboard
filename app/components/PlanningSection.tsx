'use client'

import React from 'react'
import { ArrowRight, Eye } from 'lucide-react'

interface Goal {
  id: string
  title: string
  current: number
  target: number
  progress: number
}

const goals: Goal[] = [
  {
    id: '1',
    title: 'Buy a car',
    current: 2400,
    target: 7000,
    progress: 34
  },
  {
    id: '2',
    title: 'College',
    current: 1150,
    target: 10000,
    progress: 11
  }
]

export default function PlanningSection() {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-navy">Planning</h2>
        <button className="flex items-center space-x-1 text-accent hover:text-accent/80 transition-colors">
          <Eye size={16} />
          <span className="text-sm font-medium">View All</span>
        </button>
      </div>

      <div className="space-y-6">
        {goals.map((goal) => (
          <div key={goal.id} className="group cursor-pointer">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-medium text-navy group-hover:text-accent transition-colors">
                {goal.title}
              </h3>
              <button className="text-gray-400 hover:text-accent transition-colors">
                <ArrowRight size={16} />
              </button>
            </div>
            
            <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
              <span>${goal.current.toLocaleString()} / ${goal.target.toLocaleString()}</span>
              <span>{goal.progress}%</span>
            </div>
            
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-accent h-2 rounded-full transition-all duration-300"
                style={{ width: `${goal.progress}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}