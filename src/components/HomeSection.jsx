import React from 'react'

// Hero section with profile and intro
const HomeSection = () => {
  return (
    <section
      id="home"
      className="relative bg-sky-200 py-12 sm:py-20"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-8 sm:gap-12">
        
        <figure className="md:w-1/2 w-full flex justify-center">
          <img
            src="/cv-picture.jpg" 
            alt="My Photo"
            className="rounded-lg w-48 sm:w-72 h-auto object-cover shadow-lg transition-transform transform hover:scale-105"
          />
        </figure>

        <div className="w-full bg-white bg-opacity-80 dark:bg-gray-800 dark:bg-opacity-80 p-6 sm:p-10 rounded-xl text-center md:text-left shadow-lg">
          <h1 className="text-4xl md:text-7xl font-bold text-gray-900 dark:text-white">
            Nahuel Bello
          </h1>
          <h2 className="text-xl md:text-3xl text-gray-700 dark:text-gray-300 mt-4">
            Software Developer
          </h2>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mt-4">
          Your business goal is my challenge. Let me help you build front‑end solutions that make a difference.
          </p>
          <nav aria-label="Social Links" className="mt-8">
            <ul className="flex justify-center md:justify-start md:ml-80 items-center gap-4">
              <li>
                <a
                  href="mailto:contact@nahuelbello.com"
                  className="rounded-full bg-white bg-opacity-20 hover:bg-opacity-30 p-2 transition"
                >
                  <img
                    src="mail-logo.png"
                    alt="Email"
                    className="w-8 h-8 object-contain"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/nahuelbello"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-white bg-opacity-20 hover:bg-opacity-30 p-2 transition"
                >
                  <img
                    src="github-logo.png"
                    alt="GitHub Profile"
                    className="w-13 h-11 object-contain"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/nahuelbello/?trk=public-profile-badge-profile-badge-view-profile-cta"
                  className="w-24 h-24 md:w-28 md:h-26 flex items-center justify-center rounded-full bg-white bg-opacity-20 hover:bg-opacity-30 transition"
                >
                  <img
                    src="linkedin-logo.png"
                    alt="LinkedIn Profile"
                    className="w-full h-full object-contain"
                  />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
  )
}

export default HomeSection