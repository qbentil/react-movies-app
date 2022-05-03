const MovieItem = () => {
    return (
        <div className="w-[28rem] h-[18rem] bg-white rounded-lg">
            <div className="w-full h-[65%] bg-gray-600 rounded-t-lg">
                
            </div>
            <div className="pl-2 pt-2">
                <p className="text-xl font-semibold text-blue-900">Movie Title</p>
                <p className="text-lg">Short description</p>
            </div>
            <div className="ml-[22rem] -mt-[5.8rem] h-14 w-14 rounded-full bg-blue-900 flex justify-center items-center">
                Icon
            </div>
        </div>
    )
}

export default MovieItem