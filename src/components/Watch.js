import React from "react";

// import { data } from "../data"

function Watch({movie}) {
  return (
      <div className="w-[63.5%] h-[38rem] bg-white rounded-lg m-2 overflow-y-auto">
        <video
          className="w-full h-[80%] bg-transparent rounded-t-lg cursor-pointer"
          poster={movie.thumbnails[2].url}
          controls
          src={movie.assets[2].url}
          autoPlay
        />
        <div className="h-[30%] p-3">
          <p className="text-xl pt-1 font-bold border-b border-cyan-500 text-blue-900">
            {movie.metadata.title}
          </p>
          <p>
            {movie.metadata.description}
          </p>
        </div>
      </div>
  );
}

export default Watch;
