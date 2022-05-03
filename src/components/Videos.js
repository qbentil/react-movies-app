import MovieItem from "./Movie"

const Videos = () => {
    return (
        <div className="bg-[#aaa] grid grid-cols-3 gap-2 min-h-[90vh] p-2">
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