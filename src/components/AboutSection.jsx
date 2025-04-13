import Link from 'next/link';
import React from 'react'

const AboutSection = () => {
  return (
    <section id="about" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <p className="mb-4">
          I am a self-taught developer with a strong foundation in HTML, CSS, and JavaScript.
          Although I am still honing my skills, I have a working knowledge of React, Vue, and Angular.
          I also possess good Python skills and a basic understanding of Solidity.
        </p>
        <p className="mb-4">
          My experience is mainly practical – from small projects like Python scripts and data cleaning,
          to more ambitious ones such as a blockchain project using Solidity. One of my key projects is 
          <Link href="https://messageauction.example.com" target="_blank" rel="noopener noreferrer" className="text-primary ml-1">
            MessageAuction
          </Link>, a personal project on the Ethereum network.
          You can also check its 
          <Link href="https://github.com/nahuelbello/messageauction" target="_blank" rel="noopener noreferrer" className="text-primary ml-1">
            GitHub repo
          </Link>.
        </p>
        <p className="mb-4">
          I believe in learning by doing and continuously improve through hands-on practice and self-education.
          Currently, I am pursuing a Master's at 
          <Link href="https://www.conquerblocks.com" target="_blank" rel="noopener noreferrer" className="text-primary ml-1">
            Conquer Blocks
          </Link>.
        </p>
        <h3 className="text-2xl font-semibold mt-8 mb-4">Soft Skills</h3>
        <ul className="list-disc list-inside space-y-2">
          <li>Effective Communication</li>
          <li>Team Collaboration</li>
          <li>Problem Solving</li>
          <li>Adaptability</li>
          <li>Creativity</li>
        </ul>
      </div>
    </section>
  )
}

export default AboutSection;
