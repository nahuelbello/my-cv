'use client'

import dynamic from 'next/dynamic';
const LinkedInBadge = dynamic(
  () => import('@/src/components/LinkedInBadge'),
  { ssr: false }
);

const Skills = () => (
  <section id="skills" className="py-40 bg-gray-50 dark:bg-gray-800 dark:bg-opacity-80">
    <div className="container mx-auto px-4">
      <article className="bg-white rounded-xl shadow-lg p-8 md:grid md:grid-cols-3 gap-10 items-start dark:bg-gray-800 dark:bg-opacity-80">
      <div className="flex justify-center md:justify-start">
        {/* Slight scale effect: 1.05 on mobile, 1.1 on desktop */}
        <div className="transform scale-[0.8] md:scale-[1.1] origin-top-left -mt-4 md:-mt-6 -mx-1 ml-16 md:ml-0">
          <LinkedInBadge />
        </div>
      </div>

      <div className="md:col-span-2 space-y-5">
        <h2 className="text-3xl font-title font-semibold">Skills</h2>

        <p>
          Solid understanding of languages like HTML, CSS, JavaScript and Python
          and control‑version tools like Git and GitHub.
        </p>
        <p>
          Basic understanding of libraries, frameworks, languages and tools such
          as React, Next.js, Tailwind, PostCSS, Shopify, Hardhat, Ethers and Solidity,
          among others.
        </p>
        <p>
          Additionally, I have experience using command-line environments like Linux and macOS,
          working with hosting providers such as Hostinger or VPS services like Oracle and Cloudflare,
          and creating UI/UX designs with tools like Figma and Canva.
        </p>
      </div>
      </article>
    </div>
  </section>
);

export default Skills;