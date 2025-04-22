'use client';
import GitHubEmbed from '@/src/components/GitHubEmbed';

const Experience = () => {
  return (
    <section id="experience" className="py-8 md:py-16 bg-gray-50 dark:bg-gray-800 dark:bg-opacity-80">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <article className="bg-white dark:bg-gray-800 dark:bg-opacity-80 rounded-xl shadow-lg p-6 md:p-10 space-y-8">
          <h2 className="text-2xl sm:text-3xl font-title font-semibold text-gray-900 dark:text-gray-100">
            Experience
          </h2>

          <div className="text-gray-700 dark:text-gray-300 text-sm md:text-base space-y-4">
            <p>
              I’ve worked on a variety of freelance and personal projects—web applications, Python scripts, automations, data cleaning tools, and blockchain dApps.
            </p>
            <p>
              This site (nahuelbello.com) itself was built with Next.js and React, styled using Tailwind CSS with full dark‑mode support and optimized for performance through incremental static 
              regeneration. During development, I tackled several technical challenges: crafting a fully responsive design without bloating the CSS codebase, resolving hydration mismatches between 
              server‑ and client‑side rendering for dark mode, securely embedding GitHub code snippets in a scrollable container, and lazy‑loading the Message Auction iframe to improve initial 
              load times. These were addressed by customizing Tailwind’s configuration for consistent theming, leveraging Next.js’s dynamic imports and Image component for asset optimization, 
              and isolating third‑party embeds to prevent layout shifts. The result is a fast, accessible, and maintainable site.
            </p>
            <p>
              Below you can see my last personal project, made 100% by myself (messageauction.com), followed by its main HTML code and then a link to the full GitHub repository. Message Auction,
              is an Ethereum dApp where users can showcase custom messages while earning ETH rewards in real time:
            </p>
          </div>

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
