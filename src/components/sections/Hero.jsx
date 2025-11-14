import Button from '../ui/Button/MainButton';
import Typewriter from 'typewriter-effect';
import desktopImage from '../../assets/background-image.png';
import mobileImage from '../../assets/background-image-1.png';

export default function Hero() {
    return (
        <section className="relative flex flex-col items-start justify-center text-center min-h-screen overflow-hidden">
            {/* background image */}
            <div className="absolute inset-0 bg-cover bg-center opacity-100 bg-(image:--mobile-img)
        md:bg-(image:--desktop-img)"
                style={{
                    "--mobile-img": `url(${mobileImage})`,
                    "--desktop-img": `url(${desktopImage})`,
                }}
            >
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-linear-to-r from-[#0b0c10]/90 via-[#0b0c10]/60 to-transparent"></div>


            {/* Content */}
            <div className="relative z-10 px-6 md:px-16 max-w-2xl text-left">
                <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
                    Guardians of the &nbsp;
                    <span className='inline-block'>
                        <Typewriter
                            onInit={(typewriter) => {
                                typewriter
                                    .typeString('<span class="text-accent">Horizon</span>')
                                    .pauseFor(1200)
                                    .deleteAll()

                                    .typeString('<span class="text-accent">Sky</span>')
                                    .pauseFor(1200)
                                    .deleteAll()

                                    .typeString('<span class="text-accent">Future</span>')
                                    .pauseFor(1200)
                                    .deleteAll()

                                    .start();
                            }}
                            options={{
                                html: true,
                                loop: true,
                                delay: 120,
                                deleteSpeed: 60,
                            }}
                        />

                    </span>
                </h1>

                <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-lg">
                    Unrivaled autonomous capabilities for military-grade UAV operations,
                    combining AI precision and unmatched aerial performance.
                </p>

                <div className="flex flex-wrap gap-4">
                    <Button text={'Request a Demo'} />
                    <button className="border border-gray-500 px-6 py-3 rounded-full font-medium text-gray-300 hover:border-accent hover:text-accent transition-all">
                        Learn More
                    </button>
                </div>
            </div>
        </section>
    );
}