export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Your Trusted Construction & Engineering Partner</h2>
            <p className="text-gray-600 mb-4">
              With years of experience in delivering high-quality construction and engineering projects, we understand that every client's needs are unique. Our dedicated team of professionals works tirelessly to bring your vision to life.
            </p>
            <p className="text-gray-600 mb-4">
              We pride ourselves on attention to detail, quality craftsmanship, and creating durable structures that stand the test of time.
            </p>
          </div>
          <div className="bg-gray-200 rounded-lg h-80 flex items-center justify-center">
            <svg className="w-20 h-20 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            <span className="ml-3 text-gray-500 font-medium">Company Image</span>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-center mb-8">Why Choose Us</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Expertise',
                description: 'Years of experience in construction and civil engineering'
              },
              {
                title: 'Quality',
                description: 'Premium materials and superior craftsmanship on every project'
              },
              {
                title: 'Reliability',
                description: 'On-time delivery and transparent project management'
              }
            ].map((item) => (
              <div key={item.title} className="p-6 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}