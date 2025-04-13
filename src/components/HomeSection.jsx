import Link from 'next/link'

const HomeSection = () => {
  return (
    <section id="home" className="relative bg-hero-pattern bg-cover bg-center py-20">
      <div className="container mx-auto px-4 text-center bg-black bg-opacity-50 p-8 rounded">
        <h1 className="text-4xl md:text-6xl font-bold text-white">Nahuel Bello</h1>
        <p className="text-xl md:text-2xl text-white mt-4">
          Frontend Developer | Passionate about creating interactive web experiences
        </p>
        <div className="mt-8">
          <Link href="contact">
            <h2 className="bg-primary text-white py-2 px-6 rounded hover:bg-secondary transition-colors duration-300">
              Get in Touch
            </h2>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default HomeSection;
