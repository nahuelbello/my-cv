import Link from 'next/link'
import Script from 'next/script'

const Contact = () => {
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
        <Script
          src="https://cdn.botpress.cloud/webchat/v0/inject.js"
          data-bot-id={process.env.NEXT_PUBLIC_BOTPRESS_ID}
          data-host-url="https://cdn.botpress.cloud/webchat/v0"
          async
        />
    </section>
  )
}

export default Contact;
