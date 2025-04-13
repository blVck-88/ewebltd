export default function FAQ() {
  const faqs = [
    {
      question: 'How long does a typical construction project take?',
      answer: 'Project timelines vary based on scope and complexity. Residential renovations may take 2-6 months, while new commercial construction can range from 6-18 months. We provide detailed timelines during the consultation phase.'
    },
    {
      question: 'What types of projects does your company handle?',
      answer: 'We specialize in residential construction, commercial buildings, renovations, and civil engineering projects. Our team has expertise in new builds, remodeling, additions, and infrastructure development.'
    },
    {
      question: 'Do you provide free estimates?',
      answer: 'Yes! We offer complimentary consultations and estimates for all potential projects. Our team will assess your needs and provide a detailed quote based on your specifications.'
    },
    {
      question: 'Are you licensed and insured?',
      answer: 'Absolutely. EastKen Engineering Solutions is fully licensed, bonded, and insured. We maintain all necessary certifications and comply with local building codes and regulations.'
    },
    {
      question: 'How do you handle project management?',
      answer: 'Each project is assigned a dedicated project manager who oversees all aspects from planning to completion. They serve as your main point of contact and ensure quality, timeline, and budget adherence.'
    },
    {
      question: 'What warranties do you offer on your work?',
      answer: 'We stand behind our craftsmanship with comprehensive warranties. Typically, we provide a 1-year warranty on workmanship and pass through all manufacturer warranties on materials and systems installed.'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h1>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <h2 className="text-xl font-semibold mb-3">{faq.question}</h2>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <h2 className="text-2xl font-semibold mb-4">Still Have Questions?</h2>
            <p className="text-gray-600 mb-8">Contact us for more information about our construction and engineering services.</p>
            <button className="bg-blue-900 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-800 transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}