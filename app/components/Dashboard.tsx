'use client'

import React from 'react'
import Sidebar from './Sidebar'
import TopSummary from './TopSummary'
import CardsSection from './CardsSection'
import PlanningSection from './PlanningSection'
import InsightsPanel from './InsightsPanel'
import WelcomeModal from './WelcomeModal'

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-lavender flex">
      {/* Sidebar */}
      <Sidebar />
      
      {/* Main Content */}
      <div className="flex-1 flex">
        {/* Left Content Area */}
        <div className="flex-1 p-6 space-y-6">
          {/* Top Summary */}
          <TopSummary />
          
          {/* Cards Section */}
          <CardsSection />
          
          {/* Planning Section */}
          <PlanningSection />
        </div>
        
        {/* Right Insights Panel */}
        <InsightsPanel />
      </div>
      
      {/* Welcome Modal */}
      <WelcomeModal />
    </div>
  )
}