// Education section: showcase of formal training and academy program
const Education = () => {
  return (
    <section id="education" className="py-20 md:py-32 pb-16 md:pb-48 bg-gray-50 dark:bg-gray-800 dark:bg-opacity-80">
      <div className="container mx-auto px-4">
          <article className="bg-white dark:bg-gray-800 dark:bg-opacity-80 rounded-xl shadow-lg p-8 flex flex-col md:flex-row items-center gap-8">
            {/* Logo */}
            <figure className="flex-shrink-0">
              <a
                href="https://conquerblocks.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <img
                  src="conquerblocks-logo.png"
                  alt="Conquer Blocks Logo"
                  className="w-48 h-auto mx-auto md:mx-0"
                />
              </a>
              <figcaption className="sr-only">Conquer Blocks Logo</figcaption>
            </figure>
            {/* Text content */}
            <div className="leading-relaxed">
              <div className="space-y-4">
                <header className="mb-4">
                  <h2 className="text-3xl font-title font-semibold">Education</h2>
                </header>
                <p>
                  Most of my web development training has been self‑taught, through trial and error and hands‑on experience in personal and freelance projects. I also enjoy watching 
                  YouTube tutorials or leveraging AI to solve specific challenges while learning on the go.
                </p>
                <p>
                  I’m currently enrolled in a full‑stack web development master’s program at Conquer Blocks, regarded as the top Spanish‑speaking software academy. Visit their website{' '}
                  <a
                    href="https://conquerblocks.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    here
                  </a>.
                </p>
              </div>
            </div>
          </article>
      </div>
    </section>
  )
}

export default Education;
