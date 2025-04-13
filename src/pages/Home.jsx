export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-blue-900 text-white py-20">
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
              <div className="h-40 bg-gray-200 rounded-lg mb-4" />
              <h3 className="text-xl font-semibold mb-3">{service}</h3>
              <p className="text-gray-600">Professional construction and engineering services delivered with quality craftsmanship and attention to detail.</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-gray-600 mb-8">Schedule a free consultation with our construction experts</p>
          <button className="bg-blue-900 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-800 transition-colors">
            Request Quote
          </button>
        </div>
      </div>
    </div>
  )
}