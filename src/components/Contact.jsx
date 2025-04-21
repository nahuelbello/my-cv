'use client'
// Contact section: let visitors send an email if they have a project or hiring inquiry

export default function Contact() {
  return (
    <section id="contact" className="py-24 rounded-b-xl bg-white dark:bg-gray-800 dark:bg-opacity-95">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <header className="text-center max-w-xl mx-auto mb-6">
            <h2 className="text-4xl font-title font-bold text-gray-900 dark:text-gray-100 mb-4">
              Let’s Talk
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Got a project in mind or interested in hiring me? Send me an email at{' '}
              <a
                href="mailto:contact@nahuelbello.com"
                className="text-blue-600 hover:underline"
              >
                contact@nahuelbello.com
              </a>
              .
            </p>
          </header>
        </div>
      </div>
    </section>
  )
}