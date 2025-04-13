import Link from 'next/link'

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">Projects</h2>
        <div className="space-y-8">
          <div className="p-6 bg-white dark:bg-gray-900 rounded shadow">
            <h3 className="text-2xl font-semibold mb-2">MessageAuction</h3>
            <p className="mb-4">
              A personal project built on the Ethereum network that combines blockchain technology with interactive web experiences.
            </p>
            <div className="flex space-x-4">
              <Link href="https://messageauction.example.com" target="_blank" rel="noopener noreferrer" className="bg-primary text-white py-2 px-4 rounded hover:bg-secondary transition-colors duration-300">
                View Project
              </Link>
              <Link href="https://github.com/nahuelbello/messageauction" target="_blank" rel="noopener noreferrer" className="bg-primary text-white py-2 px-4 rounded hover:bg-secondary transition-colors duration-300">
                GitHub Repo
              </Link>
            </div>
          </div>
          {/* Se pueden agregar más proyectos en el futuro */}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection;
