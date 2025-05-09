'use client';
import { useState, useRef } from 'react'

export default function VoiceNotification() {
  const [message, setMessage] = useState('')
  const [isSpeaking, setIsSpeaking] = useState(false)
  const synthRef = useRef(
    typeof window !== 'undefined' ? window.speechSynthesis : null
  )

  const handleSpeak = () => {
    if (!message.trim() || !synthRef.current) return
    const utter = new window.SpeechSynthesisUtterance(message)
    setIsSpeaking(true)
    utter.onend = () => setIsSpeaking(false)
    synthRef.current.speak(utter)
  }

  return (
    <form
      className="flex flex-col gap-4"
      aria-label="Send voice notification"
      onSubmit={(e) => {
        e.preventDefault()
        handleSpeak()
      }}
    >
      <label className="block font-medium text-gray-700" htmlFor="voice-message">
        Notification Message
      </label>
      <textarea
        id="voice-message"
        className="min-h-[80px] rounded border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-purple-500 focus:outline-none"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message to be spoken aloud"
        aria-required="true"
        aria-label="Voice notification message"
        disabled={isSpeaking}
      />
      <button
        type="submit"
        className={`mt-2 px-4 py-2 font-semibold rounded-xl focus:outline-none transition ${
          isSpeaking
            ? 'bg-gray-400 text-gray-50 cursor-not-allowed'
            : 'bg-purple-700 text-white hover:bg-purple-800'
        }`}
        disabled={isSpeaking || !message.trim()}
        aria-disabled={isSpeaking || !message.trim()}
        aria-label="Speak notification"
      >
        {isSpeaking ? 'Speaking...' : 'Speak'}
      </button>
    </form>
  )
}
