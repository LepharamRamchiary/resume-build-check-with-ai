const Title = ({ title, highlight, description }) => {
    return (
        <>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                {title}
                <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    {highlight}
                </span>
            </h2>

            <p className="text-sm md:text-md text-slate-300 max-w-3xl mx-auto">
                {description}
            </p>
        </>
    );
};

export default Title;
