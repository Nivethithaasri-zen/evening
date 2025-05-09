'use client';
import { useEffect } from 'react'

export function AnalyticsTracker() {
  useEffect(() => {
    fetch('/api/analytics', {
      method: 'POST',
      body: JSON.stringify({
        event: 'page_view',
        path: window.location.pathname,
        timestamp: Date.now(),
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
  }, [])

  return null
}
