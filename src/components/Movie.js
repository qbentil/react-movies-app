const MovieItem = () => {
    return (
        <div className="w-[28rem] h-[18rem] bg-white rounded-lg">
            <video className="w-full h-[85%] bg-gray-600 rounded-t-lg" poster="https://i.ytimg.com/vi/FbGrkTzx3r8/maxresdefault.jpg" controls />
            <div className="pl-2 pt-2">
                <p className="text-xl font-semibold text-blue-900">Movie Title</p>
            </div>

        </div>
    )
}

export default MovieItem