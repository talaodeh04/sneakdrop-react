import fallbackImage from '../assets/image-fallback.svg'
const LOOKBOOK_IMAGES = [
    {
        image: 'https://cdn.faymas.in/prompt_outputs/ee42e35a-107a-4cfb-a43f-1e0e55614744/674ba8f8-29bf-4d68-9802-9d272d0c2f24.webp',
        caption: 'Studio, drop 04'
    },
    {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxRJRnCqtt8Ft9QQHbT4lWsOUojQXvabsaiEDwbmUWz3iDySJgwZz4HkH5&s=10',
        caption: 'On foot, downtown'
    },
    {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRowO5rmRudLECKdWwQPtEmaoYLCjFdK_ekj1w2CBTGVpqBNL1HLcbhd6iQ&s=10',
        caption: 'Detail, stitched heel'
    },
    {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxC3AT34HGpD8DululxafziGs4Iji5394bz29Phsp4GA0T7dxG87QK_PIi&s=10',
        caption: 'Studio, drop 02'
    },
    {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQACT1AyoqU_dMrNQscJcyf-zjnii24sSK4ew3MHIVo9g&s=10',
        caption: 'On foot, trail edit'
    },
    {
        image: 'https://img.magnific.com/free-photo/close-up-futuristic-sneakers-showcase_23-2151005695.jpg?semt=ais_hybrid&w=740&q=80',
        caption: 'Detail, midsole foam'
    }
]

export default function Lookbook() {
    return (
        <section className="lookbook">
            <div className="section-heading">
                <h2>From the lookbook</h2>
                <p>A few shots from the last few drops.</p>
            </div>

            <div className="lookbook-grid">
                {LOOKBOOK_IMAGES.map((item) => (
                    <figure key={item.caption} className="lookbook-item">
                        <img
                            src={item.image}
                            alt={item.caption}
                            loading="lazy"
                        />
                        <figcaption>{item.caption}</figcaption>
                    </figure>
                ))}
            </div>
        </section>
    )
}