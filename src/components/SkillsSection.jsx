import React from 'react'

const SkillsSection = () => {
  return (
    <section id="skills" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Technical Skills</h3>
            <ul className="space-y-2">
              <li>HTML, CSS, JavaScript</li>
              <li>Basic React, Vue, Angular</li>
              <li>Python</li>
              <li>Solidity (basic)</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">Soft Skills</h3>
            <ul className="space-y-2">
              <li>Effective Communication</li>
              <li>Team Collaboration</li>
              <li>Problem Solving</li>
              <li>Adaptability</li>
              <li>Creativity</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SkillsSection;
