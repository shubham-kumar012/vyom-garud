
function MainButton({text}) {
    return (
        <button className="bg-accent text-white px-5 py-2 rounded-full font-xs hover:opacity-90 transition-all">
            {text}
        </button>
    );
}

export default MainButton