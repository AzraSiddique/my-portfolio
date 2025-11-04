// CaseStudyModal.jsx - Updated with better visual hierarchy and Behance integration
import React from 'react';
import { X, Search, Palette, TrendingUp, AlertCircle, CheckCircle, ExternalLink, ArrowRight } from 'lucide-react';

export default function CaseStudyModal({ project, onClose }) {
  if (!project || !project.caseStudy) return null;

  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-xl z-50 overflow-y-auto">
      <div className="min-h-screen px-4 sm:px-6 py-12 sm:py-20">
        <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl shadow-2xl max-w-6xl mx-auto relative border border-white/10">
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-3 bg-white/10 hover:bg-white/20 rounded-full transition z-10"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="p-8 sm:p-12 lg:p-16">
            {/* Header */}
            <div className="mb-12">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {project.title}
              </h1>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((tech, i) => (
                  <span key={i} className="px-4 py-2 bg-white/10 rounded-full text-sm border border-white/20">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Behance CTA - Only show if behanceLink exists */}
              {project.behanceLink && (
                <>
                  <a
                    href={project.behanceLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 font-semibold text-lg group mb-4"
                  >
                    <ExternalLink className="w-5 h-5" />
                    View Full Case Study on Behance
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <p className="text-gray-400 text-sm mb-8">
                    👆 Complete visual story with wireframes, prototypes, and design artifacts
                  </p>
                </>
              )}
            </div>

            {/* Case Study Content */}
            <div className="space-y-12">
              {/* Problem */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center">
                    <AlertCircle className="w-6 h-6 text-red-400" />
                  </div>
                  <h3 className="text-3xl font-bold">Problem</h3>
                </div>
                
                <div className="bg-gradient-to-br from-red-500/10 to-orange-500/10 rounded-2xl p-8 border border-red-500/20 mb-6">
                  <p className="text-lg text-gray-300 leading-relaxed">
                    {project.caseStudy.problem}
                  </p>
                </div>

                {/* Key Stats - Only show if project has stats */}
                {project.caseStudy.stats && (
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {project.caseStudy.stats.map((stat, i) => (
                      <div key={i} className="bg-white/5 rounded-xl p-6 border border-white/10">
                        <div className={`text-3xl font-bold mb-2 ${stat.color}`}>{stat.value}</div>
                        <div className="text-sm text-gray-400">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Solution */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center">
                    <Palette className="w-6 h-6 text-purple-400" />
                  </div>
                  <h3 className="text-3xl font-bold">Solution</h3>
                </div>
                
                <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-2xl p-8 border border-purple-500/20 mb-6">
                  <p className="text-lg text-gray-300 leading-relaxed">
                    {project.caseStudy.solution}
                  </p>
                </div>

                {/* Solution Features - Only show if project has features */}
                {project.caseStudy.features && (
                  <div className="grid sm:grid-cols-2 gap-4">
                    {project.caseStudy.features.map((feature, i) => (
                      <div key={i} className="bg-white/5 rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all">
                        <div className="flex items-start gap-3">
                          <div className={`w-8 h-8 rounded-lg ${feature.bgColor} flex items-center justify-center flex-shrink-0`}>
                            <CheckCircle className={`w-5 h-5 ${feature.iconColor}`} />
                          </div>
                          <div>
                            <div className="font-semibold mb-1">{feature.title}</div>
                            <div className="text-sm text-gray-400">{feature.description}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Design Process */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                    <Search className="w-6 h-6 text-green-400" />
                  </div>
                  <h3 className="text-3xl font-bold">Design Process</h3>
                </div>
                
                <div className="space-y-4">
                  {project.caseStudy.process.map((step, i) => (
                    <div key={i} className="bg-white/5 rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all">
                      <div className="flex items-start gap-4">
                        <span className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center font-bold text-sm">
                          {i + 1}
                        </span>
                        <p className="pt-2 text-gray-300 leading-relaxed">{step}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Impact */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-orange-400" />
                  </div>
                  <h3 className="text-3xl font-bold">Impact & Outcomes</h3>
                </div>
                
                {/* Impact Metrics - Only show if project has metrics */}
                {project.caseStudy.metrics && (
                  <div className="grid sm:grid-cols-3 gap-4 mb-6">
                    {project.caseStudy.metrics.map((metric, i) => (
                      <div key={i} className={`bg-gradient-to-br ${metric.gradient} rounded-xl p-6 border ${metric.border}`}>
                        <div className={`text-4xl font-bold ${metric.color} mb-2`}>{metric.value}</div>
                        <div className="text-sm text-gray-300">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Key Learnings - Only show if project has learnings */}
                {project.caseStudy.learnings && (
                  <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
                    <h4 className="font-bold text-xl mb-6 text-white">Key Learnings</h4>
                    <div className="grid sm:grid-cols-2 gap-6">
                      {project.caseStudy.learnings.map((learning, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <CheckCircle className={`w-5 h-5 ${learning.color} mt-1 flex-shrink-0`} />
                          <div>
                            <div className="font-semibold mb-1 text-white">{learning.title}</div>
                            <div className="text-sm text-gray-400">{learning.description}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Simple impact text fallback */}
                {!project.caseStudy.metrics && !project.caseStudy.learnings && (
                  <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
                    <p className="text-lg text-gray-300 leading-relaxed">
                      {project.caseStudy.impact}
                    </p>
                  </div>
                )}
              </div>

              {/* Design Screens Showcase */}
              {project.caseStudy.screens && project.caseStudy.screens.length > 0 && (
                <div className="pt-8 border-t border-white/10">
                  <h4 className="text-2xl font-bold mb-6 text-white">Design Screens</h4>
                  
                  {/* Animated Scrolling Showcase */}
                  <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-white/10 p-8">
                    {/* Gradient overlays for fade effect */}
                    <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-900 to-transparent z-10 pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-900 to-transparent z-10 pointer-events-none" />
                    
                    {/* Scrolling container */}
                    <div className="flex gap-6 animate-scroll-screens" style={{ minWidth: 0 }}>
                      {/* Duplicate screens for seamless loop */}
                      {[...project.caseStudy.screens, ...project.caseStudy.screens].map((screen, index) => (
                        <div
                          key={index}
                          className="flex-shrink-0 w-72 bg-white/5 rounded-2xl p-4 border border-white/10 hover:border-white/20 transition-all group"
                          style={{ minWidth: 0 }}
                        >
                          {/* Screen mockup container */}
                          <div className="relative bg-black rounded-xl overflow-hidden aspect-[9/19]">
                            {screen.image ? (
                              <img 
                                src={screen.image} 
                                alt={screen.title}
                                className="w-full h-full object-cover"
                              />
                            ) : (
                              // Placeholder if no image
                              <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                                <div className="text-center p-6">
                                  <div className="text-4xl mb-2">📱</div>
                                  <div className="text-sm text-gray-400">{screen.title}</div>
                                </div>
                              </div>
                            )}
                            {/* Notch overlay for realism */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-3xl" />
                          </div>
                          
                          {/* Screen title */}
                          <div className="mt-4 text-center">
                            <p className="font-semibold text-sm text-white group-hover:text-blue-400 transition-colors">
                              {screen.title}
                            </p>
                            {screen.description && (
                              <p className="text-xs text-gray-500 mt-1">{screen.description}</p>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <style>{`
                    @keyframes scroll-screens {
                      0% { transform: translateX(0); }
                      100% { transform: translateX(calc(-288px * ${project.caseStudy.screens.length} - 1.5rem * ${project.caseStudy.screens.length})); }
                    }
                    
                    .animate-scroll-screens {
                      animation: scroll-screens ${project.caseStudy.screens.length * 8}s linear infinite;
                    }
                    
                    .animate-scroll-screens:hover {
                      animation-play-state: paused;
                    }
                  `}</style>
                </div>
              )}

              {/* Fallback: Static image grid if no animated screens */}
              {(!project.caseStudy.screens || project.caseStudy.screens.length === 0) && project.caseStudy.mockupImage && (
                <div className="pt-8 border-t border-white/10">
                  <h4 className="text-2xl font-bold mb-6 text-white">Design Showcase</h4>
                  <div className="rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-gray-800 to-gray-900">
                    <img 
                      src={project.caseStudy.mockupImage} 
                      alt="SubTrack Design Mockup"
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}