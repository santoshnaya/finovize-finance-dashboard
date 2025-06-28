'use client'

import React, { useState } from 'react'
import { Plus } from 'lucide-react'

interface Card {
  id: string
  bank: string
  number: string
  expiry: string
  balance: string
  type: 'visa' | 'mastercard'
}

const mockCards: Card[] = [
  {
    id: '1',
    bank: 'VISA',
    number: '**** 6759',
    expiry: '02/12/2026',
    balance: '$12,670.00',
    type: 'visa'
  }
]

export default function CardsSection() {
  const [cards, setCards] = useState<Card[]>(mockCards)

  const handleAddCard = () => {
    // Simulate adding a new card
    const newCard: Card = {
      id: Date.now().toString(),
      bank: 'MasterCard',
      number: '**** 4829',
      expiry: '05/15/2027',
      balance: '$8,340.00',
      type: 'mastercard'
    }
    setCards([...cards, newCard])
  }

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-navy">Your Cards</h2>
        <button
          onClick={handleAddCard}
          className="w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center hover:bg-accent/80 transition-colors"
        >
          <Plus size={16} />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {cards.map((card) => (
          <div
            key={card.id}
            className="relative bg-gradient-to-br from-navy to-blue-800 rounded-2xl p-6 text-white hover:scale-105 transition-transform cursor-pointer"
          >
            {/* Card Header */}
            <div className="flex justify-between items-start mb-8">
              <span className="text-lg font-semibold">{card.bank}</span>
              <div className="w-8 h-6 bg-white/20 rounded"></div>
            </div>

            {/* Card Number */}
            <div className="mb-6">
              <p className="text-sm text-white/70 mb-1">Number</p>
              <p className="text-lg font-mono tracking-wider">{card.number}</p>
            </div>

            {/* Card Details */}
            <div className="flex justify-between items-end">
              <div>
                <p className="text-sm text-white/70 mb-1">Expiry Date</p>
                <p className="font-medium">{card.expiry}</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-white/70 mb-1">Balance</p>
                <p className="text-lg font-bold">{card.balance}</p>
              </div>
            </div>
          </div>
        ))}

        {/* Add New Card Button */}
        <button
          onClick={handleAddCard}
          className="min-h-[200px] border-2 border-dashed border-gray-300 rounded-2xl flex flex-col items-center justify-center text-gray-500 hover:border-accent hover:text-accent transition-colors"
        >
          <Plus size={32} className="mb-2" />
          <span className="font-medium">Add New Card</span>
        </button>
      </div>
    </div>
  )
}