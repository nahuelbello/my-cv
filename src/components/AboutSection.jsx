// About section: a quick intro and value proposition
const AboutSection = () => {
  return (
    <section id="about" className="py-4 rounded-t-xl bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <article className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-10 space-y-6">
          <header>
            <h2 className="text-3xl font-title font-semibold">Who I am and why would you hire me?</h2>
          </header>
          <div className="space-y-6">
            <p>
              The question of the century, right? If you’re reading this, you’re most likely a company looking for a web developer (maybe you’re a bot or someone trying to scam me, but
              don’t worry, you won’t succeed). If you’re a recruiter, after reviewing hundreds of CVs, this one probably feels a bit more original, and you’re likely wondering who I am and
              why you should hire me.
            </p>
            <p>
              Beyond my technical skills (which I’ll detail below), I believe the most important qualities are attitude and the eagerness to constantly learn and improve.
            </p>
            <p>
              I’m a committed and responsible professional focused on practical solutions, never satisfied with the status quo and always seeking to learn new skills. I’m not the typical developer
              who locks themselves in a code bubble. I’m highly sociable and enjoy communicating, collaborating, and sharing ideas to help the entire team grow together.
            </p>
            <p>
              I believe in transparency and constructive feedback, which is why I see myself as a future team leader. Adaptability and flexibility are among my strengths, and I love stepping out of my
              comfort zone to learn new programming languages, tools, or even launch ventures. I’ve built and managed online businesses, including my own e-commerce store, which honed my skills
              in marketing, data analysis, automation, SEO, design, finance, customer relations, and more.
            </p>
            <p>
              In short, I strive to grow and deliver value by combining my passion for technology with the hands-on experience gained from entrepreneurship and solving real-world problems daily.
              Below, you’ll find more details on my technical skills and experience.
            </p>
          </div>
        </article>
      </div>
    </section>
  )
}

export default AboutSection;
