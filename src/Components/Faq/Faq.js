import React, { useState } from 'react'

const faqs = [
    {
      question: 'Can education flashcard be used for all age?',
      answer: 'Yes education flashcard be used for all age'
    },
    {
      question: 'How do education flshard work?',
      answer: 'How do education flshard work',
    },
    {
      question: 'Can education flashcard be used for test preparation?',
      answer: 'Yes education flashcard be used for test preparation',
    },
  ];
const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
    
  return (
    <div className='float-left grid justify-start sm:justify-start'>
      <h1 className='flex text-3xl text-login-blue mb-8'>FAQ</h1>
      <div className="lg:w-ful md:w-full mr-5  sm:w-60">
      {faqs.map((faq, index) => (
        <div key={index} className="mb-4">
          <div
            className="flex rounded-xl justify-between p-3 items-center cursor-pointer border border-liner-gradient"
            onClick={() => toggleFAQ(index)}
          >
            <h3 className="text-lg font-medium">{faq.question}</h3>
            <svg
              className={`w-5 h-5 transition-transform ${
                activeIndex === index ? 'transform rotate-180' : ''
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
          <div
            className={`mt-2 ${
              activeIndex === index ? 'block' : 'hidden'
            }`}
          >
            <p className="text-gray-700">{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
    </div>
  )
}

export default Faq
