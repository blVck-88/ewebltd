import { Link } from 'react-router-dom';

export default function Services() {
  const serviceImages = {
    'Residential Construction': '/ewebltd/images/residential.png',
    'Commercial Projects': '/ewebltd/images/commercial.png',
    'Civil Engineering': '/ewebltd/images/civil.png',
    'Water Works': '/ewebltd/images/water.png',
    'Infiltration Wells': '/ewebltd/images/infil.png',
  };

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
    }
    ,
    {
      title: 'Water Works',
      description: 'Comprehensive water-related services including water supply systems, drainage systems, and water treatment infrastructure.',
      features: ['Water Supply Systems', 'Stormwater Drainage', 'Water Treatment Solutions', 'Pipeline Installation & Maintenance'],
    },
    {
      title: 'Infiltration Wells',
      description: 'Efficient groundwater recharge solutions using infiltration wells to manage surface water runoff and enhance aquifer sustainability.',
      features: [
        'Groundwater Recharge','Surface Water Infiltration', 'Natural Filtration of Water', 'Sustainable Water Management', 'Flood Mitigation', 'Cost-Effective Water Storage Solution'
      ],
    },
    
    {
      title: 'Civil Engineering',
      description: 'Expert civil engineering solutions for infrastructure projects, ensuring structural integrity and compliance.',
      features: ['Infrastructure Development', 'Structural Engineering', 'Site Planning', 'Regulatory Compliance'],
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-12">Our Services</h1>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.title} className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="aspect-[4/3] bg-gray-200 rounded-lg mb-4 overflow-hidden">
                <img
                  src={serviceImages[service.title]}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
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
              <Link to="/contact">
              <button className="mt-6 w-full bg-blue-900 text-white py-2 rounded-lg hover:bg-blue-800 transition-colors">
                Learn More
              </button></Link>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-semibold mb-4">Need a Custom Solution?</h2>
          <p className="text-gray-600 mb-8">Contact us to discuss your specific construction or engineering requirements.</p>
          <Link to="/contact">
            <button className="bg-blue-900 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-800 transition-colors">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}