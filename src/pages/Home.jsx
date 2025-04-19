import { Link } from 'react-router-dom';

export default function Home() {
  const serviceImages = {
    'Residential Construction': '/ewebltd/images/residential.png',
    'Commercial Projects': '/ewebltd/images/commercial.png',
    'Civil Engineering': '/ewebltd/images/civil.png',
    'Water Works': '/ewebltd/images/water.png',
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-blue-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center opacity-20">
          
        </div>
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Building Excellence in Construction</h1>
          <p className="text-xl mb-8">
            At <strong>Eastken Engineering Solutions</strong>, we are dedicated to providing exceptional engineering and construction services that meet the diverse needs of both residential and commercial projects. With years of experience in the industry, our team of experts is committed to delivering high-quality solutions that are not only functional but also sustainable, cost-effective, and built to last.<br /><br />
            Whether you're looking to construct your dream home, undertake a commercial development, or address complex civil engineering challenges, we offer end-to-end services that cover every aspect of your project. From initial design and planning to construction and project completion, we ensure that every phase is executed with precision, efficiency, and a focus on exceeding our clients' expectations.<br /><br />
            At <strong>Eastken Engineering Solutions</strong>, we value collaboration and work closely with our clients to ensure that every project aligns with their vision. Our commitment to quality craftsmanship, innovative problem-solving, and strict adherence to safety standards makes us a trusted partner for projects of all sizes.<br /><br />
            Let us help bring your vision to life with expert engineering solutions you can rely on.
          </p>
         
        </div>
      </section>
      <div className="flex justify-center my-8">
        <button
          onClick={() => {
            document.getElementById('services').scrollIntoView({ behavior: 'smooth' });
          }}
          className="bg-blue-900 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-800 transition-colors"
        >
          Get Started
        </button>
      </div>
      {/* Featured Services */}
      <section id="services" className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {['Residential Construction', 'Commercial Projects', 'Civil Engineering', 'Water Works'].map((service) => {
            const descriptions = {
              'Residential Construction': 'Custom home building, renovations, and residential developments with attention to comfort and modern living standards.',
              'Commercial Projects': 'Full-service commercial construction including office buildings, retail spaces, and industrial facilities.',
              'Civil Engineering': 'Infrastructure development, public works, and sustainable engineering solutions for community projects.',
              'Water Works': 'Specialized water infrastructure services including treatment plants, distribution systems, and drainage solutions.'
            };
            return (
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
                  {descriptions[service]}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-gray-600 mb-8">Schedule a free consultation with our construction experts</p>
          <Link to="/request-quote">
            <button className="bg-blue-900 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-800 transition-colors">
              Request Quote
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
