'use client';
import { useState } from 'react'

type ChannelOption = {
  key: string
  label: string
  description: string
  icon: React.ReactNode
}

const CHANNELS: ChannelOption[] = [
  {
    key: 'email',
    label: 'Email',
    description: 'Get notifications by email.',
    icon: (
      <svg width={20} height={20} fill="none" viewBox="0 0 24 24" aria-hidden="true">
        <rect width={24} height={24} rx={6} fill="#3B82F6" />
        <path d="M5 8.5V16a1.5 1.5 0 001.5 1.5h11a1.5 1.5 0 001.5-1.5V8.5M12 13L5 8.5M19 8.5L12 13" stroke="#fff" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    key: 'sms',
    label: 'SMS',
    description: 'Receive alerts via text message.',
    icon: (
      <svg width={20} height={20} fill="none" viewBox="0 0 24 24" aria-hidden="true">
        <rect width={24} height={24} rx={6} fill="#F59E42" />
        <path d="M8 16h8m-4-8v8m7 4V8a2 2 0 00-2-2H6a2 2 0 00-2 2v8a2 2 0 002 2h4.586a1 1 0 01.707.293l2.414 2.414a1 1 0 001.414 0l2.414-2.414A1 1 0 0118 18H6" stroke="#fff" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    key: 'push',
    label: 'Push',
    description: 'Instant push notifications in-app.',
    icon: (
      <svg width={20} height={20} fill="none" viewBox="0 0 24 24" aria-hidden="true">
        <rect width={24} height={24} rx={6} fill="#8B5CF6" />
        <path d="M12 7v6m0 4h.01M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" stroke="#fff" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    key: 'voice',
    label: 'Voice',
    description: 'Get audio alerts for important updates.',
    icon: (
      <svg width={20} height={20} fill="none" viewBox="0 0 24 24" aria-hidden="true">
        <rect width={24} height={24} rx={6} fill="#10B981" />
        <path d="M12 15a3 3 0 003-3V9a3 3 0 10-6 0v3a3 3 0 003 3zm6 0V9a6 6 0 00-12 0v6m6 4a4 4 0 01-4-4" stroke="#fff" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
]

export default function NotificationCustomization() {
  const [selected, setSelected] = useState<string[]>(['email', 'push'])

  const handleToggle = (key: string) => {
    setSelected((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
    )
  }

  return (
    <form aria-label="Notification Preferences">
      <fieldset className="flex flex-col gap-4" aria-labelledby="notif-pref-legend">
        <legend id="notif-pref-legend" className="sr-only">
          Choose notification channels
        </legend>
        {CHANNELS.map((c) => (
          <label
            key={c.key}
            className={`flex items-center gap-3 rounded-lg px-3 py-2 border transition cursor-pointer ${
              selected.includes(c.key)
                ? 'border-blue-500 shadow bg-blue-50'
                : 'border-gray-200 hover:border-blue-300'
            }`}
            tabIndex={0}
            aria-pressed={selected.includes(c.key)}
          >
            <input
              type="checkbox"
              checked={selected.includes(c.key)}
              onChange={() => handleToggle(c.key)}
              className="sr-only"
              aria-checked={selected.includes(c.key)}
              aria-label={c.label}
            />
            {c.icon}
            <span>
              <span className="font-medium">{c.label}</span>
              <span className="block text-xs text-gray-500">{c.description}</span>
            </span>
            <span
              className={`ml-auto h-5 w-5 rounded-full border-2 flex items-center justify-center ${
                selected.includes(c.key)
                  ? 'border-blue-600 bg-blue-500'
                  : 'border-gray-300 bg-white'
              }`}
              aria-hidden="true"
            >
              {selected.includes(c.key) && (
                <svg width={16} height={16} fill="none" viewBox="0 0 16 16">
                  <path
                    d="M4 8.5l3 3 5-5"
                    stroke="#fff"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </span>
          </label>
        ))}
      </fieldset>
      <button
        type="button"
        className="mt-4 px-4 py-2 bg-blue-700 text-white rounded-lg font-semibold hover:bg-blue-800 transition"
        tabIndex={0}
        aria-label="Save notification preferences"
        onClick={() => alert('Preferences saved (mock)!')}
      >
        Save Preferences
      </button>
    </form>
  )
}
