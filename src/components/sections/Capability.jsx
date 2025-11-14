import InfoCard from '../cards/InfoCard';
import SectionInfo from '../ui/SectionInfo';
import { FaRobot, FaCloudSun, FaCogs } from "react-icons/fa";
import SectionWrapper from '../wrappers/SectionWrapper';

let features = [
    {
        icon: <FaRobot />,
        title: "AI-Powered Autonomy",
        description:
            "Intelligent onboard decision-making and adaptive mission execution driven by advanced AI models.",
    },
    {
        icon: <FaCloudSun />,
        title: "All-Weather Resilience",
        description:
            "Engineered for reliability across harsh conditions, ensuring uninterrupted operations in any environment.",
    },
    {
        icon: <FaCogs />,
        title: "Modular Payload Systems",
        description:
            "Configurable payload bays supporting a range of sensors and mission-specific technologies.",
    },
]

export default function Capability() {

    return (
        <section className='py-20 bg-charcoal text-center px-6'>
            <SectionWrapper>
                <SectionInfo
                    title={"Unrivaled Autonomous Systems"}
                    description={"Engineering for precision, resilience, and mission versatility."}
                />

                <div className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto'>
                    {features.map((item, index) => (
                        <InfoCard
                            key={index}
                            icon={item.icon}
                            title={item.title}
                            description={item.description}
                        />
                    ))}
                </div>
            </SectionWrapper>
        </section>
    );
}