const Footer = () => {
  return (
    <footer className="bg-primary text-black dark:text-black py-4 dark:prose-invert">
      <div className="container mx-auto text-center text-black dark:text-black">
        <p className="text-black dark:text-black">&copy; {new Date().getFullYear()} Nahuel Bello. All rights reserved.</p>
        <nav aria-label="Footer Social Links">
          <ul className="mt-2 flex justify-center space-x-6">
            <li>
              <a
                href="https://github.com/nahuelbello"
                target="_blank"
                rel="noopener noreferrer"
              className="hover:underline text-sm text-black dark:text-black"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/in/nahuelbello"
                target="_blank"
                rel="noopener noreferrer"
              className="hover:underline text-sm text-black dark:text-black"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="mailto:contact@nahuelbello.com"
              className="hover:underline text-sm text-black dark:text-black"
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
