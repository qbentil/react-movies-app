import {BsFillPlayFill} from 'react-icons/bs'
import { Link } from "react-router-dom";

const MovieItem = ({video}) => {
  const poster=video.thumbnails[video.thumbnails.length-1].url
  const title = video.metadata.title
  const src = video.assets[video.assets.length-1].url
  return (
    <div className="w-[28rem] h-[35rem] bg-white rounded-lg m-2">
      <Link to={`/watch/:${video.metadata.slug}`} state = {{movie: video}} className=''>
        <div className='relative w-16 rounded-xl bg-cyan-500 shadow-lg shadow-cyan-500 z-50 top-56 left-44 items-center flex justify-center  '>
          <BsFillPlayFill size={40} className={'text-white'} />
        </div>
      </Link>
      <video
        className="w-full h-[80%] bg-black rounded-t-lg cursor-pointer"
        poster={poster}
        // controls
        src={src}
      />
        <div className="h-[30%] p-3">
          <p className="text-lg pt-1 mb-10 font-semibold text-blue-900">
            {title}
          </p>
        </div>
    </div>
  );
};

export default MovieItem;
