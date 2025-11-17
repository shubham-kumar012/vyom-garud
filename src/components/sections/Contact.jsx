import SectionInfo from '../ui/SectionInfo';
import Button from '../ui/Button/MainButton';
import SectionWrapper from '../wrappers/SectionWrapper';

export default function Contact() {
    return (
        <section id="Contact" className="py-20 bg-charcoal text-center px-6">
            <SectionWrapper>
                <SectionInfo
                    title={"Contact VyomGarud"}
                    description={"Reach our for inquiries, collaborations, or demo request."}
                />

                <div className="max-w-xl mx-auto text-center">
                    {/* Contact Form */}
                    <form className="space-y-6">
                        {/* Name */}
                        <input
                            type="text"
                            placeholder="Name"
                            className="w-full px-5 py-3 bg-black/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition duration-300 placeholder-gray-500"
                        />

                        {/* Email */}
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full px-5 py-3 bg-black/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition duration-300 placeholder-gray-500"
                        />

                        {/* Message Box */}
                        <textarea
                            placeholder="Message"
                            rows="5"
                            className="w-full px-5 py-3 bg-black/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition duration-300 placeholder-gray-500 resize-none"
                        ></textarea>

                        {/* Submit Button */}
                        <Button text={'Send Message'} />

                    </form>

                </div>
            </SectionWrapper>
        </section>
    );
}