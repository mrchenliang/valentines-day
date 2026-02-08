'use client'

import { useState, useRef } from 'react'

export default function ValentinePage() {
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 50, y: 50 })
  const [hasMoved, setHasMoved] = useState(false)
  const [noClickCount, setNoClickCount] = useState(0)
  const [isTouching, setIsTouching] = useState(false)
  const noButtonRef = useRef<HTMLButtonElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  function moveNoButton() {
    if (!hasMoved) {
      setHasMoved(true)
    }

    const container = containerRef.current
    const button = noButtonRef.current
    if (!container || !button) return

    const containerRect = container.getBoundingClientRect()
    const buttonRect = button.getBoundingClientRect()

    const maxX = containerRect.width - buttonRect.width - 20
    const maxY = containerRect.height - buttonRect.height - 20

    const newX = Math.max(10, Math.min(maxX, Math.random() * maxX))
    const newY = Math.max(10, Math.min(maxY, Math.random() * maxY))

    setNoButtonPosition({ x: newX, y: newY })
  }

  function handleNoHover() {
    moveNoButton()
  }

  function handleYesClick() {
    window.location.href = '/valentines-day/success'
  }

  function handleNoClick(e: React.MouseEvent) {
    // Prevent click if it was triggered by touch
    if (isTouching) {
      e.preventDefault()
      e.stopPropagation()
      return
    }
    e.preventDefault()
    setNoClickCount(prev => prev + 1)
    moveNoButton()
  }

  function handleNoTouchStart(e: React.TouchEvent) {
    e.preventDefault()
    e.stopPropagation()
    setIsTouching(true)
    setNoClickCount(prev => prev + 1)
    moveNoButton()

    // Reset touching state after a delay
    setTimeout(() => {
      setIsTouching(false)
    }, 300)
  }

  function handleNoTouchMove(e: React.TouchEvent) {
    e.preventDefault()
    moveNoButton()
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 via-rose-100 to-red-100 p-4">
      <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-8 md:p-12 max-w-2xl w-full text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-pink-600 mb-6">
          Will you be my Valentine? 💕
        </h1>

        {/* Square image */}
        <div className="relative w-full max-w-md mx-auto mb-8 aspect-square rounded-2xl overflow-hidden shadow-lg">
          <img
            src="/valentines-day/couple-image.JPEG"
            alt="Beautiful couple"
            className="w-full h-full object-cover"
          />
        </div>

        <div ref={containerRef} className="relative h-32 md:h-24 mb-8 flex items-center justify-center gap-4 md:gap-6 overflow-visible">
          <button
            onClick={handleYesClick}
            className="bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-full font-bold hover:from-pink-600 hover:to-rose-600 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 z-10"
            style={{
              fontSize: `${1.25 + noClickCount * 0.15}rem`,
              paddingLeft: `${2 + noClickCount * 0.5}rem`,
              paddingRight: `${2 + noClickCount * 0.5}rem`,
              paddingTop: `${1 + noClickCount * 0.25}rem`,
              paddingBottom: `${1 + noClickCount * 0.25}rem`,
              transform: `scale(${1 + noClickCount * 0.1})`,
            }}
          >
            Yes! 💖
          </button>

          <button
            ref={noButtonRef}
            onMouseEnter={handleNoHover}
            onTouchStart={handleNoTouchStart}
            onTouchMove={handleNoTouchMove}
            onClick={handleNoClick}
            className="bg-gray-300 text-gray-700 rounded-full font-bold hover:bg-gray-400 transition-all duration-200 shadow-lg z-20 relative select-none"
            style={{
              position: hasMoved ? 'absolute' : 'relative',
              left: hasMoved ? `${noButtonPosition.x}px` : 'auto',
              top: hasMoved ? `${noButtonPosition.y}px` : 'auto',
              fontSize: `${Math.max(0.75, 1.25 - noClickCount * 0.1)}rem`,
              paddingLeft: `${Math.max(0.5, 2 - noClickCount * 0.3)}rem`,
              paddingRight: `${Math.max(0.5, 2 - noClickCount * 0.3)}rem`,
              paddingTop: `${Math.max(0.25, 1 - noClickCount * 0.15)}rem`,
              paddingBottom: `${Math.max(0.25, 1 - noClickCount * 0.15)}rem`,
              transform: `scale(${Math.max(0.5, 1 - noClickCount * 0.1)})`,
              touchAction: 'none',
              userSelect: 'none',
            }}
          >
            No
          </button>
        </div>

        <p className="text-gray-600 text-lg">
          Choose wisely... 😊
        </p>
      </div>
    </div>
  )
}
