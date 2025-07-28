import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { getServices } from '@/lib/cosmic'
import { Service } from '@/types'
import Link from 'next/link'

export const metadata = {
  title: 'Our Services - Digital Agency',
  description: 'Comprehensive digital services including web development, UI/UX design, and digital marketing to help your business succeed online.',
}

export default async function ServicesPage() {
  const services = await getServices() as Service[]

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-primary-900 to-primary-700 text-white">
          <div className="container-max text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              We offer comprehensive digital solutions designed to help your business grow and succeed in the digital landscape.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="section-padding bg-white">
          <div className="container-max">
            {services && services.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service) => (
                  <div key={service.id} className="card overflow-hidden hover:scale-105 transition-transform duration-300">
                    {service.metadata.service_icon && (
                      <div className="aspect-video overflow-hidden">
                        <img
                          src={`${service.metadata.service_icon.imgix_url}?w=800&h=400&fit=crop&auto=format,compress`}
                          alt={service.metadata.service_name}
                          className="w-full h-full object-cover"
                          width="400"
                          height="200"
                        />
                      </div>
                    )}

                    <div className="card-padding">
                      <h2 className="text-2xl font-bold text-gray-900 mb-4">
                        {service.metadata.service_name}
                      </h2>

                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {service.metadata.short_description}
                      </p>

                      {service.metadata.starting_price && (
                        <div className="mb-6">
                          <span className="text-3xl font-bold text-primary-600">
                            {service.metadata.starting_price}
                          </span>
                        </div>
                      )}

                      {service.metadata.key_features && service.metadata.key_features.length > 0 && (
                        <div className="mb-8">
                          <h3 className="font-semibold text-gray-900 mb-4">Key Features:</h3>
                          <ul className="space-y-2">
                            {service.metadata.key_features.map((feature, index) => (
                              <li key={index} className="flex items-center text-gray-600">
                                <svg className="w-5 h-5 text-primary-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
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
                        className="btn-primary w-full text-center block"
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-gray-600 text-lg">No services available at the moment.</p>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}