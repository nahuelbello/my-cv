'use client'
import Script from 'next/script'

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-4xl font-title font-bold text-gray-900 dark:text-gray-100 mb-4">
            Let’s Talk
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Got a project in mind? Send me a quick message or email me at{' '}
            <a
              href="mailto:contact@nahuelbello.com"
              className="text-blue-600 hover:underline"
            >
              contact@nahuelbello.com
            </a>
            .
          </p>
        </div>

        {/* Two–column layout: Email CTA & Chat */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Email Card */}
          <div className="flex-1 bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
              Email Nahuel
            </h3>
            <p className="mb-6 text-gray-700 dark:text-gray-300">
              Prefer email? Click below to open your inbox.
            </p>
            <a
              href="mailto:contact@nahuelbello.com"
              className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded hover:bg-blue-700"
            >
              Send Email
            </a>
          </div>

          {/* Chat Card */}
          <div className="flex-1 bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-lg h-[500px]">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
              Live Chat
            </h3>
            <div id="botpress-webchat" className="h-full rounded" />
          </div>
        </div>
      </div>

      {/* Botpress Webchat Scripts */}
      <Script
        src="https://cdn.botpress.cloud/webchat/v2.3/inject.js"
        strategy="lazyOnload"
      />
      <Script
        src="https://files.bpcontent.cloud/2025/04/18/05/20250418052418-WRCE9I45.js"
        strategy="lazyOnload"
      />
    </section>
  )
}