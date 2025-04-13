export default function Portfolio() {
  const portfolioItems = [
    {
      title: 'Elegant Garden Wedding',
      description: 'A beautiful outdoor celebration featuring natural elements and romantic details.',
      date: 'Spring 2023',
      category: 'Garden Weddings'
    },
    {
      title: 'Modern City Celebration',
      description: 'Sophisticated urban wedding with contemporary design and stunning city views.',
      date: 'Summer 2023',
      category: 'Urban Weddings'
    },
    {
      title: 'Rustic Barn Romance',
      description: 'Charming countryside wedding with vintage touches and warm atmosphere.',
      date: 'Fall 2023',
      category: 'Rustic Weddings'
    },
    {
      title: 'Beachside Ceremony',
      description: 'Intimate beach wedding with coastal elements and sunset views.',
      date: 'Summer 2023',
      category: 'Beach Weddings'
    },
    {
      title: 'Traditional Ballroom',
      description: 'Classic ballroom wedding with elegant decor and timeless details.',
      date: 'Winter 2023',
      category: 'Traditional Weddings'
    },
    {
      title: 'Destination Paradise',
      description: 'Exotic destination wedding combining local culture with personal touches.',
      date: 'Spring 2023',
      category: 'Destination Weddings'
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
          <h2 className="text-2xl font-semibold mb-4">Let's Create Your Dream Wedding</h2>
          <p className="text-gray-600 mb-8">Ready to start planning your perfect day? Contact us for a consultation.</p>
          <button className="bg-blue-900 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-800 transition-colors">
            Get Started
          </button>
        </div>
      </div>
    </div>
  )
}