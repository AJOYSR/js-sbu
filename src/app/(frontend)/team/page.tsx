import React from 'react'
import Image from 'next/image'

// Team member type definition
type TeamMember = {
  name: string
  role: string
  bio: string
  image: string
}

// Sample team data (in a real app, this would come from a CMS or API)
const leadershipTeam: TeamMember[] = [
  {
    name: 'John Smith',
    role: 'Head of JS-SBU',
    bio: 'With over 15 years of experience in JavaScript development, John leads our unit with expertise in enterprise solutions.',
    image: '/team/placeholder.jpg',
  },
  {
    name: 'Sarah Johnson',
    role: 'Technical Director',
    bio: 'Sarah brings 12 years of experience in modern web technologies and leads our technical strategy and innovation initiatives.',
    image: '/team/placeholder.jpg',
  },
  {
    name: 'Michael Chen',
    role: 'Lead Architect',
    bio: 'Michael specializes in scalable architecture and leads our system design initiatives with 10 years of experience.',
    image: '/team/placeholder.jpg',
  },
]

const teamStructure = [
  {
    title: 'Web Development',
    description: 'Specialized in creating robust and scalable web applications',
    skills: ['React', 'Angular', 'Vue.js', 'Node.js'],
  },
  {
    title: 'Mobile Development',
    description: 'Expert team in cross-platform mobile development',
    skills: ['React Native', 'Flutter', 'iOS', 'Android'],
  },
  {
    title: 'UI/UX Design',
    description: 'Creating beautiful and intuitive user experiences',
    skills: ['User Research', 'Wireframing', 'Prototyping', 'UI Design'],
  },
  {
    title: 'DevOps',
    description: 'Ensuring smooth deployment and operation of applications',
    skills: ['CI/CD', 'Cloud Infrastructure', 'Monitoring', 'Security'],
  },
]

export default function TeamPage() {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <h1 className="text-4xl font-bold mb-6">Our Team</h1>
          <p className="text-xl text-gray-600">
            Meet the talented individuals who make JS-SBU a leader in JavaScript development
          </p>
        </div>

        {/* Leadership Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center">Leadership Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {leadershipTeam.map((leader) => (
              <div key={leader.name} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-64 w-full">
                  <Image src={leader.image} alt={leader.name} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{leader.name}</h3>
                  <p className="text-primary font-medium mb-4">{leader.role}</p>
                  <p className="text-gray-600">{leader.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Structure Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Team Structure</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {teamStructure.map((team) => (
              <div key={team.title} className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">{team.title}</h3>
                <p className="text-gray-600 mb-6">{team.description}</p>
                <div className="flex flex-wrap gap-2">
                  {team.skills.map((skill) => (
                    <span
                      key={skill}
                      className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Join Us Section */}
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-primary/10 to-primary/5 p-12 rounded-lg">
          <h2 className="text-3xl font-bold mb-6">Join Our Team</h2>
          <p className="text-lg text-gray-700 mb-8">
            We&apos;re always looking for talented individuals who are passionate about JavaScript
            and want to work on cutting-edge projects.
          </p>
          <a
            href="mailto:careers@js-sbu.com"
            className="inline-block bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition"
          >
            View Open Positions
          </a>
        </div>
      </div>
    </div>
  )
}
