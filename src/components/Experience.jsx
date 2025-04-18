'use client';
import GitHubEmbed from '@/src/components/GitHubEmbed';

const Experience = () => {
  return (
    <section id="experience" className="py-12 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        {/* Card wrapper */}
        <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-10 space-y-10">
          {/* Heading */}
          <h2 className="text-3xl font-title font-semibold text-gray-900 dark:text-gray-100">
            Experience
          </h2>

          {/* Intro */}
          <p className="text-gray-700 dark:text-gray-300">
            He trabajado en varios proyectos como freelancer y personales, incluyendo web apps, scripts de Python, automatizaciones, limpieza de datos y dApps en blockchain. Como mi ultimo proyecto
            personal Message Auction, that is an Ethereum dApp where you can showcase your message while earning ETH rewards
          </p>

          {/* Featured project iframe */}
          <div className="flex justify-center mb-12">
            <article className="w-full shadow-inner rounded-lg overflow-hidden">
              <iframe
                src="https://messageauction.com/"
                title="Message Auction Embed"
                width="1200"
                height="500"
                className="w-full h-auto md:h-[500px] block"
                loading="lazy"
              />
            </article>
          </div>

          {/* Code snippet and button */}
          <div className="space-y-4">
            <div className="rounded-lg overflow-auto bg-gray-100 dark:bg-gray-800 p-6">
              <GitHubEmbed
                fileUrl="https://github.com/nahuelbello/message_auction/blob/main/index.html"
                maxHeight="400"
              />
            </div>
            <a
              href="https://github.com/nahuelbello/message_auction"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
            >
              Ver repositorio completo
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience;
