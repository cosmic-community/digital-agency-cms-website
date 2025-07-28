// app/services/[slug]/page.tsx
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { getService, getServices } from '@/lib/cosmic'
import { Service } from '@/types'
import { notFound } from 'next/navigation'
import Link from 'next/link'

interface ServicePageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const services = await getServices() as Service[]
  
  return services.map((service) => ({
    slug: service.slug,
  }))
}

export async function generateMetadata({ params }: ServicePageProps) {
  const { slug } = await params
  const service = await getService(slug) as Service | null

  if (!service) {
    return {
      title: 'Service Not Found - Digital Agency',
    }
  }

  return {
    title: `${service.metadata.service_name} - Digital Agency`,
    description: service.metadata.short_description,
  }
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params
  const service = await getService(slug) as Service | null

  if (!service) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-primary-900 to-primary-700 text-white">
          <div className="container-max">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                  {service.metadata.service_name}
                </h1>
                <p className="text-xl text-primary-100 mb-8">
                  {service.metadata.short_description}
                </p>
                {service.metadata.starting_price && (
                  <div className="mb-8">
                    <span className="text-sm text-primary-200 block mb-2">Starting at</span>
                    <span className="text-4xl font-bold">
                      {service.metadata.starting_price}
                    </span>
                  </div>
                )}
                <Link href="#contact" className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
                  Get Started
                </Link>
              </div>
              
              {service.metadata.service_icon && (
                <div>
                  <img
                    src={`${service.metadata.service_icon.imgix_url}?w=1200&h=800&fit=crop&auto=format,compress`}
                    alt={service.metadata.service_name}
                    className="w-full rounded-2xl shadow-2xl"
                    width="600"
                    height="400"
                  />
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Service Details */}
        <section className="section-padding bg-white">
          <div className="container-max">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2">
                {service.metadata.full_description && (
                  <div className="prose-custom">
                    <div dangerouslySetInnerHTML={{ __html: service.metadata.full_description }} />
                  </div>
                )}
              </div>

              {/* Sidebar */}
              <div>
                {service.metadata.key_features && service.metadata.key_features.length > 0 && (
                  <div className="card card-padding mb-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-6">What's Included</h3>
                    <ul className="space-y-3">
                      {service.metadata.key_features.map((feature, index) => (
                        <li key={index} className="flex items-center text-gray-700">
                          <svg className="w-5 h-5 text-primary-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="card card-padding">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Ready to Get Started?</h3>
                  <p className="text-gray-600 mb-6">
                    Let's discuss your project and see how we can help bring your vision to life.
                  </p>
                  <Link href="#contact" className="btn-primary w-full text-center block">
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}