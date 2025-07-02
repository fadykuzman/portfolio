// src/app/page.js - Main portfolio page
export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">
            Hi, I&apos;m <span className="text-blue-400">Fady Kuzman</span>
          </h1>
          <h2 className="text-2xl text-blue-300 mb-4">Senior Software Engineer & Tech Lead</h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Transforming Complex Business Requirements into Scalable Software Solutions
          </p>
          <p className="text-lg text-gray-400 mb-8">
            8+ years architecting enterprise-grade applications across pharmaceutical, IoT, and financial platforms
          </p>
          <div className="flex justify-center gap-4">
            <a 
              href="#experience" 
              className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg transition-colors"
            >
              View My Experience
            </a>
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
        <h2 className="text-3xl font-bold text-center mb-12">What I Bring to Your Project</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-slate-800 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-blue-400">Technical Leadership & Architecture</h3>
            <ul className="text-gray-300 space-y-2">
              <li>• Build Microservices using Domain-Driven Design</li>
              <li>• Build Microservices using Hexagonal/Clean Architecture</li>
              <li>• Build Event-Sourced systems with CQRS Patterns</li>
              <li>• Lead technical decision-making and mentoring teams</li>
            </ul>
          </div>
          <div className="bg-slate-800 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-blue-400">Full-Stack Development Excellence</h3>
            <ul className="text-gray-300 space-y-2">
              <li>• Modern practices: TDD, Clean Code, Pair Programming</li>
              <li>• DevOps: Kubernetes, Docker, CI/CD using Gitlab or Github</li>
              <li>• Cloud: Ms Azure, AWS</li>
              <li>• Enterprise-grade messaging with RabbitMQ, Kafka</li>
              <li>• Event-Sourcing using Axon</li>
              <li>• Durable Executions and Process automation</li>
            </ul>
          </div>
          <div className="bg-slate-800 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-blue-400">Industry Expertise</h3>
            <ul className="text-gray-300 space-y-2">
              <li>• Enterprise Software for financial institutions</li>
              <li>• Enterprise Software for German government projects</li>
              <li>• IoT & Smart Devices for connected systems</li>
              <li>• ML-powered frameworks for research applications</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="bg-slate-800 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Technical Skills</h2>
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-slate-700 p-4 rounded-lg">
                <h4 className="font-bold text-blue-400 mb-2">Backend</h4>
                <div className="text-sm space-y-1">
                  <div>Java 8-21</div>
                  <div>Kotlin</div>
                  <div>Spring Boot 3.x</div>
                  <div>Python</div>
                </div>
              </div>
			  
              <div className="bg-slate-700 p-4 rounded-lg">
                <h4 className="font-bold text-blue-400 mb-2">Frontend</h4>
                <div className="text-sm space-y-1">
                  <div>Angular</div>
                  <div>ReactJS</div>
                  <div>Next.js</div>
                </div>
              </div>
              <div className="bg-slate-700 p-4 rounded-lg">
                <h4 className="font-bold text-blue-400 mb-2">Databases</h4>
                <div className="text-sm space-y-1">
                  <div>PostgreSQL</div>
                  <div>MySQL</div>
                  <div>Oracle DB</div>
                  <div>Cassandra</div>
                </div>
              </div>
              <div className="bg-slate-700 p-4 rounded-lg">
                <h4 className="font-bold text-blue-400 mb-2">Cloud & DevOps</h4>
                <div className="text-sm space-y-1">
                  <div>Kubernetes</div>
                  <div>Docker</div>
                  <div>GitLab CI/CD</div>
                  <div>AWS S3</div>
                </div>
              </div>
              <div className="bg-slate-700 p-4 rounded-lg">
                <h4 className="font-bold text-blue-400 mb-2">Messaging</h4>
                <div className="text-sm space-y-1">
                  <div>RabbitMQ</div>
                  <div>Kafka</div>
                  <div>Axon Framework</div>
                  <div>Temporal.io</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Recent Highlights</h2>
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="bg-slate-800 rounded-lg p-6 border-l-4 border-blue-400">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
              <div>
                <h3 className="text-xl font-bold text-blue-400">Tech Lead</h3>
                <h4 className="text-lg font-semibold">Specific Objects Technologies</h4>
              </div>
              <span className="text-gray-400 text-sm">2023-2025</span>
            </div>
            <p className="text-gray-300">
              Architected hexagonal architecture with event sourcing, implementing durable executions using Temporal.io for enterprise-scale applications.
            </p>
          </div>
          
          <div className="bg-slate-800 rounded-lg p-6 border-l-4 border-blue-400">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
              <div>
                <h3 className="text-xl font-bold text-blue-400">Senior Software Engineer</h3>
                <h4 className="text-lg font-semibold">MaibornWolff</h4>
              </div>
              <span className="text-gray-400 text-sm">2021-2023</span>
            </div>
            <p className="text-gray-300">
              Delivered Android applications for Deutsche Bahn and government portals with 100% client satisfaction. Specialized in German government digitalization projects.
            </p>
          </div>

          <div className="bg-slate-800 rounded-lg p-6">
            <h3 className="text-lg font-bold text-blue-400 mb-3">Professional Certifications</h3>
            <div className="flex flex-wrap gap-3">
              <span className="bg-blue-600 px-3 py-1 rounded-full text-sm">ISTQB Foundation Level</span>
              <span className="bg-green-600 px-3 py-1 rounded-full text-sm">GMP Training (Pharmaceutical)</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-slate-800 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Tackle Your Next Software Challenge</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Looking for proven expertise in clean architecture and exceptional results? 
            Let&apos;s discuss how I can help transform your complex requirements into scalable solutions.
          </p>
          <div className="flex justify-center gap-6">
            <a 
              href="mailto:your.email@example.com" 
              className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg transition-colors"
            >
              Email Me
            </a>
            <a 
              href="https://github.com/fadykuzman" 
              className="border border-blue-600 hover:bg-blue-600 px-6 py-3 rounded-lg transition-colors"
            >
              GitHub
            </a>
            <a 
              href="https://linkedin.com/in/fadykuzman" 
              className="border border-blue-600 hover:bg-blue-600 px-6 py-3 rounded-lg transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
