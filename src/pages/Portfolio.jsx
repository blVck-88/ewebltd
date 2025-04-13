export default function Portfolio() {
  const portfolioItems = [
    {
      title: 'Modern Office Complex',
      description: 'A state-of-the-art commercial office building with sustainable design features.',
      date: 'Completed 2023',
      category: 'Commercial Construction'
    },
    {
      title: 'Luxury Residential Development',
      description: 'High-end residential community with custom homes and premium amenities.',
      date: 'Completed 2023',
      category: 'Residential Construction'
    },
    {
      title: 'Highway Bridge Renovation',
      description: 'Major infrastructure project involving structural reinforcement and expansion.',
      date: 'Completed 2022',
      category: 'Civil Engineering'
    },
    {
      title: 'Shopping Mall Expansion',
      description: 'Retail space expansion with modern architectural elements and improved facilities.',
      date: 'Completed 2023',
      category: 'Commercial Construction'
    },
    {
      title: 'Industrial Warehouse Complex',
      description: 'Large-scale industrial facility with advanced logistics infrastructure.',
      date: 'Completed 2022',
      category: 'Industrial Construction'
    },
    {
      title: 'Community Center Renovation',
      description: 'Complete renovation of public facility with accessibility improvements and modern amenities.',
      date: 'Completed 2023',
      category: 'Public Works'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-12">Our Portfolio</h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item) => (
            <div key={item.title} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-64 bg-gray-200" />
              <div className="p-6">
                <div className="text-sm text-blue-900 font-semibold mb-2">{item.category}</div>
                <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">{item.date}</span>
                  <button className="text-blue-900 hover:text-blue-800 font-semibold">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-semibold mb-4">Let's Build Your Next Project</h2>
          <p className="text-gray-600 mb-8">Ready to start your construction project? Contact us for a consultation.</p>
          <button className="bg-blue-900 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-800 transition-colors">
            Get Started
          </button>
        </div>
      </div>
    </div>
  )
}