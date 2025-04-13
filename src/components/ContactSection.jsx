import Link from 'next/link'

const ContactSection = () => {
  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Contact</h2>
        <p className="mb-4">
          If you'd like to get in touch, feel free to email me at 
          <Link href="mailto:nahuel@example.com" className="text-primary ml-1">nahuel@example.com</Link>
        </p>
        {/* Aquí podrías agregar un formulario de contacto si lo deseas */}
      </div>
    </section>
  )
}

export default ContactSection;
