import { useState } from 'react'

const FAQS = [
    {
        q: 'How do drops work?',
        a: 'Every Friday at 10am we release one limited pair. Quantities are shown on the product page, and once stock hits zero the pair is marked sold out until the next restock.'
    },
    {
        q: 'What if my size sells out?',
        a: 'Add your email in the newsletter section below — we send a heads up before most pairs come back in rotation, usually within a few weeks.'
    },
    {
        q: 'Can I return a pair?',
        a: 'Yes, unworn pairs can be returned within 30 days of delivery. Start a return from your order confirmation email.'
    },
    {
        q: 'Do you ship outside the country?',
        a: 'This is a demo storefront for a school project, so no real orders or shipping happen here.'
    }
]

export default function FAQAccordion() {
    const [openIndex, setOpenIndex] = useState(0)

    return (
        <section className="faq">
            <div className="section-heading">
                <h2>Questions, answered</h2>
                <p>Still unsure about something? Start here.</p>
            </div>

            <div className="faq-list">
                {FAQS.map((item, index) => {
                    const isOpen = openIndex === index
                    return (
                        <div key={item.q} className={`faq-item ${isOpen ? 'is-open' : ''}`}>
                            <button
                                className="faq-question"
                                onClick={() => setOpenIndex(isOpen ? -1 : index)}
                                aria-expanded={isOpen}
                            >
                                {item.q}
                                <span className="faq-icon">{isOpen ? '−' : '+'}</span>
                            </button>
                            {isOpen && <p className="faq-answer">{item.a}</p>}
                        </div>
                    )
                })}
            </div>
        </section>
    )
}