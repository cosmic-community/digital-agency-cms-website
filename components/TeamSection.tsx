import Link from 'next/link'
import { getTeamMembers } from '@/lib/cosmic'
import { TeamMember } from '@/types'

export async function TeamSection() {
  const teamMembers = await getTeamMembers() as TeamMember[]

  if (!teamMembers || teamMembers.length === 0) {
    return (
      <section className="section-padding bg-gray-50">
        <div className="container-max text-center">
          <p className="text-gray-600">No team members available at the moment.</p>
        </div>
      </section>
    )
  }

  // Show only first 3 team members on homepage
  const featuredTeamMembers = teamMembers.slice(0, 3)

  return (
    <section id="team" className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Meet Our Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our talented team of experts is dedicated to delivering exceptional results for every project.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredTeamMembers.map((member) => (
            <div key={member.id} className="card card-padding text-center hover:scale-105 transition-transform duration-300">
              {member.metadata.profile_photo && (
                <div className="mb-6">
                  <img
                    src={`${member.metadata.profile_photo.imgix_url}?w=240&h=240&fit=crop&auto=format,compress`}
                    alt={member.metadata.full_name}
                    className="w-24 h-24 rounded-full object-cover mx-auto"
                    width="96"
                    height="96"
                  />
                </div>
              )}

              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {member.metadata.full_name}
              </h3>

              <p className="text-primary-600 font-medium mb-4">
                {member.metadata.job_title}
              </p>

              {member.metadata.bio && (
                <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                  {member.metadata.bio.length > 120 
                    ? `${member.metadata.bio.substring(0, 120)}...` 
                    : member.metadata.bio
                  }
                </p>
              )}

              {member.metadata.skills && member.metadata.skills.length > 0 && (
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.metadata.skills.slice(0, 3).map((skill, index) => (
                      <span
                        key={index}
                        className="text-xs font-medium text-primary-600 bg-primary-50 px-2 py-1 rounded-md"
                      >
                        {skill}
                      </span>
                    ))}
                    {member.metadata.skills.length > 3 && (
                      <span className="text-xs font-medium text-gray-500 px-2 py-1">
                        +{member.metadata.skills.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              )}

              {member.metadata.years_experience && (
                <div className="mb-6">
                  <span className="text-sm text-gray-600">
                    {member.metadata.years_experience} years experience
                  </span>
                </div>
              )}

              {member.metadata.linkedin_url && (
                <a
                  href={member.metadata.linkedin_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary-600 hover:text-primary-700 text-sm font-medium"
                >
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                  </svg>
                  Connect on LinkedIn
                </a>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/team" className="btn-primary">
            Meet the Full Team
          </Link>
        </div>
      </div>
    </section>
  )
}