'use client';
import { useState } from 'react'

const LANGUAGES = [
  { code: 'en', label: 'English' },
  { code: 'es', label: 'Español' },
  { code: 'fr', label: 'Français' },
  { code: 'de', label: 'Deutsch' },
  { code: 'zh', label: '中文' },
]

export default function LanguageSelector() {
  const [lang, setLang] = useState(
    typeof window !== 'undefined'
      ? localStorage.getItem('site_lang') || 'en'
      : 'en'
  )

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLang = e.target.value
    setLang(selectedLang)
    if (typeof window !== 'undefined') {
      localStorage.setItem('site_lang', selectedLang)
      document.documentElement.lang = selectedLang
    }
    // You might also want to trigger i18n logic here
  }

  return (
    <label className="flex items-center gap-2 text-white font-medium" aria-label="Select language">
      <span className="sr-only">Language</span>
      <svg width={20} height={20} fill="currentColor" aria-hidden="true" className="text-white">
        <path d="M10 2a8 8 0 100 16A8 8 0 0010 2zm3.93 4.62A6.03 6.03 0 0116 10h-2.06A10.4 10.4 0 0013.93 6.62zM10 4c.73 0 1.44.1 2.12.28A11.85 11.85 0 0010 9.5a11.85 11.85 0 00-2.12-5.22A6.01 6.01 0 0110 4zm-3.93 2.62A10.4 10.4 0 008.06 10H6a6.03 6.03 0 012.07-3.38zM4 10c0-.67.07-1.32.19-1.94A13.06 13.06 0 009 15.7V12.5c0-.82.67-1.5 1.5-1.5s1.5.68 1.5 1.5v3.2A13.06 13.06 0 0015.81 8.06c.12.62.19 1.27.19 1.94s-.07 1.32-.19 1.94A13.06 13.06 0 0011 4.3V7.5c0 .82-.67 1.5-1.5 1.5S8 8.32 8 7.5V4.3A13.06 13.06 0 004.19 12.94C4.07 12.32 4 11.67 4 11z" />
      </svg>
      <select
        value={lang}
        onChange={handleChange}
        className="bg-white text-gray-900 rounded px-2 py-1 focus:ring-2 focus:ring-blue-400 focus:outline-none"
        aria-label="Language selector"
      >
        {LANGUAGES.map((lng) => (
          <option key={lng.code} value={lng.code}>
            {lng.label}
          </option>
        ))}
      </select>
    </label>
  )
}
