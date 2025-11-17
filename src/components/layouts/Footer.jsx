import { FaLinkedin , FaXTwitter, FaFacebookF } from "react-icons/fa6";

export default function Footer() {
    const scrollTo = (id) => {
        document.getElementById(id)?.scrollIntoView({
            behavior: "smooth"
        });
    };

    return (
        <footer className="bg-[#0C161E] text-white pt-5 pb-6 px-6 border-t border-gray-800">
            <div className="max-w-6xl mx-auto">

                {/* Top Footer Row: Logo, Links, Socials */}
                <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 pb-2">

                    {/* Logo */}
                    <div className="flex items-center" onClick={() => scrollTo('Home')}>
                        <span className="text-xl font-semibold">Garud</span>
                        <span className="text-xl font-semibold text-accent" >One</span>
                    </div>

                    {/* Navigation Links */}
                    <nav className="flex space-x-8 text-lg font-medium">
                        <a onClick={() => scrollTo('Home')} className="hover:text-accent transition duration-200">Home</a>
                        <a onClick={() => scrollTo('Products')} className="hover:text-accent transition duration-200">Products</a>
                        <a onClick={() => scrollTo('About')} className="hover:text-accent transition duration-200">About Us</a>
                    </nav>

                    {/* Social Media Icons (Using simple placeholders) */}
                    <div className="flex space-x-6">
                        <a href="#" className="text-gray-400 hover:text-white transition duration-200" aria-label="YouTube">
                            <span className="text-2xl"><FaLinkedin /></span>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white transition duration-200" aria-label="Twitter">
                            <span className="text-2xl"><FaXTwitter/></span>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white transition duration-200" aria-label="Facebook">
                            <span className="text-2xl"><FaFacebookF/></span>
                        </a>
                    </div>

                </div>

                {/* Separator Line */}
                <hr className="border-gray-800 my-4" />

                {/* Copyright Text */}
                <div className="text-center text-sm text-gray-500 pt-3">
                    © 2025 VyomGarud. All Rights Reserved.
                </div>

            </div>
        </footer>
    );
}