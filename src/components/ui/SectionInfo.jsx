export default function SectionInfo({title, description}) {
    return (
        <div className="flex justify-center items-center flex-col ">
            <h2 className="text-3xl md:text-4xl font-bold text-white ">{title}</h2>
            <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-lg">{description}</p>
        </div>
    );
}