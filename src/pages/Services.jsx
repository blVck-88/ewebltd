export default function Services() {
  const services = [
    {
      title: 'Residential Construction',
      description: 'Complete residential building services from foundation to finishing, delivering quality homes that stand the test of time.',
      features: ['New Home Construction', 'Home Renovations', 'Additions & Extensions', 'Custom Home Design']
    },
    {
      title: 'Commercial Projects',
      description: 'Professional commercial construction services for businesses of all sizes, from office buildings to retail spaces.',
      features: ['Office Buildings', 'Retail Spaces', 'Industrial Facilities', 'Project Management']
    },
    {
      title: 'Civil Engineering',
      description: 'Expert civil engineering solutions for infrastructure projects, ensuring structural integrity and compliance.',
      features: ['Infrastructure Development', 'Structural Engineering', 'Site Planning', 'Regulatory Compliance']
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-12">Our Services</h1>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.title} className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-40 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="ml-2 text-gray-500 font-medium">Service Image</span>
              </div>
              <h2 className="text-2xl font-semibold mb-4">{service.title}</h2>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="mt-6 w-full bg-blue-900 text-white py-2 rounded-lg hover:bg-blue-800 transition-colors">
                Learn More
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-semibold mb-4">Need a Custom Solution?</h2>
          <p className="text-gray-600 mb-8">Contact us to discuss your specific construction or engineering requirements.</p>
          <button className="bg-blue-900 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-800 transition-colors">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  )
}