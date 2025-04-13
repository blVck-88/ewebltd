export default function FAQ() {
  const faqs = [
    {
      question: 'How far in advance should I book your services?',
      answer: 'We recommend booking our services 12-18 months before your wedding date for full planning services. For day-of coordination, 6-8 months in advance is recommended.'
    },
    {
      question: 'What is included in your full planning package?',
      answer: 'Our full planning package includes vendor selection and management, budget planning, timeline creation, design consultation, RSVP management, and day-of coordination.'
    },
    {
      question: 'Do you work with a minimum budget?',
      answer: 'While we can accommodate various budgets, we typically work with weddings starting from $25,000 to ensure we can deliver the quality and service our clients expect.'
    },
    {
      question: 'Can I customize my wedding planning package?',
      answer: 'Yes! We understand that every wedding is unique. We offer customizable packages to meet your specific needs and preferences.'
    },
    {
      question: 'How do you handle vendor selection?',
      answer: 'We provide curated vendor recommendations based on your style, budget, and preferences. We handle all communication and negotiations on your behalf.'
    },
    {
      question: 'What happens if there are last-minute changes?',
      answer: 'Our team is experienced in handling last-minute changes. We have contingency plans and maintain flexibility to ensure your wedding day runs smoothly.'
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
            <p className="text-gray-600 mb-8">Contact us for more information about our wedding planning services.</p>
            <button className="bg-blue-900 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-800 transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}