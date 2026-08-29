const TESTIMONIALS = [
    {
        name: 'Dana K.',
        role: 'Verified buyer',
        avatarSeed: 11,
        quote: 'Copped the Orbit Runner on a Friday drop and it showed up two days later, no fuss.'
    },
    {
        name: 'Tamer A.',
        role: 'Verified buyer',
        avatarSeed: 32,
        quote: 'Sizing chart was spot on. First pair I did not have to return for a size exchange.'
    },
    {
        name: 'Lynn S.',
        role: 'Verified buyer',
        avatarSeed: 47,
        quote: 'The restock alerts actually work. Got the Ferox Low back in stock within three weeks.'
    }
]

export default function Testimonials() {
    return (
        <section className="testimonials">
            <div className="section-heading">
                <h2>What people are saying</h2>
                <p>A few notes from recent orders.</p>
            </div>

            <div className="testimonial-grid">
                {TESTIMONIALS.map((item) => (
                    <blockquote key={item.name} className="testimonial-card">
                        <p>&ldquo;{item.quote}&rdquo;</p>
                        <footer>
                            <img
                                src={`https://i.pravatar.cc/80?img=${item.avatarSeed}`}
                                alt={item.name}
                                loading="lazy"
                            />
                            <div>
                                {item.name}
                                <span>{item.role}</span>
                            </div>
                        </footer>
                    </blockquote>
                ))}
            </div>
        </section>
    )
}