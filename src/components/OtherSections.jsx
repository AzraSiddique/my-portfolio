// OtherSections.js - About, Skills, Certifications, Contact
import React, { useState } from 'react';
import { Code, Palette, Award, Mail, Phone, Linkedin, Github, ArrowRight, ExternalLink } from 'lucide-react';
import { skills, certifications } from './projectsData';

// About Section
export function AboutSection({ visibleSections }) {
  return (
    <section id="about" className={`py-32 px-6 relative transition-all duration-1000 ${
      visibleSections.about ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
    }`}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl sm:text-6xl font-bold mb-20 text-center">
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">About Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="group relative p-8 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl border border-white/10 hover:border-blue-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/5 group-hover:to-purple-500/5 rounded-3xl transition-all duration-500" />
            <Code className="w-16 h-16 text-blue-400 mb-6 relative z-10 group-hover:scale-110 transition-transform" />
            <h3 className="text-3xl font-bold mb-4 relative z-10">Full-Stack Development</h3>
            <p className="text-gray-400 leading-relaxed relative z-10">
              Experienced in building backend-driven applications with Node.js and Express.js, 
              creating dynamic frontend interfaces using React.js, and implementing RESTful APIs 
              with persistent data storage.
            </p>
          </div>

          <div className="group relative p-8 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-3xl border border-white/10 hover:border-purple-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/5 group-hover:to-pink-500/5 rounded-3xl transition-all duration-500" />
            <Palette className="w-16 h-16 text-purple-400 mb-6 relative z-10 group-hover:scale-110 transition-transform" />
            <h3 className="text-3xl font-bold mb-4 relative z-10">UX Design</h3>
            <p className="text-gray-400 leading-relaxed relative z-10">
              Google UX Design certified with expertise in user research, wireframing, prototyping, 
              and usability testing. Focused on creating intuitive, user-centered experiences 
              that solve real problems and drive measurable outcomes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// Skills Section
export function SkillsSection({ visibleSections }) {
  return (
    <section id="skills" className={`py-32 px-6 relative transition-all duration-1000 ${
      visibleSections.skills ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
    }`}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl sm:text-6xl font-bold mb-20 text-center">
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Technical Skills</span>
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="group p-8 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-3xl border border-white/10 hover:border-blue-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20">
            <h3 className="text-xl font-bold mb-6 text-blue-400">Backend</h3>
            <div className="flex flex-wrap gap-2">
              {skills.backend.map((skill, i) => (
                <span key={i} className="px-4 py-2 bg-white/10 rounded-lg text-sm border border-white/20 hover:bg-white/20 hover:border-blue-400/50 transition-all cursor-default">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="group p-8 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-3xl border border-white/10 hover:border-purple-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
            <h3 className="text-xl font-bold mb-6 text-purple-400">Frontend</h3>
            <div className="flex flex-wrap gap-2">
              {skills.frontend.map((skill, i) => (
                <span key={i} className="px-4 py-2 bg-white/10 rounded-lg text-sm border border-white/20 hover:bg-white/20 hover:border-purple-400/50 transition-all cursor-default">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="group p-8 bg-gradient-to-br from-pink-500/10 to-rose-500/10 rounded-3xl border border-white/10 hover:border-pink-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/20">
            <h3 className="text-xl font-bold mb-6 text-pink-400">UX Design</h3>
            <div className="flex flex-wrap gap-2">
              {skills.ux.map((skill, i) => (
                <span key={i} className="px-4 py-2 bg-white/10 rounded-lg text-sm border border-white/20 hover:bg-white/20 hover:border-pink-400/50 transition-all cursor-default">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="group p-8 bg-gradient-to-br from-green-500/10 to-teal-500/10 rounded-3xl border border-white/10 hover:border-green-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/20">
            <h3 className="text-xl font-bold mb-6 text-green-400">Database</h3>
            <div className="flex flex-wrap gap-2">
              {skills.database.map((skill, i) => (
                <span key={i} className="px-4 py-2 bg-white/10 rounded-lg text-sm border border-white/20 hover:bg-white/20 hover:border-green-400/50 transition-all cursor-default">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="group p-8 bg-gradient-to-br from-orange-500/10 to-amber-500/10 rounded-3xl border border-white/10 hover:border-orange-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/20">
            <h3 className="text-xl font-bold mb-6 text-orange-400">Tools</h3>
            <div className="flex flex-wrap gap-2">
              {skills.tools.map((skill, i) => (
                <span key={i} className="px-4 py-2 bg-white/10 rounded-lg text-sm border border-white/20 hover:bg-white/20 hover:border-orange-400/50 transition-all cursor-default">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Certifications Section
export function CertificationsSection({ visibleSections }) {
  const [showAll, setShowAll] = useState(false);
  const displayed = showAll ? certifications : certifications.slice(0, 6);

  return (
    <section id="certifications" className={`py-32 px-6 transition-all duration-1000 ${
      visibleSections.certifications ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
    }`}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl sm:text-6xl font-bold mb-20 text-center">
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Certifications</span>
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayed.map((cert, index) => (
            <a
              key={index}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-8 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10 cursor-pointer"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-lg mb-3 leading-snug">{cert.name}</h3>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">{cert.year}</span>
                <span className={`text-xs px-3 py-1 rounded-full font-semibold ${
                  cert.status === 'In Progress' 
                    ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' 
                    : 'bg-green-500/20 text-green-400 border border-green-500/30'
                }`}>
                  {cert.status}
                </span>
              </div>
              <div className="mt-4 text-xs text-blue-400 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <ExternalLink className="w-3 h-3" />
                View Certificate
              </div>
            </a>
          ))}
        </div>

        {certifications.length > 6 && (
          <div className="mt-12 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-8 py-4 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:border-white/20 transition-all duration-300 font-semibold backdrop-blur-sm"
            >
              {showAll ? 'Show Less' : `Show More (${certifications.length - 6} more)`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

// Contact Section
export function ContactSection({ visibleSections }) {
  return (
    <section id="contact" className={`py-32 px-6 relative overflow-hidden transition-all duration-1000 ${
      visibleSections.contact ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
    }`}>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        <h2 className="text-5xl sm:text-6xl font-bold mb-8 text-center">
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Let's Work Together</span>
        </h2>
        <p className="text-xl text-gray-400 mb-16 text-center max-w-2xl mx-auto">
          I'm always interested in hearing about new projects and opportunities.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          <a 
            href="mailto:azrasiddique3483@gmail.com" 
            className="group p-8 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 hover:border-blue-500/50 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20"
          >
            <div className="w-14 h-14 rounded-2xl bg-blue-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Mail className="w-8 h-8 text-blue-400" />
            </div>
            <p className="font-semibold text-lg mb-2">Email</p>
            <p className="text-gray-400 text-sm break-all">azrasiddique3483@gmail.com</p>
          </a>

          <a 
            href="tel:+918500463002" 
            className="group p-8 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 hover:border-purple-500/50 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20"
          >
            <div className="w-14 h-14 rounded-2xl bg-purple-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Phone className="w-8 h-8 text-purple-400" />
            </div>
            <p className="font-semibold text-lg mb-2">Phone</p>
            <p className="text-gray-400 text-sm">+91 8500463002</p>
          </a>

          <a 
            href="https://www.linkedin.com/in/mohammed-azra-ahamed-siddique/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group p-8 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 hover:border-pink-500/50 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/20"
          >
            <div className="w-14 h-14 rounded-2xl bg-pink-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Linkedin className="w-8 h-8 text-pink-400" />
            </div>
            <p className="font-semibold text-lg mb-2">LinkedIn</p>
            <p className="text-gray-400 text-sm">Connect with me</p>
          </a>
        </div>

        <div className="text-center">
          <a 
            href="https://github.com/AzraSiddique" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 font-semibold text-lg group"
          >
            <Github className="w-6 h-6" />
            View GitHub Profile
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}