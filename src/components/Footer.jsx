const Footer = () => {
  return (
    <footer className="bg-primary text-black py-4">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Nahuel Bello. All rights reserved.</p>
        <nav aria-label="Footer Social Links">
          <ul className="mt-2 flex justify-center space-x-6">
            <li>
              <a
                href="https://github.com/nahuelbello"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-sm"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/in/nahuelbello"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-sm"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="mailto:contact@nahuelbello.com"
                className="hover:underline text-sm"
              >
                Email
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}

export default Footer;
