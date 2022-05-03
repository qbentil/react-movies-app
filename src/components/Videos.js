import MovieItem from "./Movie"
import { data } from "../data"
const Videos = () => {
    return (
        <div className="bg-[#aaa] grid grid-cols-3 gap-2 min-h-[90vh] p-2">

            {/* When finish designing, we will use the api to  get the videos and map over a Movie Item */}
            {
                data.map((d) => {
                    return <MovieItem
                        poster={d.thumbnails[d.thumbnails.length-1].url}
                        title = {d.metadata.title}
                        src = {d.assets[d.assets.length-1].url}
                    />
                })
            }

        </div>
    )
}

export default Videos