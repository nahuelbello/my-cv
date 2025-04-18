const Education = () => {
  return (
    <section id="education" className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 flex flex-col md:flex-row items-center gap-8">
            {/* Logo */}
            <div className="flex-shrink-0">
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
            </div>
            {/* Text content */}
            <div className="space-y-4">
              <h2 className="text-3xl font-title font-semibold">Education</h2>
              <p>
                La mayoría de mi formación en desarrollo web la he adquirido de manera autodidacta, a base de prueba y error, y de la experiencia adquirida en proyectos personales y freelance. También me gusta mucho ver YouTube o trabajar con IA para resolver problemas puntuales e ir aprendiendo sobre la marcha.
              </p>
              <p>
                Actualmente estoy cursando un máster de desarrollo web full‑stack en la academia Conquer Blocks, considerada la mejor academia de desarrollo de software de habla hispana. Puedes visitar su web{' '}
                <a
                  href="https://conquerblocks.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  aquí
                </a>.
              </p>
            </div>
          </div>
      </div>
    </section>
  )
}

export default Education;
