import Link from 'next/link'
import { getCaseStudies } from '@/lib/cosmic'
import { CaseStudy } from '@/types'

export async function CaseStudiesSection() {
  const caseStudies = await getCaseStudies() as CaseStudy[]

  if (!caseStudies || caseStudies.length === 0) {
    return (
      <section className="section-padding bg-gray-50">
        <div className="container-max text-center">
          <p className="text-gray-600">No case studies available at the moment.</p>
        </div>
      </section>
    )
  }

  // Show only first 2 case studies on homepage
  const featuredCaseStudies = caseStudies.slice(0, 2)

  return (
    <section id="case-studies" className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how we've helped businesses achieve their digital goals through innovative solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {featuredCaseStudies.map((caseStudy) => (
            <div key={caseStudy.id} className="card overflow-hidden hover:scale-105 transition-transform duration-300">
              {caseStudy.metadata.featured_image && (
                <div className="aspect-video overflow-hidden">
                  <img
                    src={`${caseStudy.metadata.featured_image.imgix_url}?w=800&h=450&fit=crop&auto=format,compress`}
                    alt={caseStudy.metadata.project_title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    width="400"
                    height="225"
                  />
                </div>
              )}

              <div className="card-padding">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-sm font-medium text-primary-600 bg-primary-50 px-3 py-1 rounded-full">
                    {caseStudy.metadata.client_name}
                  </span>
                  {caseStudy.metadata.project_duration && (
                    <span className="text-sm text-gray-500">
                      {caseStudy.metadata.project_duration}
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {caseStudy.metadata.project_title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {caseStudy.metadata.project_overview}
                </p>

                {caseStudy.metadata.technologies_used && caseStudy.metadata.technologies_used.length > 0 && (
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {caseStudy.metadata.technologies_used.slice(0, 4).map((tech, index) => (
                        <span
                          key={index}
                          className="text-xs font-medium text-gray-600 bg-gray-100 px-2 py-1 rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                      {caseStudy.metadata.technologies_used.length > 4 && (
                        <span className="text-xs font-medium text-gray-500 px-2 py-1">
                          +{caseStudy.metadata.technologies_used.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>
                )}

                <Link
                  href={`/case-studies/${caseStudy.slug}`}
                  className="btn-outline w-full text-center block"
                >
                  View Case Study
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/case-studies" className="btn-primary">
            View All Case Studies
          </Link>
        </div>
      </div>
    </section>
  )
}