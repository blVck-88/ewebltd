import { Link } from 'react-router-dom';

export default function Home() {
  const serviceImages = {
    'Residential Construction': '/ewebltd/images/residential.png',
    'Commercial Projects': '/ewebltd/images/commercial.png',
    'Civil Engineering': '/ewebltd/images/civil.png',
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-blue-900 text-white py-20 overflow-hidden">
        {/* Hero Background Image Placeholder */}
        <div className="absolute inset-0 flex items-center justify-center opacity-20">
          <svg className="w-full h-64 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 22V12h6v10" />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Building Excellence in Construction</h1>
          <p className="text-xl mb-8">Professional engineering and construction services for your residential and commercial projects</p>
          <button className="bg-white text-blue-900 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors">
            Get Started
          </button>
        </div>
      </div>

      {/* Featured Services */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {['Residential Construction', 'Commercial Projects', 'Civil Engineering'].map((service) => (
            <div key={service} className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="aspect-[4/3] bg-gray-200 rounded-lg mb-4 overflow-hidden">
  <img
    src={serviceImages[service]}
    alt={service}
    className="w-full h-full object-cover"
  />
</div>

              <h3 className="text-xl font-semibold mb-3">{service}</h3>
              <p className="text-gray-600">
                Professional construction and engineering services delivered with quality craftsmanship and attention to detail.
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-gray-600 mb-8">Schedule a free consultation with our construction experts</p>
          <Link to="/request-quote">
            <button className="bg-blue-900 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-800 transition-colors">
              Request Quote
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}