import NotificationCustomization from '@/components/ui/notification-customization'
import VoiceNotification from '@/components/ui/voice-notification'
import { AnalyticsTracker } from '@/components/ui/analytics-tracker'

export default function Home() {
  return (
    <>
      <AnalyticsTracker />
      <section
        className="mb-10 flex flex-col items-center gap-8"
        aria-labelledby="welcome-heading"
      >
        <h1
          id="welcome-heading"
          className="text-3xl sm:text-4xl font-bold text-center bg-gradient-to-r from-blue-700 via-purple-600 to-pink-500 bg-clip-text text-transparent"
        >
          Welcome to the MVP App!
        </h1>
        <p className="text-lg text-gray-700 max-w-xl text-center">
          This platform offers a fully accessible, multilingual experience with advanced notification, analytics, and voice features.
        </p>
      </section>
      <section
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
        aria-label="Customization & Notifications"
      >
        <div className="bg-white/70 rounded-xl shadow-lg p-6 flex flex-col gap-4">
          <h2 className="font-semibold text-xl text-blue-700 mb-2">
            Notification Preferences
          </h2>
          <NotificationCustomization />
        </div>
        <div className="bg-white/70 rounded-xl shadow-lg p-6 flex flex-col gap-4">
          <h2 className="font-semibold text-xl text-purple-700 mb-2">
            Voice Notification
          </h2>
          <VoiceNotification />
        </div>
      </section>
    </>
  )
}
