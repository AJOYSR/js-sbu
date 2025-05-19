'use client'

import React from 'react'
import { GraduationCap, CheckCircle } from 'lucide-react'

interface Prerequisite {
  requirement: string
}

interface LearningOutcome {
  outcome: string
}

interface TutorialSidebarProps {
  prerequisites?: Prerequisite[]
  learningOutcomes?: LearningOutcome[]
}

export default function TutorialSidebar({ prerequisites, learningOutcomes }: TutorialSidebarProps) {
  return (
    <div className="lg:col-span-1 animation-delay-600 animate-fadeIn">
      {/* Prerequisites */}
      {prerequisites && prerequisites.length > 0 && (
        <div className="glass-card rounded-xl shadow-md p-6 mb-6">
          <h3 className="text-xl font-semibold mb-4 flex items-center text-primary">
            <GraduationCap className="w-5 h-5 mr-2 text-primary" />
            Prerequisites
          </h3>
          <ul className="space-y-3">
            {prerequisites.map((prereq, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle className="w-5 h-5 mr-2 text-primary flex-shrink-0 mt-1" />
                <span className="text-gray-600">{prereq.requirement}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Learning Outcomes */}
      {learningOutcomes && learningOutcomes.length > 0 && (
        <div className="bg-card rounded-xl shadow-md p-6 soft-shadow animation-delay-600 animate-fadeIn">
          <div className="from-primary/10 to-primary/5 rounded-lg px-4 py-2">
            <h3 className="text-xl font-semibold flex items-center text-gradient">
              <CheckCircle className="w-5 h-5 mr-2 text-primary" />
              What You&apos;ll Learn
            </h3>
          </div>
          <ul className="space-y-4">
            {learningOutcomes.map((outcome, index) => (
              <li
                key={index}
                className="flex items-start bg-card/50 p-3 rounded-lg hover:bg-primary/5 transition-colors"
              >
                <div className="bg-primary/10 rounded-full p-1 mr-3 flex-shrink-0 mt-0.5">
                  <CheckCircle className="w-4 h-4 text-primary" />
                </div>
                <span className="text-foreground">{outcome.outcome}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
