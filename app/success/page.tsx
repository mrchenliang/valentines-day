'use client'

import Image from 'next/image'

export default function SuccessPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 via-rose-100 to-red-100 p-4">
      <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-8 md:p-12 max-w-2xl w-full text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-pink-600 mb-6">
          I knew you would say yes! 💕
        </h1>

        {/* Couple image */}
        <div className="relative w-full max-w-md mx-auto mb-8 aspect-square rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/couple-image-1.JPG"
            alt="Beautiful couple"
            fill
            className="object-cover"
            priority
          />
        </div>

        <p className="text-2xl md:text-3xl text-gray-700 font-semibold mb-4">
          Happy Valentine's Day! 💖
        </p>

        <p className="text-lg text-gray-600 mb-6">
          You make every day special 🌹
        </p>

        <div className="mt-8 pt-6 border-t border-pink-200">
          <p className="text-xl text-gray-700 mb-4">
            Thank you! 💕
          </p>
          <a
            href="sms:7802450708?body=I%20love%20you%20too%2C%20Chen.%20you%20are%20the%20best%20boyfriend"
            className="inline-block bg-gradient-to-r from-pink-500 to-rose-500 text-white px-8 py-3 rounded-full font-semibold text-lg hover:from-pink-600 hover:to-rose-600 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
          >
            Text Me 📱
          </a>
        </div>
      </div>
    </div>
  )
}
