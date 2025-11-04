// ProjectsSection.jsx
import React, { useState } from 'react';
import { Github, ExternalLink, ArrowRight, Star } from 'lucide-react';
import { featuredProjects, allProjects } from './projectsData';

export default function ProjectsSection({ visibleSections, openCaseStudy }) {
  const [activeTab, setActiveTab] = useState('all');

  const filteredProjects = activeTab === 'all' 
    ? [...allProjects.fullstack, ...allProjects.ux]
    : activeTab === 'fullstack' 
    ? allProjects.fullstack 
    : allProjects.ux;

  return (
    <section id="projects" className={`py-32 px-6 transition-all duration-1000 ${
      visibleSections.projects ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
    }`}>
      <div className="max-w-7xl mx-auto">
        {/* Featured Projects Carousel */}
        <div className="mb-32">
          <div className="flex items-center justify-center gap-3 mb-12">
            <Star className="w-8 h-8 text-yellow-400" />
            <h2 className="text-5xl sm:text-6xl font-bold text-center">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Featured Projects</span>
            </h2>
            <Star className="w-8 h-8 text-yellow-400" />
          </div>
          
          <p className="text-xl text-gray-400 text-center mb-16 max-w-3xl mx-auto">
            A curated selection of my best work showcasing both UX design thinking and full-stack development expertise
          </p>

          {/* Infinite Scroll Container */}
          <div className="relative overflow-hidden w-full px-4">
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
            
            <div className="flex gap-6 animate-scroll" style={{ minWidth: 0 }}>
              {[...featuredProjects, ...featuredProjects].map((project, index) => (
                <div
                  key={index}
                  onClick={() => openCaseStudy(project)}
                  className="group relative bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden flex-shrink-0 w-80 cursor-pointer hover:scale-105"
                  style={{ minWidth: 0, maxWidth: '320px' }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                  <div className="p-6 relative z-10 min-w-0">
                    <div className="flex items-center justify-between mb-3 gap-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold border whitespace-nowrap flex-shrink-0 ${
                        project.type === 'UX Design' 
                          ? 'bg-purple-500/20 border-purple-500/50 text-purple-400'
                          : 'bg-blue-500/20 border-blue-500/50 text-blue-400'
                      }`}>
                        {project.type}
                      </span>
                      <span className="text-sm text-gray-500 whitespace-nowrap flex-shrink-0">{project.year}</span>
                    </div>

                    <h3 className="text-xl font-bold mb-3 break-words group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-400 mb-4 text-sm leading-relaxed line-clamp-3 break-words">{project.description}</p>
                    
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {project.tech.slice(0, 3).map((tech, i) => (
                          <span key={i} className="px-2 py-1 bg-white/10 rounded-full text-xs border border-white/20 whitespace-nowrap">
                            {tech}
                          </span>
                        ))}
                        {project.tech.length > 3 && (
                          <span className="px-2 py-1 text-xs text-gray-500 whitespace-nowrap">+{project.tech.length - 3}</span>
                        )}
                      </div>
                    </div>

                    {project.caseStudy && (
                      <div className="pt-4 border-t border-white/10">
                        <span className="text-xs text-blue-400 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all cursor-pointer whitespace-nowrap">
                          View Case Study
                          <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    )}
                    
                    {!project.caseStudy && (
                      <div className="pt-4 border-t border-white/10 flex gap-4 flex-wrap">
                        {project.githubLink && (
                          <a 
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="flex items-center gap-2 text-xs text-gray-400 hover:text-blue-400 transition cursor-pointer whitespace-nowrap"
                          >
                            <Github className="w-4 h-4" />
                            GitHub
                          </a>
                        )}
                        {project.liveLink && (
                          <a 
                            href={project.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="flex items-center gap-2 text-xs text-gray-400 hover:text-blue-400 transition cursor-pointer whitespace-nowrap"
                          >
                            <ExternalLink className="w-4 h-4" />
                            Live Demo
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <style>{`
            @keyframes scroll {
              0% { transform: translateX(0); }
              100% { transform: translateX(calc(-320px * 4 - 1.5rem * 4)); }
            }
            
            .animate-scroll {
              animation: scroll 35s linear infinite;
            }
            
            .animate-scroll:hover {
              animation-play-state: paused;
            }
            
            .line-clamp-3 {
              display: -webkit-box;
              -webkit-line-clamp: 3;
              -webkit-box-orient: vertical;
              overflow: hidden;
            }
          `}</style>
        </div>

        {/* All Projects */}
        <div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">All Projects</span>
          </h2>
          
          <div className="flex justify-center gap-4 mb-16 flex-wrap">
            {[
              { key: 'all', label: 'All Projects' },
              { key: 'fullstack', label: 'Full-Stack' },
              { key: 'ux', label: 'UX Design' }
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-8 py-3 rounded-full transition-all duration-300 font-semibold ${
                  activeTab === tab.key
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg shadow-purple-500/50' 
                    : 'bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                onClick={() => openCaseStudy(project)}
                className={`group relative bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden ${
                  project.caseStudy ? 'cursor-pointer hover:scale-105' : ''
                }`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                <div className="p-6 relative z-10">
                  <div className="flex items-start justify-between mb-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold border ${
                      project.type === 'UX Design' 
                        ? 'bg-purple-500/20 border-purple-500/50 text-purple-400'
                        : 'bg-blue-500/20 border-blue-500/50 text-blue-400'
                    }`}>
                      {project.type}
                    </span>
                    <span className="text-xs text-gray-500 whitespace-nowrap">{project.year}</span>
                  </div>

                  <h3 className="text-xl font-bold mb-3 break-words group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-4 text-sm leading-relaxed break-words">{project.description}</p>
                  
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <span key={i} className="px-2 py-1 bg-white/10 rounded-full text-xs border border-white/20">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {project.highlights && (
                    <div className="mb-4">
                      <ul className="space-y-1">
                        {project.highlights.slice(0, 3).map((highlight, i) => (
                          <li key={i} className="text-xs text-gray-400 flex items-start">
                            <span className="text-blue-400 mr-2">▸</span>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {project.caseStudy && (
                    <div className="pt-4 border-t border-white/10">
                      <span className="text-xs text-blue-400 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all cursor-pointer">
                        View Case Study
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  )}
                  
                  {!project.caseStudy && project.githubLink && (
                    <div className="pt-4 border-t border-white/10 flex gap-4">
                      {project.githubLink && (
                        <a 
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="flex items-center gap-2 text-xs text-gray-400 hover:text-blue-400 transition cursor-pointer"
                        >
                          <Github className="w-4 h-4" />
                          GitHub
                        </a>
                      )}
                      {project.liveLink && (
                        <a 
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="flex items-center gap-2 text-xs text-gray-400 hover:text-blue-400 transition cursor-pointer"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Live Demo
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}