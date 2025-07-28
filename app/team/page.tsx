import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { getTeamMembers } from '@/lib/cosmic'
import { TeamMember } from '@/types'

export const metadata = {
  title: 'Our Team - Digital Agency',
  description: 'Meet the talented team of experts dedicated to delivering exceptional results for every project.',
}

export default async function TeamPage() {
  const teamMembers = await getTeamMembers() as TeamMember[]

  // Group team members by department
  const groupedMembers = teamMembers.reduce((acc, member) => {
    const department = member.metadata.department?.value || 'Other'
    if (!acc[department]) {
      acc[department] = []
    }
    acc[department].push(member)
    return acc
  }, {} as Record<string, TeamMember[]>)

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-primary-900 to-primary-700 text-white">
          <div className="container-max text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Meet Our Team
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Our talented team of experts is passionate about creating exceptional digital experiences 
              and delivering outstanding results for every client.
            </p>
          </div>
        </section>

        {/* Team Members */}
        <section className="section-padding bg-white">
          <div className="container-max">
            {teamMembers && teamMembers.length > 0 ? (
              Object.entries(groupedMembers).map(([department, members]) => (
                <div key={department} className="mb-16">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                    {department}
                  </h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {members.map((member) => (
                      <div key={member.id} className="card card-padding text-center hover:scale-105 transition-transform duration-300">
                        {member.metadata.profile_photo && (
                          <div className="mb-6">
                            <img
                              src={`${member.metadata.profile_photo.imgix_url}?w=480&h=480&fit=crop&auto=format,compress`}
                              alt={member.metadata.full_name}
                              className="w-32 h-32 rounded-full object-cover mx-auto"
                              width="128"
                              height="128"
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
                          <p className="text-gray-600 mb-6 leading-relaxed">
                            {member.metadata.bio}
                          </p>
                        )}

                        {member.metadata.skills && member.metadata.skills.length > 0 && (
                          <div className="mb-6">
                            <h4 className="font-semibold text-gray-900 mb-3">Skills</h4>
                            <div className="flex flex-wrap gap-2 justify-center">
                              {member.metadata.skills.map((skill, index) => (
                                <span
                                  key={index}
                                  className="text-xs font-medium text-primary-600 bg-primary-50 px-3 py-1 rounded-full"
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        <div className="flex items-center justify-center gap-4 text-sm text-gray-600">
                          {member.metadata.years_experience && (
                            <span>{member.metadata.years_experience} years exp.</span>
                          )}
                          {member.metadata.linkedin_url && (
                            <a
                              href={member.metadata.linkedin_url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-primary-600 hover:text-primary-700 font-medium"
                            >
                              LinkedIn
                            </a>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-16">
                <p className="text-gray-600 text-lg">No team members available at the moment.</p>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}