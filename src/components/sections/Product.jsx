import SectionInfo from '../ui/SectionInfo';
import DroneCard from '../cards/DroneCard';
import SectionWrapper from '../wrappers/SectionWrapper';

const uavProducts = [
    {
        title: 'RECON SERIES',
        description: 'Stealthy long-endurance UAVs for intelligence gathering',
        imageUrl: 'drone-1.png',
    },
    {
        title: 'GUARDIAN SERIES',
        description: 'Armored drones for surveillance and tactical defense',
        imageUrl: 'drone-2.png',
    },
    {
        title: 'FALCON SERIES',
        description: 'High-speed UAVs optimized for rapid and response missions',
        imageUrl: 'drone-3.png',
    },
];

export default function Product() {
    return (
        <section id='Products' className="py-20 bg-charcoal text-center px-6">
            <SectionWrapper>
                <SectionInfo
                    title={'Our UAV Systems'}
                    description={'Advanced autonomous platforms built for intelligence, resilience, and defense.'}
                />

                <div className='max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {uavProducts.map((product, index) => (
                        <DroneCard
                            key={index}
                            title={product.title}
                            description={product.description}
                            imageName={product.imageUrl}
                        />
                    ))}
                </div>
            </SectionWrapper>
        </section>
    );
}