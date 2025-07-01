// src/app/page.js - Main portfolio page
import Image from 'next/image'

export default function Home() {
  const skills = [
    { name: 'Java', icon: '/icons/java.svg' },
    { name: 'Spring Boot', icon: '/icons/spring.svg' },
    { name: 'JavaScript', icon: '/icons/javascript.svg' },
    { name: 'React', icon: '/icons/react.svg' },
    { name: 'Next.js', icon: '/icons/nextjs.svg' },
    { name: 'Node.js', icon: '/icons/nodejs.svg' },
    { name: 'Python', icon: '/icons/python.svg' },
    { name: 'PostgreSQL', icon: '/icons/postgresql.svg' },
    { name: 'Git', icon: '/icons/git.svg' },
    { name: 'Docker', icon: '/icons/docker.svg' },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4">
            Hi, I&apos;m <span className="text-blue-400">Fady</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Full Stack Developer & Problem Solver
          </p>
          <div className="flex justify-center gap-4">
           <a 
              href="#contact" 
              className="border border-blue-600 hover:bg-blue-600 px-6 py-3 rounded-lg transition-colors"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-gray-300 leading-relaxed">
            I&apos;m a passionate software developer with experience in modern web technologies. 
            I love creating efficient, scalable solutions and turning ideas into reality.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="relative bg-slate-800 py-20 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-800 to-slate-900"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        
        <div className="relative container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Skills & Technologies
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Technologies I work with to bring ideas to life
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {skills.map((skill, index) => (
              <div 
                key={skill.name} 
                className="group relative bg-gradient-to-br from-slate-700 to-slate-800 p-6 rounded-2xl border border-slate-600/50 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2"
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-purple-500/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative flex flex-col items-center space-y-3">
                  <div className="p-3 bg-slate-600/50 rounded-xl group-hover:bg-blue-500/10 transition-colors duration-300">
                    <Image
                      src={skill.icon}
                      alt={`${skill.name} logo`}
                      width={40}
                      height={40}
                      className="brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition-all duration-300"
                    />
                  </div>
                  <span className="font-semibold text-sm text-center text-gray-200 group-hover:text-white transition-colors duration-300">
                    {skill.name}
                  </span>
                </div>
                
                {/* Subtle shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Contact Section */}
      <section id="contact" className="bg-slate-800 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Let&apos;s Connect</h2>
          <p className="text-lg text-gray-300 mb-8">
            Interested in working together? Let&apos;s talk!
          </p>
          <div className="flex justify-center gap-6">
            <a href="mailto:fady.kuzman@pm.me" className="text-blue-400 hover:text-blue-300">
              Email
            </a>
            <a href="https://github.com/fadykuzman" className="text-blue-400 hover:text-blue-300">
              GitHub
            </a>
            <a href="https://linkedin.com/in/fadykuzman" className="text-blue-400 hover:text-blue-300">
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
