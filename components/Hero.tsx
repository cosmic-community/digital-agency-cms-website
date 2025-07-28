import Link from 'next/link'

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white pt-24">
      <div className="absolute inset-0 bg-black/20"></div>
      
      <div className="relative container-max section-padding py-24 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 animate-fade-in">
            Transform Your Business with
            <span className="block text-transparent bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text">
              Digital Excellence
            </span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-blue-100 mb-8 leading-relaxed animate-slide-up">
            We create stunning websites, engaging user experiences, and data-driven marketing strategies 
            that help businesses thrive in the digital age.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
            <Link href="/services" className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
              Explore Our Services
            </Link>
            <Link href="/case-studies" className="btn-outline border-white text-white hover:bg-white/10">
              View Our Work
            </Link>
          </div>
        </div>

        {/* Hero Image */}
        <div className="mt-16 animate-fade-in">
          <img
            src="https://imgix.cosmicjs.com/0e62fce0-6be0-11f0-a051-23c10f41277a-photo-1542838132-92c53300491e-1753727047204.jpg?w=1200&h=600&fit=crop&auto=format,compress"
            alt="Digital Agency Team"
            className="w-full max-w-5xl mx-auto rounded-2xl shadow-2xl"
            width="1200"
            height="600"
          />
        </div>
      </div>
      
      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full h-12 text-gray-50">
          <path fill="currentColor" d="M0,64L48,58.7C96,53,192,43,288,48C384,53,480,75,576,80C672,85,768,75,864,64C960,53,1056,43,1152,42.7C1248,43,1344,53,1392,58.7L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
        </svg>
      </div>
    </section>
  )
}