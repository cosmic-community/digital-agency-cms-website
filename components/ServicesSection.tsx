import Link from 'next/link'
import { getServices } from '@/lib/cosmic'
import { Service } from '@/types'

export async function ServicesSection() {
  const services = await getServices() as Service[]

  if (!services || services.length === 0) {
    return (
      <section className="section-padding bg-white">
        <div className="container-max text-center">
          <p className="text-gray-600">No services available at the moment.</p>
        </div>
      </section>
    )
  }

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive digital solutions to help your business grow and succeed online.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="card card-padding hover:scale-105 transition-transform duration-300">
              {service.metadata.service_icon && (
                <div className="mb-6">
                  <img
                    src={`${service.metadata.service_icon.imgix_url}?w=120&h=120&fit=crop&auto=format,compress`}
                    alt={service.metadata.service_name}
                    className="w-16 h-16 rounded-lg object-cover"
                    width="64"
                    height="64"
                  />
                </div>
              )}

              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {service.metadata.service_name}
              </h3>

              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.metadata.short_description}
              </p>

              {service.metadata.starting_price && (
                <div className="mb-6">
                  <span className="text-2xl font-bold text-primary-600">
                    {service.metadata.starting_price}
                  </span>
                </div>
              )}

              {service.metadata.key_features && service.metadata.key_features.length > 0 && (
                <div className="mb-6">
                  <ul className="space-y-2">
                    {service.metadata.key_features.slice(0, 4).map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600">
                        <svg className="w-4 h-4 text-primary-600 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <Link
                href={`/services/${service.slug}`}
                className="btn-outline w-full text-center block"
              >
                Learn More
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/services" className="btn-primary">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  )
}