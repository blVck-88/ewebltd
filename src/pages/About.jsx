export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Your Premier Wedding Planning Partner</h2>
            <p className="text-gray-600 mb-4">
              With years of experience in creating magical wedding celebrations, we understand that every couple's story is unique. Our dedicated team of wedding planners works tirelessly to bring your vision to life.
            </p>
            <p className="text-gray-600 mb-4">
              We pride ourselves on attention to detail, personalized service, and creating unforgettable moments that you'll cherish forever.
            </p>
          </div>
          <div className="bg-gray-200 rounded-lg h-80" />
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-center mb-8">Why Choose Us</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Experience',
                description: 'Years of expertise in wedding planning and coordination'
              },
              {
                title: 'Personalization',
                description: 'Customized solutions tailored to your unique vision'
              },
              {
                title: 'Dedication',
                description: 'Committed to making your special day perfect'
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