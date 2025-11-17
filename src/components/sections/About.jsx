import SectionInfo from '../ui/SectionInfo';
import SectionWrapper from '../wrappers/SectionWrapper';

export default function About() {
    return (
        <section id="About" className="py-20 bg-charcoal text-center px-6">
            <SectionWrapper>
                <SectionInfo
                    title={'About Garud One'}
                    description={'Engineering the future of autonomous flight'}
                />

                <div className="max-w-2xl mx-auto text-center">
                    <p className="text-lg md:text-xl leading-relaxed text-gray-300">
                        GarudOne is a next-generation UAV technology, combining AI-driven autonomy with aerospace-grade reliability. Our mission is to empower defense and industry with intelligent, resilient, and mission-ready aerial systems that safeguard horizons worldwide.
                    </p>
                </div>
            </SectionWrapper>
        </section>
    );
}