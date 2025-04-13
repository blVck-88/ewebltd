export default function Services() {
  const services = [
    {
      title: 'Full Wedding Planning',
      description: 'Comprehensive planning from start to finish, including vendor coordination, budget management, and timeline creation.',
      features: ['Vendor Selection', 'Budget Management', 'Timeline Planning', 'Day-of Coordination']
    },
    {
      title: 'Partial Planning',
      description: 'Perfect for couples who have started planning but need professional guidance to complete their vision.',
      features: ['Vendor Recommendations', 'Timeline Review', 'Month-of Coordination', 'Wedding Day Management']
    },
    {
      title: 'Day-of Coordination',
      description: 'Ensures your wedding day runs smoothly while you focus on enjoying every moment.',
      features: ['Vendor Coordination', 'Timeline Execution', 'Setup Supervision', 'Emergency Management']
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-12">Our Services</h1>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.title} className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
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
          <h2 className="text-2xl font-semibold mb-4">Need a Custom Package?</h2>
          <p className="text-gray-600 mb-8">Contact us to create a personalized wedding planning package that fits your needs.</p>
          <button className="bg-blue-900 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-800 transition-colors">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  )
}