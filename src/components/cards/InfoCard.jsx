import { motion } from 'framer-motion';

export default function InfoCard({ icon, title, description }) {
    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.1, ease: "easeOut" }}
            className="bg-[#061224] rounded-2xl p-8 text-center shadow-lg hover:shadow-accent/20 transition-all duration-300"
            >
            <div className="flex justify-center mb-4 text-accent text-4xl">
                {icon}
            </div>
            <h3 className="text-xl font-semibold mb-3 text-white">{title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
        </motion.div>
    );
}