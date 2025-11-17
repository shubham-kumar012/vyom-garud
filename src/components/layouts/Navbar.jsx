import Button from "../ui/Button/MainButton";
import { motion } from 'framer-motion';
import { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

function Navbar() {
    const [open, setOpen] = useState(false);

    const scrollTo = (id) => {
        document.getElementById(id)?.scrollIntoView({
            behavior: "smooth"
        });
        // setOpen(false);
    };


    return (
        <motion.nav
            id='Home'
            className="flex items-center justify-between px-10 py-6 bg-transparent"
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
        >

            {/* Website Logo */}
            <div className="text-2xl font-bold" onClick={() => scrollTo('home')}>
                <span className="text-white">Garud</span>
                <span className="text-accent">One</span>
            </div>

            {/* Desktop menu */}
            <div className="hidden md:flex justify-center items-center space-x-10 text-gray-300 font-medium">
                <ul className="flex space-x-8 text-gray-300">
                    {["Home", "Services", "Products", "About", "Contact"].map((item) => (
                        <li key={item} onClick={() => scrollTo(item)} className="hover:text-accent cursor-pointer transition-colors">
                            {item}
                        </li>
                    ))}
                </ul>

                <Button text={'Request Demo'} />
            </div>

            {/* Mobile menu button */}
            <button
                className="md:hidden text-white text-3xl"
                onClick={() => setOpen(!open)}
            >
                {open ? <HiX /> : <HiMenu />}
            </button>

            {/* Mobile view menu */}
            {open && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25 }}
                    className="md:hidden fixed top-20 left-1/2 -translate-x-1/2 w-[90%] 
                   bg-[#0b0c10]/95 p-6 rounded-2xl space-y-4 
                   text-gray-300 font-medium shadow-xl border border-white/5 
                   backdrop-blur-md z-50"
                >
                    {["Home", "Services", "Products", "About", "Contact"].map((item) => (
                        <div
                            key={item}
                            className="hover:text-accent cursor-pointer transition text-lg"
                            onClick={() => (
                                scrollTo(item),
                                setOpen(!open)
                            )}
                        >
                            {item}
                        </div>
                    ))}

                    <Button text={"Request Demo"} />
                </motion.div>
            )}


        </motion.nav>
    );
}

export default Navbar;