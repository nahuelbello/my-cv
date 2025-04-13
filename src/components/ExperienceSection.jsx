import Link from 'next/link'

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">Experience & Education</h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-semibold">Practical Experience</h3>
            <p>
              I have worked on various small projects, including Python scripting, data cleaning, and blockchain projects like MessageAuction.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold">Education</h3>
            <p>
              I am a continuous self-learner and currently pursuing a Master's at 
              <Link href="https://www.conquerblocks.com" target="_blank" rel="noopener noreferrer" className="text-primary ml-1">
                Conquer Blocks
              </Link>.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection;
