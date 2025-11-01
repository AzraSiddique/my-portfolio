// CaseStudyModal.js
import React from 'react';
import { X, Search, Palette, Code, Users } from 'lucide-react';

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
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {project.title}
            </h1>
            
            <div className="flex flex-wrap gap-2 mb-12">
              {project.tech.map((tech, i) => (
                <span key={i} className="px-4 py-2 bg-white/10 rounded-full text-sm border border-white/20">
                  {tech}
                </span>
              ))}
            </div>

            {/* Case Study Content */}
            <div className="space-y-12">
              {/* Problem */}
              <div>
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                    <Search className="w-6 h-6 text-blue-400" />
                  </div>
                  Problem
                </h3>
                <p className="text-gray-400 leading-relaxed text-lg">
                  {project.caseStudy.problem}
                </p>
              </div>

              {/* Solution */}
              <div>
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center">
                    <Palette className="w-6 h-6 text-purple-400" />
                  </div>
                  Solution
                </h3>
                <p className="text-gray-400 leading-relaxed text-lg">
                  {project.caseStudy.solution}
                </p>
              </div>

              {/* Design Process */}
              <div>
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                    <Code className="w-6 h-6 text-green-400" />
                  </div>
                  Design Process
                </h3>
                <ul className="space-y-4">
                  {project.caseStudy.process.map((step, i) => (
                    <li key={i} className="text-gray-400 flex items-start gap-4">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center font-bold text-sm">
                        {i + 1}
                      </span>
                      <span className="pt-1 text-lg">{step}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Impact */}
              <div>
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center">
                    <Users className="w-6 h-6 text-orange-400" />
                  </div>
                  Impact
                </h3>
                <p className="text-gray-400 leading-relaxed text-lg">
                  {project.caseStudy.impact}
                </p>
              </div>

              {/* Placeholder for Design Artifacts */}
              <div className="mt-12 pt-8 border-t border-white/10">
                <h4 className="text-xl font-bold mb-6 text-white">Design Artifacts</h4>
                <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-2xl p-6 mb-6">
                  <p className="text-yellow-400 font-semibold mb-2">📸 Add Your Images Here</p>
                  <p className="text-gray-400 text-sm">
                    Upload your wireframes, prototypes, and high-fidelity designs to an image hosting service 
                    (like Imgur or Cloudinary), then replace this section with actual images using img tags.
                  </p>
                </div>
                
                {/* Image Placeholder Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                    <div className="w-full h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl mb-4 flex items-center justify-center text-gray-500 text-sm">
                      [Wireframes Image]
                    </div>
                    <p className="text-sm text-gray-400">Low-fidelity wireframes and user flows</p>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                    <div className="w-full h-48 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl mb-4 flex items-center justify-center text-gray-500 text-sm">
                      [High-Fidelity Design]
                    </div>
                    <p className="text-sm text-gray-400">Final high-fidelity screens</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}