import React from "react";

const MovieCard = ({ movie }) => {
    return (
      <div className="movie">
        <div>
          <p>{movie.Year}</p>
        </div>
        <div>
          <img src={movie.Poster !== "N/A" ? movie.Poster : "http://via.placeholder.com/400"} alt={movie.Title} />
        </div>
        <div>
          <span>{movie.Type === "movie" ? "film" : movie.Type && 
                 movie.Type === "series" ? "serie" : movie.Type && 
                 movie.Type === "game" ? "spil" : movie.Type}</span>
          <h3>{movie.Title}</h3>
        </div>
      </div>
    );
}

export default MovieCard;