function Card({ name, role }) {
    return(
        <div className="flex flex-col items-center border-4 border-black rounded-md w-24 h-24 p-2 my-2">
            <div className="flex items-center justify-center w-12 h-12 border-2 border-gray-700 rounded-full">
                {/* Placeholder for icon/image */}
                <span className="text-lg">👤</span>
            </div>
            <p className="text-center mt-2 text-sm font-semibold">{name}</p>
            <p className="text-center text-xs">({role})</p>
    </div>
    );
}
export default Card();