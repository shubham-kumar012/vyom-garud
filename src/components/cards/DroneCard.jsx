import Button from '../ui/Button/MainButton';
import { motion } from 'framer-motion';

export default function DroneCard({ title, description, imageName }) {

    let fullPath = `/images/drones/${imageName}`;

    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.1, ease: "easeOut" }}
            className="bg-[#061224] pt-0 p-6 rounded-2xl shadow-lg text-center flex flex-col justify-between hover:shadow-accent/20 transition-all duration-300"
        >
            <div className="w-full h-40 mb-6 flex items-center justify-center bg-[#061224]">
                <img
                    src={fullPath}
                    alt={`${title} drone`}
                    className="max-h-full max-w-full object-contain mx-auto"
                />
            </div>

            <div className="grow">
                <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-wider">
                    {title}
                </h3>
                <p className="text-sm text-gray-400 mb-6">
                    {description}
                </p>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-center space-x-4 mt-4">
                <Button text={'Learn More'} />
                <button
                    className="px-5 py-2 text-sm font-semibold text-gray-300 border border-grey-500 rounded-full hover:text-accent hover:border-accent transition-all bg-transparent"
                >
                    View Specs
                </button>
            </div>
        </motion.div>
    );
} 