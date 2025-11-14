import SectionInfo from '../ui/SectionInfo';
import InfoCard from '../cards/InfoCard';
import { IoShieldCheckmarkOutline, IoSunny } from "react-icons/io5";
import { FaUserShield } from "react-icons/fa";
import SectionWrapper from '../wrappers/SectionWrapper';

let highlights = [
    {
        icon: <IoShieldCheckmarkOutline />,
        title: "10+ Years of Innovation",
        description:
            "Over 10,000 Autonomous flight hours with un-matched operational uptime.",
    },
    {
        icon: <IoSunny />,
        title: "Cutting-Edge Engineering",
        description:
            "Design and tested to aerospace-grade standards",
    },
    {
        icon: <FaUserShield />,
        title: "Trusted by Defence & Industry",
        description:
            "Deployed across critical intelligence and surveilliance",
    },
]

export default function Highlight() {
    return (
        <section id="Services" className="py-20 bg-charcoal text-center px-6">
            <SectionWrapper>
                <SectionInfo
                    title={'Proven excellence in Autonomous Flight'}
                    description={'Decades of engineering precision, mission rellability, and trusted innovation.'} />

                <div className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto'>
                    {highlights.map((item, index) => (
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