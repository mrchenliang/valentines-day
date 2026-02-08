'use client'

import { useState } from 'react'
import { createPath } from '@/lib/paths'

const funnyErrorMessages = [
  'Are you sure? Who are you? 🤔',
  'Hmm... that doesn\'t sound right... 😅',
  'Nope! Try again, sweetheart 💕',
  'That\'s not the right answer! 😊',
  'Wrong! But I still love you 💖',
  'Are you testing me? 😏',
  'Nice try, but nope! 💕',
  'That\'s not it! Think harder 🧠',
  'Hmm, I don\'t think so... 😄',
  'Wrong answer! But you\'re still cute 💕',
]

export default function PasswordPage() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (password.trim().toLowerCase() === 'chen') {
      window.location.href = createPath('valentine')
    } else {
      const randomMessage = funnyErrorMessages[Math.floor(Math.random() * funnyErrorMessages.length)]
      setError(randomMessage)
      setPassword('')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 via-rose-100 to-red-100 p-4">
      <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl p-8 md:p-12 max-w-md w-full">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-pink-600 mb-4">
            💕
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2">
            A Special Question
          </h2>
          <p className="text-gray-600 text-lg">
            Who is your favourite boyfriend?
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              type="text"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value)
                setError('')
              }}
              placeholder="Enter your answer..."
              className="w-full px-4 py-3 rounded-lg border-2 border-pink-200 focus:border-pink-400 focus:outline-none text-lg text-center bg-white text-gray-800 placeholder-gray-400"
              autoFocus
            />
            {error && (
              <p className="text-red-500 text-sm mt-2 text-center">{error}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-pink-500 to-rose-500 text-white py-3 rounded-lg font-semibold text-lg hover:from-pink-600 hover:to-rose-600 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  )
}
