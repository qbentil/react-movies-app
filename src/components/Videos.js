import MovieItem from "./Movie"

const Videos = () => {
    return (
        <div className="bg-[#aaa] grid grid-cols-3 gap-2 min-h-[90vh] p-2">

            {/* When finish designing, we will use the api to  get the videos and map over a Movie Item */}
            <MovieItem />
            <MovieItem />
            <MovieItem />
            <MovieItem />
            <MovieItem />
            <MovieItem />
            <MovieItem />
            <MovieItem />
            <MovieItem />
        </div>
    )
}

export default Videos