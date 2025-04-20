'use client'

import dynamic from 'next/dynamic';
const LinkedInBadge = dynamic(
  () => import('@/src/components/LinkedInBadge'),
  { ssr: false }
);

const Skills = () => (
  <section id="skills" className="py-20">
    {/* Card wrapper */}
    <div className="bg-white rounded-xl shadow-lg p-8 md:grid md:grid-cols-3 gap-10 items-start">
    {/* Badge column */}
    <div className="flex justify-center md:justify-start">
      {/* Escala ligera en móvil, un poco mayor en desktop */}
      <div className="transform scale-[1.05] md:scale-[1.1] origin-top-left">
        <LinkedInBadge />
      </div>
    </div>

      {/* Content column */}
      <div className="md:col-span-2 space-y-5">
        <h2 className="text-3xl font-title font-semibold">Skills</h2>

        <p>
          Solid understanding of languages like HTML, CSS, JavaScript and Python
          and control‑version tools like Git and GitHub.
        </p>
        <p>
          Basic understanding of libraries, frameworks, languages and tools such
          as React, Next.js, Tailwind, PostCSS, Shopify, Ethers and Solidity,
          among others.
        </p>
        <p>
          Además, como herramientas adicionales aunque más básicas, tengo
          experiencia trabajando con la terminal en entornos como Linux y macOS,
          servidores como Hostinger o VPS como Oracle y Cloudflare, y creando
          diseños de UI/UX con Figma y Canva.
        </p>
      </div>
    </div>
  </section>
);

export default Skills;