'use client';
import GitHubEmbed from '@/src/components/GitHubEmbed';

const Experience = () => {
  return (
    <section id="experience" className="py-8 md:py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <article className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 md:p-10 space-y-8">
          <h2 className="text-2xl sm:text-3xl font-title font-semibold text-gray-900 dark:text-gray-100">
            Experience
          </h2>

          <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base">
            I’ve worked on various freelance and personal projects, including web apps, Python scripts, automations, data cleaning, and blockchain dApps. My latest personal project, Message Auction, is an
            Ethereum dApp where you can showcase your message while earning ETH rewards.
          </p>

          <figure className="flex justify-center mb-8 md:mb-12">
            <div className="w-full shadow-inner rounded-lg overflow-hidden">
              <iframe
                src="https://messageauction.com/"
                title="Message Auction Embed"
                className="w-full h-64 md:h-[500px] block"
                loading="lazy"
              />
            </div>
            <figcaption className="sr-only">Live preview of Message Auction Ethereum dApp</figcaption>
          </figure>

          <aside className="space-y-4">
            <div className="rounded-lg overflow-y-auto bg-gray-100 dark:bg-gray-800 p-4 md:p-6 max-h-52 sm:max-h-[400px]">
              <GitHubEmbed
                fileUrl="https://github.com/nahuelbello/message_auction/blob/main/index.html"
                maxHeight="400"
              />
            </div>
            <a
              href="https://github.com/nahuelbello/message_auction"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full md:inline-block px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
            >
              View Full Repository
            </a>
          </aside>
        </article>
      </div>
    </section>
  )
}

export default Experience;
