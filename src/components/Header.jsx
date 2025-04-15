import Link from 'next/link'

const Header = () => {
  return (
    <header className="bg-secondary text-primary shadow">
      <nav className="container mx-auto px-4 py-4">
        <ul className="flex justify-center space-x-6">
          <li><Link href="home" className="hover:text-white">Home</Link></li>
          <li><Link href="about" className="hover:text-white">About</Link></li>
          <li><Link href="projects" className="hover:text-white">Projects</Link></li>
          <li><Link href="skills" className="hover:text-white">Skills</Link></li>
          <li><Link href="experience" className="hover:text-white">Experience & Education</Link></li>
          <li><Link href="contact" className="hover:text-white">Contact</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;

