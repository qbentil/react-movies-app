const MovieItem = ({poster, src, title}) => {
    return (
        <div className="w-[28rem] min-h-[18rem] bg-white rounded-lg">
            <video 
                className="w-full h-[80%] bg-black rounded-t-lg" 
                poster={poster}
                controls 
                src={src}
            />
            <div className="h-[20%] ">
                <p className="text-xl my-5 mb-10 font-semibold text-blue-900">{title}</p>
                
            </div>

        </div>
    )
}

export default MovieItem